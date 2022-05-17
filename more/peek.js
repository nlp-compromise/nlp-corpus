import nlp from 'compromise/one'
import fs from 'fs'


const file = '/Users/spencer/data/infinite-jest/infinite-jest.txt'
let res = []

const getOne = async function () {
  let p = new Promise((resolve) => {
    let start = Math.floor(Math.random() * 1000000)
    let stream = fs.createReadStream(file, {
      encoding: 'utf-8',
      start: Math.ceil(start),
      end: Math.floor(start + 2000),
    });
    //wire-up our listeners, too
    stream.on('data', (data) => {
      let doc = nlp(data)
      let txt = doc.random().text()
      if (txt && txt.length > 100 && txt.length < 1000) {
        res.push(txt)
      }
      resolve()
    })
  })
  return p
}

while (res.length < 10000) {
  await getOne()
}
fs.writeFileSync('./infinite-jest.js', `export default ${JSON.stringify(res, null, 2)}`)