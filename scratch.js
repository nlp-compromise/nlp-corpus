// const corpus = require('./src')

// let str = corpus.generate(12000) //2k words
// console.log(str)
const data = require('/Users/spencer/data/corpus/JEOPARDY_QUESTIONS1.json')
data.slice(0, 20000).forEach(o => {
  let str = o.question
  if (str.match('<') || str.match('__') || str.match(' x ') || str.length < 20) {
    return
  }
  str = str.replace(/^'/, '')
  str = str.replace(/'$/, '')
  console.log(str)
})
