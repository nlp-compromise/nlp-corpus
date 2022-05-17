import wtf from '/Users/spencer/mountain/wtf_wikipedia/src/index.js'
import lib from '/Users/spencer/mountain/wtf_wikipedia/plugins/api/src/index.js'
import nlp from 'compromise/one'
import fs from 'fs'

wtf.plugin(lib)

let res = []

async function doMore() {
  return wtf.getRandomPage().then((wtfDoc) => {
    let txt = wtfDoc.text()
    console.log(wtfDoc.title())
    let doc = nlp(txt)
    doc.forEach(s => {
      res.push(s.text())
    })
  }).catch(e => {
    console.log(e)
  })
}

while (res.length < 500) {
  await doMore()
  res = res.filter(str => str)
  console.log(res.length)
}
fs.writeFileSync('./file.txt', JSON.stringify(res, null, 2), { flag: 'a' })

// fs.writeFileSync('./wiki-rando.js', `export default ${JSON.stringify(res, null, 2)}`)