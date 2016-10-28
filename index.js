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
    'poe': () => toPlainText(getFolder('./poe')),
    'erowid': () => toPlainText(getFolder('./erowid')),
    'hardy': () => toPlainText(getFolder('./hardy')),
    'wilde': () => toPlainText(getFolder('./wilde')),
    'weezer': () => toPlainText(getFolder('./weezer')),
    'sms': () => require('./sms/smsCorpus.js').join('\n'),
    'friends': () => require('./friends/index.js').plaintext()
  },
  parsed: {
    'sotu': () => getFolder('./sotu'),
    'wiki': () => getFolder('./wikipedia/corpus'),
    'poe': () => getFolder('./poe'),
    'erowid': () => getFolder('./erowid'),
    'hardy': () => getFolder('./hardy'),
    'wilde': () => getFolder('./wilde'),
    'weezer': () => getFolder('./weezer'),
    'sms': () => require('./sms/smsCorpus.js'),
    'friends': () => require('./friends/index.js').parsed()
  },
  build: {
    'wiki': (lang, count) => getFolder('./wikipedia/build')(lang, count)
  }
};

// console.log(module.exports.parsed.fiction());
