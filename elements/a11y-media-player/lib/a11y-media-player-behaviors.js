/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { A11yMediaBehaviors } from "./a11y-media-behaviors.js";

export { A11yMediaPlayerBehaviors };
/**
 * `a11y-media-player-behaviors`
 * `A set of properties for a11y-media components that are NOT used in the transcript components.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @extends A11yMediaBehaviors
 * @customElement
 * @polymer
 */
class A11yMediaPlayerBehaviors extends A11yMediaBehaviors {
  // properties available to the custom element for data binding
  static get properties() {
    return {
      /**
       * Allow this media to play concurrently with other a11y-media-players?
       * Default is to pause this a11y-media-player when other a11y-media-player starts playing.
       */

      allowConcurrent: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Is it an audio player with no thumbnail?
       */
      audioNoThumb: {
        type: Boolean,
        computed: "_getAudioNoThumb(audioOnly,thumbnailSrc)",
        reflectToAttribute: true
      },
      /**
       * Is this an audio file?
       */
      audioOnly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Use compact controls?
       */
      compactControls: {
        type: Boolean,
        computed: "_getCompactControls(responsiveSize)",
        reflectToAttribute: true
      },
      /**
       * crossorigin attribute for <video> and <audio> tags
       */
      crossorigin: {
        type: String,
        value: null,
        reflectToAttribute: true
      },
      /**
       * Use dark theme on transcript? Default is false, even when player is dark.
       */
      darkTranscript: {
        type: Boolean,
        value: false
      },
      /**
       * disable fullscreen option
       */
      disableFullscreen: {
        type: Boolean,
        value: false
      },
      /**
       * disable interactive mode that makes the transcript clickable
       */
      disableInteractive: {
        type: Boolean,
        value: false
      },
      /**
       * disable transcript search feature
       */
      disableSearch: {
        type: Boolean,
        value: false
      },
      /**
       * disable autoscrolling as transcript plays
       */
      disableScroll: {
        type: Boolean,
        value: false
      },
      /**
       * disable transcript print button
       */
      disablePrintButton: {
        type: Boolean,
        value: false
      },
      /**
       * Determines if video and transcript are in a flex layout
       */
      flexLayout: {
        type: Boolean,
        computed:
          "_isFlexLayout(standAlone,hideTranscript,audioNoThumb,stackedLayout)",
        reflectToAttribute: true
      },
      /**
       * Is fullscreen mode?
       */
      fullscreen: {
        type: Boolean,
        value: false
      },
      /**
       * show the FullscreenButton?
       */
      fullscreenButton: {
        type: Boolean,
        computed: "_getFullscreenButton(disableFullscreen)",
        notify: true
      },
      /**
       * Does the player have tracks?
       */
      hasCaptions: {
        type: Boolean,
        value: false
      },
      /**
       * Does the player have an interactive transcript?
       */
      hasTranscript: {
        type: Boolean,
        value: false
      },
      /**
       * The height of the media player.
       */
      height: {
        type: String,
        value: null
      },
      /**
       * Hide elapsed time?
       */
      hideElapsedTime: {
        type: Boolean,
        value: false
      },
      /**
       * initially hide the transcript?
       */
      hideTranscript: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * show cue's start and end time
       */
      hideTimestamps: {
        type: Boolean,
        value: false
      },
      /**
       * the media to be manipulated
       */
      media: {
        type: Object,
        value: null
      },
      /**
       * the language of the media (if different from user interface language)
       */
      mediaLang: {
        type: String,
        value: "en"
      },
      /**
       * optional title of media (shows when printed)
       */
      mediaTitle: {
        type: String,
        value: "",
        reflectToAttribute: true
      },
      /**
       * mute/unmute button
       */
      muteUnmute: {
        type: Object,
        computed: "_getMuteUnmute(muted,localization)"
      },
      /**
       * Is media playing?
       */
      playing: {
        type: Boolean,
        value: false
      },
      /**
       * play/pause button
       */
      playPause: {
        type: Object,
        computed: "_getPlayPause(playing,localization)"
      },
      /**
       * Size of the a11y media element for responsive styling
       */
      responsiveSize: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      /**
       * the search tool for the transcript
       */
      search: {
        type: Object,
        value: null
      },
      /**
       * is YouTube?
       */
      showCustomCaptions: {
        type: Boolean,
        computed: "_showCustomCaptions(isYoutube,audioOnly,hasCaptions,cc)",
        reflectToAttribute: true
      },
      /**
       * stacked layout instead of side-by-side?
       */
      stackedLayout: {
        type: Boolean,
        value: false
      },
      /**
       * Is stand-alone player (without transcript)?
       */
      standAlone: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * target of the controls
       */
      target: {
        type: Object,
        value: null
      },
      /**
       * Source of optional thumbnail image
       */
      thumbnailSrc: {
        type: String,
        value: null,
        reflectToAttribute: true
      },
      /**
       * The width of the media player.
       */
      width: {
        type: String,
        value: null
      }
    };
  }

