var test = require('tape');
var corpus = require('./index');

test('try all random methods', function(t) {
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
    let str = corpus[k].random();
    t.equal(typeof str, 'string', k);
  });
  let main = corpus.random();
  t.equal(typeof main, 'string', 'main');
  t.end();
});
