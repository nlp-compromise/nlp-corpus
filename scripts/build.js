const corpus = require('../src');
const fs = require('fs');

const fileSize = function(src) {
  const stats = fs.statSync(src);
  return parseInt(stats['size'] / 1000.0, 10) + 'kb';
};

for(let i = 0; i < 15; i += 1) {
  let arr = corpus.generate(35000); //20k words
  let src = `./builds/nlp-corpus-${i + 1}.json`;
  fs.writeFileSync(src, JSON.stringify(arr, null, 0));
  console.log('#' + (i + 1) + ' ' + fileSize(src));
}

//generate teh big one
let arr = corpus.generate(350000); //350k words
let src = './builds/nlp-corpus-big.json';
fs.writeFileSync(src, JSON.stringify(arr, null, 0));
console.log(' big - ' + fileSize(src));
