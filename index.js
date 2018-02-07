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
  let len = arr.length;
  let r = parseInt(Math.random() * len, 10);
  return arr[r];
};

module.exports = {
  friends: {
    all: () => require('./friends/index.js').plaintext(),
    array: () => require('./friends/index.js').parsed(),
    random: () => random(require('./friends/index.js').parsed())
  },
  sotu: {
    all: () => toPlainText(getFolder('./sotu')),
    array: () => getFolder('./sotu'),
    random: () => random(getFolder('./sotu')),
  },
  fiction: {
    all: () => toPlainText(getFolder('./fiction')),
    array: () => getFolder('./fiction'),
    random: () => random(getFolder('./fiction')),
  },
  religious: {
    all: () => toPlainText(getFolder('./religious')),
    array: () => getFolder('./religious'),
    random: () => random(getFolder('./religious')),
  },
  legal: {
    all: () => toPlainText(getFolder('./legal')),
    array: () => getFolder('./rock'),
    random: () => random(getFolder('./rock')),
  },
  rock: {
    all: () => toPlainText(getFolder('./rock')),
    array: () => getFolder('./rock'),
    random: () => random(getFolder('./rock')),
  },
  rap: {
    all: () => toPlainText(getFolder('./rap')),
    array: () => getFolder('./rap'),
    random: () => random(getFolder('./rap')),
  },
  sms: {
    all: () => sms.text,
    array: () => sms.parsed,
    random: () => random(sms.parsed),
  },
  wikipedia: {
    build: require('./wikipedia/build'),
    all: () => toPlainText(getFolder('./wikipedia/corpus')),
    array: () => getFolder('./wikipedia/corpus'),
    random: () => random(getFolder('./wikipedia/corpus')),
  }
};
