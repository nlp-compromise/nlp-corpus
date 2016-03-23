#!/usr/bin/env node
'use strict';
const build_wikipedia = require('./wikipedia/build.js');

let args = process.argv.slice(2); // Copies arguments list but removes first two options (script exec type & exec location)

let method = args[0] || 'wikipedia';
let lang = args[1] || 'en';
let count = args[2] || 50;

if (method === 'wikipedia') {
  console.log(' ---- building  ' + count + '  ' + lang + ' wikipedia articles');
  build_wikipedia(lang, count);
} else {
  console.log('Usage:');
  console.log('./build.js wikipedia en 100');
}
