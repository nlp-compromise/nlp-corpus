const fs = require('fs')
const path = require('path')

let files = []
for (let i = 1; i <= 50; i += 1) {
  files.push(path.join(__dirname, `../../builds/doc-${i}.json`))
}

const choose = arr => {
  let r = Math.floor(Math.random() * arr.length)
  return arr[r]
}

const corpus = function (n = 1) {
  if (n === 0) {
    n = 1
  }
  if (n > 1500) {
    n = 1500
  }
  let file = choose(files)
  let lines = JSON.parse(fs.readFileSync(file).toString())
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
