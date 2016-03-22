'use strict';

let fs = require('fs');
let path = require('path');

const getFolder = function(folder) {
  let files = fs.readdirSync(path.join(__dirname, folder));
  //get all files as a single string
  return files.reduce(function(obj, f) {
    let k = f.replace(/.txt$/, '').toLowerCase();
    f = path.join(folder, f);
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
    'sotu': toPlainText(getFolder('./sotu')),
    'wiki': toPlainText(getFolder('./wikipedia/corpus')),
    'sms': require('./sms/smsCorpus.js').join('\n')
  },
  parsed: {
    'sotu': getFolder('./sotu'),
    'wiki': getFolder('./wikipedia/corpus'),
    'sms': require('./sms/smsCorpus.js')
  }
};

// console.log(module.exports.parsed.sotu);
