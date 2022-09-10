import { stdPostBody, stdResponse } from "../../../utilities/requestHelpers.js";
import { courseStatsFromOutline } from "./lib/JOSHelpers.js";

// given a site, and current page, obtain stats that are possibly relevant
// to smart blocks like lesson-intro, course-intro and others as long
// as they might be relevant to pedagogy. This is pretty open ended
// but things like # of videos, text length, etc
export default async function handler(req, res) {
  let data = {};
  // use this if POST data is what's being sent
  const body = stdPostBody(req);
  if (body.site && body.type) {
    // get URL bits for validating and forming calls
    let url = '';
    if (body.type === 'link') {
      url = body.site.replace('/site.json', '');
    }
    else {
      body.site.file = body.site.file.replace('.stage-hax.vmhost.', '.hax.').replace('iam.hax.', 'oer.hax.');
      // abuse that we have this prop for where somerthing lives
      url = body.site.file.replace('/site.json', '');
    }
    // handle trailing slash
    if (url.endsWith('/')) {
      url = url.slice(0, -1);
    }
    var parseURL = new URL(url);
    // verify we have a path / host
    if (parseURL.pathname && parseURL.host) {
      // support for iam vs oer
      if (parseURL.host) {
        // specific to our instances but iam is going to block access when querying for the site content
        // iam is the authoring domain while oer is the openly available one which if printing
        // and rendering the content appropriately, this is the way to do it
        parseURL.host = parseURL.host.replace('.stage-hax.vmhost.', '.hax.').replace('iam.hax.', 'oer.hax.');
      }
      const base = `${parseURL.protocol}//${parseURL.host}${parseURL.pathname}`;
      const siteData = body.site || null;
      const ancestor = body.ancestor || null;
      if (body.type === 'link') {
        data = await courseStatsFromOutline(base, null, ancestor);
      }
      else {
        data = await courseStatsFromOutline(base, siteData, ancestor);
      }
    }
  }
  let options = {methods: "OPTIONS, POST" };
  if (!body.cacheBuster) {
    // no ancestor means entire site; only allow this weekly
    if ((body.ancestor || null) === null) {
      options.cache = 604800;
    }
    else {
      // full day cache for everything lower; this is still very aggressive
      options.cache = 86400;
    }
  }
  res = stdResponse(res, data, options);
}