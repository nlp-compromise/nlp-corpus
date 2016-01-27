'use strict';

let fs = require('fs');

function getFolder(folder){
  let files = fs.readdirSync(__dirname + folder);
  let sotu = files.reduce(function(h, f) {
    let k = f.replace(/.txt$/, '').toLowerCase();
    h[k] = fs.readFileSync(folder + '/' + f, 'utf8');
    return h;
  }, {});
}

module.exports = {
  sotu: getFolder('/SOTU')
};
