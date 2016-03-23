'use strict';

let fs = require('fs');
let path = require('path');

const getFolder = function(folder) {
  let abs = path.join(__dirname, folder);
  let files = fs.readdirSync(abs);
  //get all files as a single string
  return files.reduce(function(obj, f) {
    let k = f.replace(/.txt$/, '').toLowerCase();
    f = path.join(abs, f);
    obj[k] = fs.readFileSync(f, 'utf8') + '\n';
    return obj;
  }, {});
};

const toPlainText = function(obj) {
  return Object.keys(obj).reduce(function(str, k) {
    str += obj[k] + '\n';
    return str;
  }, '');
};

module.exports = {
  text: {
    'sotu': () => toPlainText(getFolder('./sotu')),
    'wiki': () => toPlainText(getFolder('./wikipedia/corpus')),
    'fiction': () => toPlainText(getFolder('./fiction')),
    'sms': () => require('./sms/smsCorpus.js').join('\n'),
    'friends': () => require('./friends/index.js').plaintext()
  },
  parsed: {
    'sotu': () => getFolder('./sotu'),
    'wiki': () => getFolder('./wikipedia/corpus'),
    'fiction': () => getFolder('./fiction'),
    'sms': () => require('./sms/smsCorpus.js'),
    'friends': () => require('./friends/index.js').parsed()
  }
};

// console.log(module.exports.parsed.fiction());
