const corpus = require('../../src/node/index.js')
const nlp = require('compromise')
let lines = corpus.all()

let forms = [
  ['#PresentTense', 'present-simple'], // he walks',
  ['has #PastTense', 'present-perfect'], // he has walked
  ['is #Gerund', 'present-progressive'], // he is walking
  ['has been #Gerund', 'present-perfect-progressive'], // he has been

  ['#PastTense', 'past-simple'], // he walked',
  ['had #PastTense', 'past-perfect'], // he had walked
  ['was #Gerund', 'past-progressive'], // he was walking
  ['had been #Gerund', 'past-perfect-progressive'], // he had been

  ['will walk', 'future-simple'], // he will walk
  ['will have #PastTense', 'future-perfect'], // he will have
  ['will be #Gerund', 'future-progressive'], // he will be
  ['will have been #Gerund', 'future-perfect-progressive'], // he will have

  ['were #PastTense', 'passive-voice'], // were walked
  ['had been #PastTense', 'passive-voice'], // had been walked
  ['used to #Infinitive', 'habitual-aspect'], // used to walk
]
let found = 0
let total = 0

const topk = function (arr) {
  let obj = {}
  arr.forEach(a => {
    obj[a] = obj[a] || 0
    obj[a] += 1
  })
  let res = Object.keys(obj).map(k => [k, obj[k]])
  return res.sort((a, b) => (a[1] > b[1] ? -1 : 0))
}

const percent = (part, full) => {
  let num = (part / full) * 100
  num = Math.round(num * 10) / 10
  return num
}
let everyForm = []

lines.forEach(txt => {
  let verbs = nlp(txt).verbs()
  verbs.forEach(vb => {
    total += 1
    if (vb.has('#Adverb')) {
      return
    }
    if (vb.has('^#Copula$')) {
      return
    }
    if (vb.has('not')) {
      return
    }
    let foundForm = forms
      .filter(a => {
        return vb.has('^' + a[0] + '$')
      })
      .map(a => a[1])
    // console.log(foundForm, vb.text())
    if (foundForm.length === 1) {
      everyForm.push(foundForm[0])
    }
    if (foundForm[0] === 'present-simple') {
      console.log(vb.text(), '   -  ', txt)
    }
  })
  // console.log(topk(everyForm))
  // console.log(percent(found, total))
})

// 3% have adverbs
// 3% are negative
// 12% are bare-copula

/*
  'present-simple', 10,854    71%
  'past-simple', 4,444        28%
  'present-perfect', 153      1%
  'present-progressive', 114 
  'past-perfect', 110 
  'past-progressive', 76 
  'passive-voice', 51 
  'future-progressive', 8 
  'past-perfect-progressive', 4 
  'future-simple', 1 
  'future-perfect', 1 
  'present-perfect-progressive', 1 
*/
