const sh = require('shelljs')
const nlp = require('compromise')
const fs = require('fs')
const path = require('path')
const max = 1000

const choose = arr => {
  let r = Math.floor(Math.random() * arr.length)
  return arr[r]
}

let dirs = [
  './docs/comments',

  './docs/friends',

  './docs/chat',

  './docs/headlines',

  './docs/instructions',

  './docs/jokes',

  './docs/legal/misc',
  './docs/legal/osf-corpus',

  './docs/lyrics/misc',
  './docs/lyrics/nltk_corpus',

  './docs/questions',

  './docs/reviews',

  './docs/speeches/misc',
  './docs/speeches/sotu',

  './docs/stories/child-fiction',
  './docs/stories/misc',

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
  fs.writeFileSync(`./builds/nlp-corpus-${n}.json`, JSON.stringify(list, null, 2))
}

for (let i = 1; i <= 50; i += 1) {
  makeDoc(i)
}
