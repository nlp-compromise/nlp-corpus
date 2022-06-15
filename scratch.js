import fs from 'fs'
import path from 'path'

let files = [
  '/Users/spencer/mountain/corpus/more/res/wikihow.txt',
  '/Users/spencer/mountain/corpus/more/res/country.txt',
  '/Users/spencer/mountain/corpus/more/res/jeopardy.txt',
  '/Users/spencer/mountain/corpus/more/res/pop.txt',
  '/Users/spencer/mountain/corpus/more/res/enron.txt',
]
let allDocs = files.map(file => {
  return fs.readFileSync(file).toString().split('\n')
})

const dir = new URL('./', import.meta.url).pathname
const total = 99

const getDoc = function (i) {
  let file = path.join(dir, `./builds/doc-${i}.json`)
  return JSON.parse(fs.readFileSync(file).toString())
}

const getOne = function () {
  let x = Math.floor(Math.random() * allDocs.length)
  let y = Math.floor(Math.random() * allDocs[x].length)
  return allDocs[x][y]
}

let already = {}
let sum = 0
let newSum = 0
for (let i = total - 1; i >= 0; i -= 1) {
  let json = getDoc(i)
  console.log('\n#' + i + '  - ' + json.length)
  while (json.length < 1000) {
    let str = getOne()
    json.push(str)
  }
  console.log('  -> ' + json.length)
  let file = path.join(dir, `./builds/doc-${i}.json`)
  fs.writeFileSync(file, JSON.stringify(json, null, 2))
}
console.log('\n\n-----')