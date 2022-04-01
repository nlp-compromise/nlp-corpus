import corpus from '../src/server/index.js'
// import nlp from 'compromise'
import nlp from '/Users/spencer/mountain/compromise/src/three.js'
import fs from 'fs'

const min = 2
const size = 10000

let arr = corpus()

let want = {
  'be ': true,
  'me ': true,
  'years': true,
  'ein': true,
  'siz': true,
  'rea': true,
}

let obj = {}
arr.forEach(txt => {
  let doc = nlp(txt).compute('root')
  doc.terms().forEach(t => {
    // if (t.has('(#ProperNoun|#Conjunction|#Preposition|#Auxiliary|#Modal|#Pronoun|#Determiner|#Expression|#Value|#Copula|#QuestionWord|#Time|#Negative|#Abbreviation)')) {
    //   return
    // }
    if (t.has('(#Value|#Time|#Abbreviation)')) {
      return
    }
    let str = t.text('root')
    // if (want[str] === true) {
    //   console.log(txt)
    // }
    if (str.length > 1 || str === 'i' || str === 'a') {
      obj[str] = obj[str] || 0
      obj[str] += 1
    }
  })
})

let all = Object.entries(obj)
all = all.filter(a => a[1] >= min)
all = all.sort((a, b) => {
  if (a[1] > b[1]) {
    return -1
  } else if (a[1] < b[1]) {
    return 1
  }
  return 0
})
all = all.map((a, i) => [a[0], a[1], i + 1])

all = all.slice(0, size)

let out = all.reduce((h, a) => {
  h += JSON.stringify(a) + ',\n'
  return h
}, '')
out = `export default [\n${out}\n]`

fs.writeFileSync('./out.js', out)

console.log(all.length)