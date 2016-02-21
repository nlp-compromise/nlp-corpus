'use strict';
const pages = require('./pages');
const wtf_wikipedia = require('wtf_wikipedia');
const async = require('async');
const fs = require('fs');

//Fisher-Yates array randomizer
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


const build = function(lang, size) {
  lang = lang || 'en';
  if (size > pages.length) {
    size = pages.length;
  }
  let articles = shuffle(pages).slice(0, size);
  articles = articles.map((o) => o[lang]);

  const fetch_page = function(title, cb) {
    wtf_wikipedia.from_api(title, lang, function(markup) {
      let text = wtf_wikipedia.plaintext(markup) || '';
      cb(null, text);
    });
  };

  async.mapLimit(articles, 5, fetch_page, (err, result) => {
    let txt = result.reduce((s, page) => {
      if (page && typeof page === 'string') {
        s += page + '\n';
      }
      return s;
    }, {});
    //write it to a file
    let filename = __dirname + '/corpus/' + lang + '.txt';
    fs.writeFile(filename, txt, 'utf8', () => {
      console.log('---done!');
      console.log('view file at: ');
      console.log(filename);
      console.log('use \'head\' or \'wc -w\' if it is too big to open');
    });
  });
  return;
};

module.exports = build;

// build('fr', 5);
