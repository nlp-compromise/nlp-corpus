'use strict';

const smsCorpus = require('./smsCorpus.js');

module.exports = {
  parsed: smsCorpus,
  text: smsCorpus.reduce((str, s) => {
    str += s + '\n';
    return str;
  }, '')
};
