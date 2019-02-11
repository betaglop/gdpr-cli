'use strict';

function hasVimeo(html) {
  var matches = html.content.match(/<video.+<source type="video\/vimeo" src="https?:\/\/vimeo.com\//);
  return matches !== null;
}

function hasYoutube(html) {
  var matches = html.content.match(/<iframe.+src="https:\/\/www.youtube.com\/embed\//);
  return matches !== null;
}

function hasDailymotion(html) {
  var matches = html.content.match(/<iframe.+src="https:\/\/www.dailymotion.com\/embed\/video\/.+>/);
  return matches !== null;
}

module.exports = {
  hasVimeo,
  hasDailymotion,
  hasYoutube,
};