  //get player-specifc properties
  static get behaviors() {
    return [A11yMediaBehaviors];
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "a11y-media-player-behaviors";
  }

  /**
   * returns true if an attribute is set to a value
   *
   * @param {boolean} Is the media audio only?
   * @param {string} optional: the source URL of the thumbnail image
   * @returns {boolean} Should height of video/thumbnail area be set to 0?
   */
  _getAudioNoThumb(audioOnly, thumbnailSrc) {
    return audioOnly && (thumbnailSrc === null || thumbnailSrc === undefined);
  }

  /**
   * returns whether or not the fullscreen mode should be disabled
   *
   * @param {boolean} Is fullscreen mode set to disabled?
   * @returns {boolean} Should fullscreen disabled?
   */
  _getFullscreenButton(disableFullscreen) {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      disableFullscreen
    ) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * returns true if player is xs or sm and needs to use compact controls
   *
   * @param {string} the size of the player: `xs`,`sm`,`md`,`lg`, or `xl`
   * @returns {boolean} Should the player use compact controls?
   */
  _getCompactControls(responsiveSize) {
    return (
      this._testAttribute(responsiveSize, "xs") ||
      this._testAttribute(responsiveSize, "sm")
    );
  }

  /**
   * set play/pause button
   *
   * @param {boolean} Is the media playing?
   * @param {string} label if button pauses media
   * @param {string} icon if button pauses media
   * @param {string} label if button plays media
   * @param {string} icon if button plays media
   * @returns {object} an object containing the current state of the play/pause button, eg., `{"label": "Pause", "icon": "av:pause"}`
   */
  _getPlayPause(playing, localization) {
    return playing
      ? {
          label: this._getLocal(localization, "pause", "label"),
          icon: this._getLocal(localization, "pause", "icon")
        }
      : {
          label: this._getLocal(localization, "play", "label"),
          icon: this._getLocal(localization, "play", "icon")
        };
  }

  /**
   * set play/pause button
   *
   * @param {boolean} Is the media muted?
   * @param {string} label if button mutes media
   * @param {string} icon if button mutes media
   * @param {string} label if button unmutes media
   * @param {string} icon if button unmutes media
   * @returns {object} an object containing the current state of the play/pause button, eg., `{"label": "mute", "icon": "av:volume-off"}`
   */
  _getMuteUnmute(muted, localization) {
    return muted
      ? {
          label: this._getLocal(localization, "unmute", "label"),
          icon: this._getLocal(localization, "unmute", "icon")
        }
      : {
          label: this._getLocal(localization, "mute", "label"),
          icon: this._getLocal(localization, "mute", "icon")
        };
  }

  /**
   * Show custom CC (for audio and YouTube)?
   *
   * @param {boolean} Is the media from YouTube?
   * @param {boolean} Is the media audio only?
   * @param {boolean} Does the media have CC tracks?
   * @param {boolean} Are the CC turned on?
   * @returns {boolean} Should the player show custom CC?
   */
  _showCustomCaptions(isYoutube, audioOnly, hasCaptions, cc) {
    return (isYoutube || audioOnly) && hasCaptions && cc;
  }

  /**
   * Does the player have custom CC tracks?
   *
   * @param {boolean} Is the media from YouTube?
   * @param {boolean} Is the media audio only?
   * @param {boolean} Does the media have CC tracks?
   * @returns {boolean} Does the player have custom CC?
   */
  _hasCustomCaptions(isYoutube, audioOnly, hasCaptions) {
    return (isYoutube || audioOnly) && hasCaptions;
  }

  /**
   * Determines if video and transcript are in a flex layout
   *
   * @param {boolean} Is the player in stand-alone mode?
   * @param {boolean} Is the transcript hidden?
   * @param {boolean} Does the media no video or thumbnail image?
   * @param {boolean} Is the layout stacked?
   * @returns {boolean} Is the video in flex layout mode?
   */
  _isFlexLayout(standAlone, hideTranscript, audioNoThumb, stackedLayout) {
    return !standAlone && !hideTranscript && !audioNoThumb && !stackedLayout;
  }
}
window.customElements.define(
  A11yMediaPlayerBehaviors.tag,
  A11yMediaPlayerBehaviors
);
