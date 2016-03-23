'use strict';
//turn a text into an obj with wordcount
const collect = function(str, percent) {
  let all = {};
  //make an obj
  let words = str.split(' ');
  if (words.length === 0) {
    return {};
  }
  for(let i = 0; i < words.length; i++) {
    if (words[i]) {
      if (!all[words[i]]) {
        all[words[i]] = 1;
      } else {
        all[words[i]] += 1;
      }
    }
  }
  //turn counts into percentages
  if (percent && percent !== 'count') {
    let keys = Object.keys(all);
    for(let i = 0; i < keys.length; i++) {
      all[keys[i]] = all[keys[i]] / words.length;
    }
  }
  return all;
};

module.exports = collect;
