const corpus = require('./index');

let arr = [
  'friends',
  'sotu',
  'wilde',
  'hardy',
  'poe',
  'erowid',
  'hardy',
  'wilde',
  'weezer',
  'beatles',
  'fleetwood_mac',
  'sms',
  'wikipedia'
].forEach((k) => {
  console.log(k);
  corpus[k].random();
});


// console.log(corpus.sotu.random())
