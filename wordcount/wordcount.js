'use strict';
const fs = require('fs');
const path = require('path');

const wordcount = function(str) {
  let all = {};
  //make an obj
  let words = str.split(' ');
  for(let i = 0; i < words.length; i++) {
    if (words[i]) {
      if (!all[words[i]]) {
        all[words[i]] = 1;
      } else {
        all[words[i]] += 1;
      }
    }
  }
  //now a sorted arr
  let keys = Object.keys(all);
  let arr = [];
  for(let i = 0; i < keys.length; i++) {
    if (all[keys[i]] > 1) {
      arr.push([keys[i], all[keys[i]]]);
    }
  }
  arr.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else {
      return 1;
    }
  });
  return arr;
};

module.exports = wordcount;

// console.log(wordcount('she sells the seashells she sells'));

// let txt = fs.readFileSync(path.join(__dirname, '../wikipedia/corpus/en.txt'), 'utf8');
// let txt = fs.readFileSync(path.join(__dirname, '../wikipedia/corpus/fr.txt'), 'utf8');
// console.log(wordcount(txt).slice(0, 100));
