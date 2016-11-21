'use strict';
let fs = require('fs');
let path = require('path');

const getFolder = function (folder) {
  let abs = path.join(__dirname, folder);
  let files = fs.readdirSync(abs);
  //get all files as a single string
  return files.map(function (f) {
    let k = f.replace(/.txt$/, '').toLowerCase();
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
    text: () => toPlainText(getFolder('./sms')),
    parsed: () => getFolder('./sms'),
    random: () => random(getFolder('./sms')),
  },
  wikipedia: {
    build: (lang, count) => getFolder('./wikipedia/build')(lang, count),
    text: () => toPlainText(getFolder('./wikipedia/corpus')),
    parsed: () => getFolder('./wikipedia/corpus'),
    random: () => random(getFolder('./wikipedia/corpus')),
  }
};

console.log(module.exports.friends.random())
