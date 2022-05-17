import fs from 'fs'
import nlp from 'compromise/one'

let res = []

while (res.length <= 5000) {
  let i = Math.floor(Math.random() * 12400)
  let txt = ''
  try {
    let file = `/Users/spencer/data/imdb/test/neg/${i}_2.txt`
    txt = fs.readFileSync(file).toString()
  } catch (error) {
    txt = ''
  }
  txt = txt.replace(/<.+>/g, '')
  let doc = nlp(txt)
  let out = doc.random().text()
  if (out) {
    res.push(out)
  }
}
fs.writeFileSync('./imdb-neg.js', `export default ${JSON.stringify(res, null, 2)}`)