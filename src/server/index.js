import fs from 'fs'
import path from 'path'

const dir = new URL('./', import.meta.url).pathname
const total = 99

const getDoc = function (i) {
  let file = path.join(dir, `../../builds/doc-${i}.json`)
  return JSON.parse(fs.readFileSync(file).toString())
}

const all = function () {
  let res = []
  for (let i = 0; i <= total; i += 1) {
    let json = getDoc(i)
    // console.log(i, json.length)
    json.forEach(o => res.push(o))
  }
  return res
}

const some = function (max = 10) {
  let res = []
  for (let i = 0; i <= total; i += 1) {
    let json = getDoc(i)
    for (let x = 0; x < json.length; x += 1) {
      res.push(json[x])
      if (res.length >= max) {
        return res
      }
    }
  }
  return res
}

const random = function (count = 1) {
  let n = Math.floor(Math.random() * total)
  let json = getDoc(n)
  let res = []
  for (let i = 0; i < count; i += 1) {
    let r = Math.floor(Math.random() * json.length)
    res.push(json[r])
  }
  return res
}

export default { all, some, random }
export { all, some, random }
