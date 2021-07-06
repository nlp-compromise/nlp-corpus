const sh = require('shelljs')
const fs = require('fs')
const path = require('path')

let files = []
let dir = '/Users/spencer/mountain/corpus/docs'
sh.ls(dir).forEach(file => files.push(file))
files = files.map(file => {
  file = path.join(dir, file)
  console.log(file)
  let lines = require(file)
  console.log(lines.length)
  return lines
})

const makeFile = () => {
  let out = []
  for (let i = 0; i < 72; i += 1) {
    files.forEach(file => {
      out.push(file.pop())
    })
  }
  out = out.slice(0, 1000)
  return out
}

for (let i = 1; i <= 50; i += 1) {
  let mix = makeFile()
  console.log(mix.length)
  fs.writeFileSync(`./builds/doc-${i}.json`, JSON.stringify(mix, null, 2))
}
