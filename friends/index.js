'use strict';

const plaintext = function() {
  const parsed = require('./parsed.js');
  return Object.keys(parsed).reduce(function(h, k) {
    let str = '';
    //scenes
    for(let i = 0; i < parsed[k].length; i++) {
      //dialogues
      for(let d = 0; d < parsed[k][i].length; d++) {
        str += parsed[k][i][d][1] + '\n';
      }
    }
    h[k] = str;
    return h;
  }, {});
};

module.exports = {
  plaintext: () => plaintext(),
  parsed: () => require('./parsed.js')
};

// console.log(plaintext());
