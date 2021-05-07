// const corpus = require('./src')

// let str = corpus.generate(12000) //2k words
// console.log(str)
const fs = require('fs')
let data = fs.readFileSync('/Users/spencer/data/corpus/wikihowAll.csv').toString()
data = data.split(/\n/)

// let data = require('')

console.log(data.length)
data = data.map(str => str.replace(/^, /, ''))
data = data.map(str => str.replace(/,$/, ''))
data = data.filter(str => str)
console.log(data.length)
