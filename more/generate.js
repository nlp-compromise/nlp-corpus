import imdbMed from './res/imdb-med.js'
import imdbNeg from './res/imdb-neg.js'
import infJest from './res/imdb-pos.js'
import newsDe from './res/news-dataset-de.js'
import newsES from './res/news-dataset-es.js'
import un from './res/united-nations.js'
import wiki from './res/wikipedia.js'
import fs from 'fs'


let arr = [
  imdbMed,
  imdbNeg,
  infJest,
  newsDe,
  newsES,
  un,
  wiki,
]

const getRandom = function (list) {
  let i = Math.floor(Math.random() * list.length)
  return list[i]
}

let all = []
for (let i = 1; i < 2; i += 1) {
  console.log(i)
  while (all.length < 1000) {
    arr.forEach(list => {
      all.push(getRandom(list))
    })
  }
  all = all.slice(0, 1000)
  fs.writeFileSync(`./done/doc-${50 + i}.json`, JSON.stringify(all, null, 2))
  all = []
}