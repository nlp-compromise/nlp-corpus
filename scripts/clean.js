import nlp from 'compromise'
import corpus from '../src/server/index.js'

corpus.all().forEach(txt => {
  let doc = nlp(txt)
  if (doc.length > 1) {
    console.log(txt)
  }
  // if (doc.confidence() < 0.6) {
  //   console.log(txt)
  // }
})
