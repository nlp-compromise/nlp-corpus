'use strict';

const parsed = () => {
  const obj = require('./parse');
  return Object.keys(obj).map((ep) => {
    let episode = ''
      //each scene
    for (let i = 0; i < obj[ep].length; i++) {
      //each dialogue
      for (let o = 0; o < obj[ep][i].length; o++) {
        episode += obj[ep][i][o][1] + '\n'
      }
      episode += '\n'
    }
    return episode
  })
}

const plaintext = () => {
  return parsed().join('\n')
}

module.exports = {
  plaintext: plaintext,
  parsed: parsed
};

// parsed()
// console.log(plaintext())
