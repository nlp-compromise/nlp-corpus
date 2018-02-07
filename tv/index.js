'use strict';
let fs = require('fs');
let episodes = fs.readFileSync(__dirname + '/raw.txt', 'utf8').split(/\n====.*?\n/);
//array-of-arrays - episdodes, by line.
episodes = episodes.map((text) => {
  let arr = text.split('\n');
  arr = arr.filter((str) => {
    return str && !/^====/.test(str);
  });
  return arr;
});
// console.log(episodes[1]);
module.exports = episodes;
