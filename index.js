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

let methods = {
  friends: {
    all: () => toPlainText(getFolder('./friends')),
    array: () => getFolder('./friends'),
    random: () => random(getFolder('./friends')),
  },
  sotu: {
    all: () => toPlainText(getFolder('./sotu')),
    array: () => getFolder('./sotu'),
    random: () => random(getFolder('./sotu')),
  },
  wilde: {
    all: () => toPlainText(getFolder('./wilde')),
    array: () => getFolder('./wilde'),
    random: () => random(getFolder('./wilde')),
  },
  hardy: {
    all: () => toPlainText(getFolder('./hardy')),
    array: () => getFolder('./hardy'),
    random: () => random(getFolder('./hardy')),
  },
  poe: {
    all: () => toPlainText(getFolder('./poe')),
    array: () => getFolder('./poe'),
    random: () => random(getFolder('./poe')),
  },
  erowid: {
    all: () => toPlainText(getFolder('./erowid')),
    array: () => getFolder('./erowid'),
    random: () => random(getFolder('./erowid')),
  },
  legal: {
    all: () => toPlainText(getFolder('./legal')),
    array: () => getFolder('./legal'),
    random: () => random(getFolder('./legal')),
  },
  weezer: {
    all: () => toPlainText(getFolder('./weezer')),
    array: () => getFolder('./weezer'),
    random: () => random(getFolder('./weezer')),
  },
  fleetwood_mac: {
    all: () => toPlainText(getFolder('./fleetwood_mac')),
    array: () => getFolder('./fleetwood_mac'),
    random: () => random(getFolder('./fleetwood_mac')),
  },
  beatles: {
    all: () => toPlainText(getFolder('./beatles')),
    array: () => getFolder('./beatles'),
    random: () => random(getFolder('./beatles')),
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
    all: () => toPlainText(getFolder('./wikipedia')),
    array: () => getFolder('./wikipedia'),
    random: () => random(getFolder('./wikipedia')),
  },

};

const sources = Object.keys(methods);
//ok, add some actually useful methods
methods.random = () => {
  let source = Math.floor(Math.random() * sources.length);
  source = sources[source];
  return methods[source].random();
};
//make one large text file
methods.all = () => {
  return sources.reduce((str, source) => {
    str += methods[source].all() + '\n';
    return str;
  }, '');
};
module.exports = methods;
