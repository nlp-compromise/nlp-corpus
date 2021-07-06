const nlp = require('compromise')
const sh = require('shelljs')
const fs = require('fs')
const path = require('path')
const max = 5000

const shuffle = function (array) {
  let currentIndex = array.length
  let temporaryValue = null
  let randomIndex = null
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

const fromFile = function (file) {
  let text = fs.readFileSync(file).toString()
  let list = nlp
    .tokenize(text)
    .json()
    .map(o => o.text)
  list = list.filter(txt => txt && txt.trim().length > 25 && txt.length < 900)
  list = shuffle(list)
  return list.slice(0, max)
}

const fromDir = function (dir) {
  let files = []
  sh.ls(dir).forEach(file => files.push(file))
  let lines = []
  files.forEach(file => {
    file = path.join(dir, file)
    lines = lines.concat(fromFile(file))
  })
  // console.log(lines)
  console.log(lines.length)
  lines = shuffle(lines)
  return lines.slice(0, max)
}

let file = '/Users/spencer/mountain/corpus/og/speeches/misc'
// let list = fromFile(file)
let list = fromDir(file)
list = JSON.stringify(list, null, 2)
fs.writeFileSync('./out.json', list)
