'use strict';

function getVimeoInformations(html) {
  if ( !hasVimeo(html) ) return null;

  var matches = html.content.match(/<video.+<source type="video\/vimeo" src="(https?:\/\/vimeo.com\/(\d+)[^"]+)/);
  return {
    name: 'Vimeo',
    url: new URL(matches[1]),
    id: matches[2],
  }
}
function hasVimeo(html) {
  var matches = html.content.match(/<video.+<source type="video\/vimeo" src="https?:\/\/vimeo.com\//);
  return matches !== null;
}

function getYoutubeInformations(html) {
  if ( !hasYoutube(html) ) return null;

  var matches = html.content.match(/<iframe.+src="(https?:\/\/www.youtube.com\/embed\/([^"?]+)[^"]*)"/);
  return {
    name: 'Youtube',
    url: new URL(matches[1]),
    id: matches[2],
  }
}
function hasYoutube(html) {
  var matches = html.content.match(/<iframe.+src="https:\/\/www.youtube.com\/embed\//);
  return matches !== null;
}

function getDailymotionInformations(html) {
  if ( !hasDailymotion(html) ) return null;

  var matches = html.content.match(/<iframe.+src="(https:\/\/www.dailymotion.com\/embed\/video\/([^"?]+)[^"]*)".+>/);
  return {
    name: 'Dailymotion',
    url: new URL(matches[1]),
    id: matches[2],
  }
}
function hasDailymotion(html) {
  var matches = html.content.match(/<iframe.+src="https:\/\/www.dailymotion.com\/embed\/video\/.+>/);
  return matches !== null;
}

module.exports = {
  hasVimeo,
  hasDailymotion,
  hasYoutube,
  getVimeoInformations,
  getDailymotionInformations,
  getYoutubeInformations
};
