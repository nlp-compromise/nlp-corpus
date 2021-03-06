const fs = require('fs')
const path = require('path')

const all = function () {
  let files = []
  for (let i = 1; i <= 50; i += 1) {
    files.push(path.join(__dirname, `../../builds/doc-${i}.json`))
  }
  let res = []
  files.forEach(file => {
    res = res.concat(JSON.parse(fs.readFileSync(file).toString()))
  })
  return res
}

module.exports = all
