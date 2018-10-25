const test = require('tape');
const corpus = require('../src/index');

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

test('generate large text', function(t) {
  let large = corpus.all();
  t.equal(typeof large, 'string', 'large is string');
  t.ok(large.length > 1000, 'large is big');
  t.end();
});
