const sh = require('shelljs')
const nlp = require('compromise')
const fs = require('fs')
const path = require('path')
const max = 1500

const choose = arr => {
  let r = Math.floor(Math.random() * arr.length)
  return arr[r]
}

let dirs = [
  './docs/dialogue/friends',
  './docs/dialogue/sms',
  './docs/instructions',
  './docs/legal',
  './docs/lyrics/beatles',
  './docs/lyrics/fleetwood_mac',
  './docs/lyrics/rap',
  './docs/lyrics/weezer',
  './docs/questions',
  './docs/speeches/misc',
  './docs/speeches/sotu',
  './docs/stories/erowid',
  './docs/stories/hardy',
  './docs/stories/poe',
  './docs/stories/wilde',
  './docs/wikipedia',
]

const newSentence = function () {
  let dir = choose(dirs)
  let files = []
  sh.ls(dir).forEach(file => files.push(file))
  let file = choose(files)
  let lines = fs.readFileSync(path.join(dir, file)).toString().split(/\n/)
  let line = choose(lines)
  let sentences = nlp
    .tokenize(line)
    .json()
    .map(o => o.text)
  let sentence = choose(sentences)
  if (!sentence || sentence.length < 17) {
    return null
  }
  return sentence
}

const makeDoc = function (n) {
  let list = []
  while (list.length < max) {
    let s = newSentence()
    if (s) {
      list.push(s)
    }
  }
  fs.writeFileSync(`./builds/${n}-doc.txt`, list.join('\n'))
}

for (let i = 1; i < 20; i += 1) {
  makeDoc(i)
}
