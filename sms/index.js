'use strict';

const smsCorpus = require('./smsCorpus.js');

module.exports = {
  list: smsCorpus,
  text: smsCorpus.reduce((str, s) => {
    str += s + '\n';
    return str;
    }, '')
  };
