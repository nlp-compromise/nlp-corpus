import corpus from '../src/server/index.js'
// import nlp from 'compromise'
import nlp from '/Users/spencer/mountain/compromise/src/three.js'
import fs from 'fs'

const min = 2
const size = 10000

let arr = corpus()

let obj = {}
arr.forEach(txt => {
  let doc = nlp(txt).compute('root')
  doc.docs.forEach(terms => {
    terms.forEach(t => {
      if (t.root === 'probable') {
        console.log(t)
      }
      if (t.root) {
        obj[t.root] = obj[t.root] || 0
        obj[t.root] += 1
      }
    })
  })
})

// let all = Object.entries(obj)
// all = all.filter(a => a[1] >= min)
// all = all.sort((a, b) => {
//   if (a[1] > b[1]) {
//     return -1
//   } else if (a[1] < b[1]) {
//     return 1
//   }
//   return 0
// })
// all = all.map((a, i) => [a[0], a[1], i + 1])

// all = all.slice(0, size)

// let out = all.reduce((h, a) => {
//   h += JSON.stringify(a) + ',\n'
//   return h
// }, '')
// out = `export default [\n${out}\n]`

// fs.writeFileSync('./out.js', out)

// console.log(all.length)