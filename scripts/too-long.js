import fs from 'fs'
import path from 'path'
import hash from '/Users/spencer/mountain/compromise/src/1-one/output/api/lib/hash.js'

const dir = new URL('./', import.meta.url).pathname
const total = 100

const getDoc = function (i) {
  let file = path.join(dir, `../builds/doc-${i}.json`)
  return JSON.parse(fs.readFileSync(file).toString())
}

let already = {}
let sum = 0
let newSum = 0
let reg = /[a-z]\.[A-Z]/
for (let i = total - 1; i >= 0; i -= 1) {
  let json = getDoc(i)
  console.log('\n#' + i + '  - ' + json.length)
  sum += json.length
  json = json.filter(str => {
    // let m = str.match(/\.\.\.+/g)
    // if (m && m.length > 3) {
    if (reg.test(str) === true && str.length > 200) {
      console.log(str)
      return false
    }
    return true
  })
  newSum += json.length
  console.log('  -> ' + json.length)
  let file = path.join(dir, `../builds/doc-${i}.json`)
  // fs.writeFileSync(file, JSON.stringify(json, null, 2))
}
console.log('\n\n-----')
console.log(sum)
console.log(newSum)