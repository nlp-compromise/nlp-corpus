const corpus = require('./index');

let arr = [
  'friends',
  'sotu',
  'poe',
  'erowid',
  'hardy',
  'wilde',
  'weezer',
  'fleetwood_mac',
  'sms',
  'wikipedia'
].forEach((k) => {
  // console.log(corpus[k].random());
})


console.log(corpus.sotu.random())
  // corpus.wikipedia.build('en', 15)
