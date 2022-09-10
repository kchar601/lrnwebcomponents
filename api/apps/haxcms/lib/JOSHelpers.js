import { JSONOutlineSchema } from "./JSONOutlineSchema.js";
import { parse } from 'node-html-parser';
import fetch from "node-fetch";
// this either pulls the site from the location directly or from the data passed in
// so that other things can work with the outline as loaded
export async function resolveSiteData(siteLocation, siteData = null) {
  const site = new JSONOutlineSchema();
  // support side-loading site.json data through direct access
  // this is most useful for themes and solutions that are actively
  // running a HAXcms site and already have access to these details
  if (siteData) {
    site.file = siteData.file;
    site.id = siteData.id;
    site.title = siteData.title;
    site.author = siteData.author;
    site.description = siteData.description;
    site.license = siteData.license;
    site.metadata = siteData.metadata;
    site.items = siteData.items;
  }
  else {
    await site.load(`${siteLocation}/site.json`);
  }
  return site;
}

// generate stats given a location within the outline
export async function courseStatsFromOutline(siteLocation, siteData = null, ancestor = null) {
  // get youtube data
  const site = await resolveSiteData(siteLocation, siteData);
  // support slicing the structure to only the branch in question
  // this will set the "root" for buildind an HTML structure to be something different than
  // null and as a result will build the whole site
  let items = [];
  // filter out unpublished pages for our stat generation
  if (ancestor != null) {
    items = site.findBranch(ancestor).filter(function(el) {
      if (el && el.metadata && el.metadata.published) {
        return true;
      }
      return false;
    });
  }
  else {
    items = site.orderTree(site.items).filter(function(el) {
      if (el && el.metadata && el.metadata.published === false) {
        return false;
      }
      return true;
    });
  }
  // parse dom of the content of the site relative to ancestor
  const html = await siteHTMLContent(siteLocation, siteData, ancestor);
  const doc = parse(`<div id="wrapper">${html}</div>`);
  // guestimate readTime, assuming 225 words per minute for average adult reading time
  const words = doc.querySelector("#wrapper").innerText.trim().split(/\s+/).length;
  const readTime = Math.ceil(words / 225);
  const data = {
    pages: items.length,
    video: doc.querySelectorAll('video-player,iframe[src*="youtube.com"],iframe[src*="vimeo.com"],video[src],video source[src],a11y-media-player').length,
    audio: doc.querySelectorAll('audio[src],audio source[src],audio-player').length,
    selfChecks: doc.querySelectorAll('iframe.entity_iframe,self-check,multiple-choice').length,
    objectives: doc.querySelectorAll('instruction-card[type="objectives"] li').length,
    images: doc.querySelectorAll('media-image,img,simple-img').length,
    readTime: readTime,
    dataTables: doc.querySelectorAll('table').length,
    videoLength: 0,
  };
  // walk all the video sources and build 1 request for google API about duration data
  // as they allow batches of 50
  var ytVids = [];
  var videoLength = 0;
  doc.querySelectorAll('video-player,iframe[src*="youtube.com"],iframe[src*="vimeo.com"],video[src],video source[src],a11y-media-player').forEach( async (el) => {
    let urlData = {};
    if (el.getAttribute('source')) {
      urlData = new URL(el.getAttribute('source'));
    }
    else if (el.getAttribute('src')) {
      urlData = new URL(el.getAttribute('src'));
    }
    if (urlData.origin) {
      // support the 3 variations of youtube link
      switch (urlData.origin) {
        case 'https://www.youtube-nocookie.com':
        case 'https://www.youtube.com':
          if (urlData?.searchParams?.v) {
            ytVids.push(urlData.searchParams.v);
          }
          else if (urlData.pathname.startsWith('/embed/')) {
            ytVids.push(urlData.pathname.replace('/embed/',''));
          }
        break;
        case 'https://youtu.be':
          ytVids.push(urlData.pathname.replace('/',''));
        break;
        case 'https://vimeo.com':
        case 'https://player.vimeo.com':
          // no batching in vimeo oembed API
          const vimData = await fetch(`https://vimeo.com/api/oembed.json?url=${urlData.href}`).then((d) => d.ok ? d.json(): {});
          if (vimData?.duration) {
            videoLength += parseInt(vimData.duration);
          }
        break;
        default:
          // @todo if a file try to read metadata off it
          // if vimeo try to hit their duration API
          // if elsewhere, ignore.
        break;
      }
    }
  });
  // make sure we found videos
  if (ytVids.length > 0) {
    let tmp = [];
    for (let i=0; i< ytVids.length; i++) {
      if (tmp.length === 50) {
        videoLength += parseInt(await getYoutubeDuration(tmp.join(',')));
        tmp = [];
      }
      tmp.push(ytVids[i]);
    }
    if (tmp.length > 0) {
      videoLength += parseInt(await getYoutubeDuration(tmp.join(',')));
    }
  }
  data.videoLength = videoLength;
  return data;
}

// get all of the HTML for the site relative to an ancestor starting point
export async function siteHTMLContent(siteLocation, siteData = null, ancestor = null, noTitles = false) {
  const site = await resolveSiteData(siteLocation, siteData);
  var siteContent = '';
  // support slicing the structure to only the branch in question
  // this will set the "root" for buildind an HTML structure to be something different than
  // null and as a result will build the whole site
  let items = [];
  if (ancestor != null) {
    items = site.findBranch(ancestor);
  }
  else {
    items = site.orderTree(site.items);
  }
  // ordered
  // get every page and stuff it together
  for (var i in items) {
    if (!noTitles) {
      siteContent += `<h1>${items[i].title}</h1>`;
    }
    let content = await site.getContentById(items[i].id);
    siteContent += content;
  }
  return siteContent;
}

// get duration, supports multiple in 1 request
export async function getYoutubeDuration(vid) {
  var duration = 0;
  const url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&key=${process.env.YOUTUBE_API_KEY}&id=${vid}`;
  const ytData = await fetch(url).then((d) => d.ok ? d.json(): {});
  if (ytData?.items) {
    ytData.items.forEach((item) => {
      duration += parseInt(durationFormatConvert(item.contentDetails.duration));
    })
    return duration;
  }
  return 0;
}

export function durationFormatConvert(input) {
  var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  var hours = 0, minutes = 0, seconds = 0, totalseconds;

  if (reptms.test(input)) {
    var matches = reptms.exec(input);
    if (matches[1]) hours = Number(matches[1]);
    if (matches[2]) minutes = Number(matches[2]);
    if (matches[3]) seconds = Number(matches[3]);
    totalseconds = hours * 3600  + minutes * 60 + seconds;
  }
  return totalseconds;
}