const sh = require('shelljs')
const nlp = require('compromise')
const fs = require('fs')
const path = require('path')
const max = 1000

let files = []
let dir = '/Users/spencer/mountain/corpus/docs'
sh.ls(dir).forEach(file => files.push(file))
files.forEach(file => {
  file = path.join(dir, file)
  console.log(file)
  let lines = require(file)
  console.log(lines.length)
})
