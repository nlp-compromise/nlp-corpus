import corpus from '../src/server/index.js'
import nlp from 'compromise'
import normals from '../freq/normal.js'

normals = normals.slice(0, 100).map(a => a[0])

let words = new Set(normals)

let arr = corpus()

let found = 0
let missing = 0
arr.forEach(txt => {
  let doc = nlp(txt).compute('root')
  doc.docs.forEach(terms => {
    terms.forEach(t => {
      if (words.has(t.root)) {
        found += 1
      } else {
        missing += 1
      }
    })
  })
})
console.log('found', found)
console.log('missing', missing)

const percent = (part, total) => {
  let num = (part / total) * 100;
  num = Math.round(num * 10) / 10;
  return num;
};
console.log('coverage', percent(found, found + missing))