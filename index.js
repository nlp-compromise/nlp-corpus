'use strict';
let fs = require('fs');
let path = require('path');
const sms = require('./sms');


const getFolder = function (folder) {
  let abs = path.join(__dirname, folder);
  let files = fs.readdirSync(abs);
  //get all files as a single string
  return files.map(function (f) {
    f = path.join(abs, f);
    return fs.readFileSync(f, 'utf8') + '\n';
  });
};

const toPlainText = function (obj) {
  return Object.keys(obj).reduce(function (str, k) {
    str += obj[k] + '\n';
    return str;
  }, '');
};

const random = function (arr) {
  let len = arr.length
  let r = parseInt(Math.random() * len, 10)
  return arr[r]
}

module.exports = {
  friends: {
    text: () => require('./friends/index.js').plaintext(),
    parsed: () => require('./friends/index.js').parsed(),
    random: () => random(require('./friends/index.js').parsed())
  },
  sotu: {
    text: () => toPlainText(getFolder('./sotu')),
    parsed: () => getFolder('./sotu'),
    random: () => random(getFolder('./sotu')),
  },
  rubber_soul: {
    text: () => toPlainText(getFolder('./rubber_soul')),
    parsed: () => getFolder('./rubber_soul'),
    random: () => random(getFolder('./rubber_soul')),
  },
  poe: {
    text: () => toPlainText(getFolder('./poe')),
    parsed: () => getFolder('./poe'),
    random: () => random(getFolder('./poe')),
  },
  erowid: {
    text: () => toPlainText(getFolder('./erowid')),
    parsed: () => getFolder('./erowid'),
    random: () => random(getFolder('./erowid')),
  },
  hardy: {
    text: () => toPlainText(getFolder('./hardy')),
    parsed: () => getFolder('./hardy'),
    random: () => random(getFolder('./hardy')),
  },
  wilde: {
    text: () => toPlainText(getFolder('./wilde')),
    parsed: () => getFolder('./wilde'),
    random: () => random(getFolder('./wilde')),
  },
  weezer: {
    text: () => toPlainText(getFolder('./weezer')),
    parsed: () => getFolder('./weezer'),
    random: () => random(getFolder('./weezer')),
  },
  fleetwood_mac: {
    text: () => toPlainText(getFolder('./fleetwood_mac')),
    parsed: () => getFolder('./fleetwood_mac'),
    random: () => random(getFolder('./fleetwood_mac')),
  },
  sms: {
    text: () => sms.text,
    parsed: () => sms.parsed,
    random: () => random(sms.parsed),
  },
  wikipedia: {
    build: require('./wikipedia/build'),
    text: () => toPlainText(getFolder('./wikipedia/corpus')),
    parsed: () => getFolder('./wikipedia/corpus'),
    random: () => random(getFolder('./wikipedia/corpus')),
  }
};
