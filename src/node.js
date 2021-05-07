const fs = require('fs')

const choose = arr => {
  let r = Math.floor(Math.random() * arr.length)
  return arr[r]
}

let docs = []
for (let i = 1; i < 19; i += 1) {
  docs.push(`./builds/${i}-doc.txt`)
}

const corpus = function (n = 1) {
  if (n === 0) {
    n = 1
  }
  if (n > 1500) {
    n = 1500
  }
  let doc = choose(docs)
  let lines = fs.readFileSync(doc).toString().split(/\n/)
  if (n === 1500) {
    return lines
  }
  let arr = []
  while (arr.length < n) {
    arr.push(choose(lines))
  }
  return arr
}
module.exports = corpus
