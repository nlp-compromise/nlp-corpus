const choose = arr => {
  let r = Math.floor(Math.random() * arr.length)
  return arr[r]
}

const nlpCorpus = function (n) {
  this.texts = []
  if (this.texts.length === 0) {
    console.log('nlpCorpus error: call nlpCorpus.fetch() before use')
  }
  let lines = choose(this.texts)
  if (n === 0) {
    n = 1
  }
  if (n > 1500 || n >= lines.length) {
    return lines
  }
  let arr = []
  while (arr.length < n) {
    arr.push(choose(lines))
  }
  return arr
}

nlpCorpus.prototype.fetch = function (n = 1) {
  return fetch(`https://unpkg.com/nlp-corpus@latest/builds/doc-${n}.json`)
    .then(response => response.json())
    .then(data => {
      this.texts.push(data)
    })
}

if (typeof window !== undefined) {
  window.nlpCorpus = nlpCorpus
} else if (typeof module !== undefined) {
  module.exports = nlpCorpus
}
