'use strict';
const request = require('request');

//languages with more than 1M articles
const wantLanguage = {
  'en': true, //english
  'de': true, //german
  'ru': true, //russian
  'es': true, //spanish
  'ja': true, //japanese
  'fr': true, //french
  'it': true, //italian
  'pl': true, //polish
  'zh': true, //chinese
  'pt': true, //portuguese
  'nl': true, //duth
  'tr': true, //turkish
  'ar': true, //arabic
  'cs': true, //czech
  'sv': true, //swedish
};

const query = function(title, callback) {
  title = encodeURIComponent(title);
  let url = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + title + '&prop=langlinks&lllimit=200&llprop=langname&redirects&format=json';
  request(url, (err, response) => {
    const data = JSON.parse(response.body);
    let wip = Object.keys(data.query.pages)[0];
    let obj = data.query.pages[wip] || {};
    obj = obj.langlinks.reduce((h, o) => {
      if (wantLanguage[o.lang]) {
        h[o.langname] = o['*'];
      } else {
        console.log(o.lang + '   ' + o['*']);
      }
      return h;
    }, {});
    callback(obj);
  });
};

module.exports = query;

query('Toronto', (o) => console.log(o));
