import fs from 'fs'
import path from 'path'

const dir = new URL('./', import.meta.url).pathname

const corpus = function (start, end) {
  start = start || 0
  end = end || 50000
  let files = []
  for (let i = 1; i <= 50; i += 1) {
    files.push(path.join(dir, `../../builds/doc-${i}.json`))
  }
  let res = []
  for (let i = 0; i < files.length; i += 1) {
    let file = files[i]
    res = res.concat(JSON.parse(fs.readFileSync(file).toString()))
    if (res.length > end) {
      return res.slice(start, end)
    }
  }
  return res.slice(start, end)
}

export default corpus
