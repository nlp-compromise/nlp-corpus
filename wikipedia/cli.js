#!/usr/bin/env node
'use strict';
const build = require('./build.js');

console.log('hi');
let args = process.argv.slice(2);
console.log(args);
build('en', 5);
