import fs from 'fs'
let res = fs.readFileSync('/Users/spencer/data/corpus/JEOPARDY_QUESTIONS1.json').toString()
let json = JSON.parse(res)
// console.log(json.length)
json.slice(20300, 30300).forEach(o => {
  console.log(o.question)
})