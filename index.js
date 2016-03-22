'use strict';

let fs = require('fs');
let path = require('path');

function getFolder(folder){
  let files = fs.readdirSync(path.join(__dirname, folder));
  //get all files as a single string
  return files.reduce(function(str, f) {
    let k = f.replace(/.txt$/, '').toLowerCase();
    f = path.join(folder, f);
    str += fs.readFileSync(f, 'utf8') + '\n';
    return str;
  }, '');
}

module.exports = {
  'sotu': getFolder('./sotu'),
  'wiki': getFolder('./wikipedia/corpus'),
  'sms': require('./sms/smsCorpus.js').join('\n')
};

console.log(module.exports.sotu);
