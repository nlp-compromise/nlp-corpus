'use strict';

let fs = require('fs');
let lines = fs.readFileSync(__dirname + '/raw.txt', 'utf8').split('\n');
// lines = lines.slice(0, 400);
let episode = null;
let episodes = {};
let scene = [];

let ignore = {
  'THE END': true,
  'END': true,
};
let new_scene = {
  'COMMERCIAL BREAK': true,
  'OPENING CREDITS': true,
  'OPENING SEQUENCE': true,
  'TIME LAPSE': true,
  'FADE OUT': true
};

const clean = function(s) {
  s = s || '';
  s = s.replace(/ +/, ' ');
  s = s.replace(/^ +/, '');
  s = s.replace(/ +$/, '');
  return s;
};

for(let i = 0; i < lines.length; i++) {
  //new episode
  let match = lines[i].match(/======== ([0-9]{2}-[0-9]{2})/);
  if (match) {
    //write last scene
    if (scene.length > 0) {
      episodes[episode].push(scene);
    }
    episode = match[1];
    episodes[episode] = [];
    if (scene.length > 0) {
      episodes[episode].push(scene);
    }
    scene = [];
    continue;
  }
  if (!episode) {
    continue;
  }
  //cut-out non-dialgue stuff
  if (!lines[i]) {
    continue;
  }
  lines[i] = clean(lines[i]);
  if (ignore[lines[i]] || lines[i].match(/^(originally )?(Written|directed|Teleplay|transcribed|story) By/i) || lines[i].match(/casting assistant/i) || lines[i].match(/^ ?[-\[]/i)) {
    continue;
  }
  //start a new scene
  if (new_scene[lines[i]]) {
    if (scene.length > 0) {
      episodes[episode].push(scene);
    }
    scene = [];
  }
  //parse dialogue line
  let speaker = lines[i].match(/^[a-z].*?: /i);
  let text = lines[i].replace(/^[a-z].*?: /i, '');
  if (!speaker || !text) {
    continue;
  }
  speaker = speaker[0];
  speaker = clean(speaker.replace(':', '').toLowerCase());
  if (speaker.split(/ /).length > 4) {
    continue;
  }
  let arr = [speaker, clean(text)];
  scene.push(arr);
}
//write last scene
if (scene.length > 0) {
  episodes[episode].push(scene);
}

// console.log(episodes['01-01'][0]);
// Object.keys(episodes).forEach((k) => {
//   if (!episodes[k].length) {
//     console.log(k);
//   }
// });

let alltext = JSON.stringify(episodes, null, 2);
alltext = 'module.exports=' + alltext;
fs.writeFileSync('./friends/parsed.js', alltext);
