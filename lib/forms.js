'use strict';

function Forms(html) {
  this.html = html.content;
}

Forms.prototype.html = '';

Forms.prototype.check = function() {
  var matches = this.html.match(/<form[^>]*>/);
  return matches !== null;
}

Forms.prototype.get = function(html) {
  var res = [];

  this.html.match(/<form[^>]* action="([^"]*)"[^>]*>/g).forEach(match => {
    res.push(match.match(/<form[^>]* action="([^"]*)"[^>]*>/)[1]);
  });
  return res;
}

module.exports = Forms;
