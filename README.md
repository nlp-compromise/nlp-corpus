some reasonably-sized and handy texts for testing + training [nlp_compromise](http://nlpcompromise.com). 'nuthing too crazy.

#ok go.
```bash
npm i nlp-corpus
```
```javascript
const corpus = require("nlp-corpus")
//random transcript of the show 'friends'
corpus.friends.random()
//random state of the union address
corpus.sotu.random()
//random short-story from author
corpus.poe.random()
corpus.hardy.random()
corpus.wilde.random()
//random erowid.com trip-report
corpus.erowid.random()
//random musical lyric
corpus.weezer.random()
corpus.fleetwood_mac.random()
//random sms message
corpus.sms.random()
//random wikipedia article (needs to be built first)
corpus.wikipedia.random()
```

#State of the union transcripts
American presidential speech transcripts from 2000-2015. ~600kb
```javascript
const corpus = require("nlp-corpus")
let txt= corpus.sotu.parsed()[4]
// "Mr. Speaker, Vice President Cheney, Members of Congress, ..."
let all= corpus.sotu.text()
```

#SMS Corpus
js version of the National University of Singapore's [56 thousand SMS message  Corpus](http://wing.comp.nus.edu.sg:8080/SMSCorpus/overview.jsp) 3mb.

```javascript
const corpus = require("nlp-corpus")
let txt= corpus.sms.parsed()[491];
// "Wat would u like 4 ur birthday?"
let txt= corpus.sms.parsed()[2442];
// "If u dun drive then how i go 2 sch."
let all= corpus.sms.text()
```

#Wikipedia
quickly build a plaintext corpus, in any language, using the (up to) 1000 most generic ['articles_every_Wikipedia_should_have'](https://meta.wikimedia.org/wiki/List_of_articles_every_Wikipedia_should_have).
```bash
node ./build.js en 500
node ./build.js fr 20
```
```javascript
const corpus = require("nlp-corpus")
let txt= corpus.wikipedia.parsed()[4]
// Albert Einstein, né le 14 mars 1879, est un physicien théoricien qui fut...
let all= corpus.wikipedia.text()
// [some large number of words]
```
```bash
head  ./wikipedia/corpus/fr.txt
wc -w  ./wikipedia/corpus/fr.txt
```

#'Friends' Transcripts
uses [@silentrob's parser](https://github.com/silentrob/superscript-friends) of [versatel transcripts of the friends tv show](http://home.versatel.nl/friendspic0102/). all 10 seasons. about 2.5mb

transcripts are indexed by episode ([season-episode]) and scene. This way a proper conversation can be inferred.
```javascript
const corpus = require("nlp-corpus")
//as an array of speaker lines
let txt= corpus.friends.parsed()[25][103]
//"Is it like for dinosaur emergencies? 'Help, come quick, they're still extinct.'"
let txt= corpus.friends.parsed()[16][3]
//"i play al pacino's butt. all right? he goes into the shower, and then- i'm his butt..."

let all= corpus.friends.text()
// ...
```
#Music lyrics
short, modern texts with some nice slang.
```javascript
corpus.weezer.parsed()[3]
//"What's with these homies, dissing my girl?
//Why do they gotta front?
corpus.fleetwood_mac.parsed()[4]
//'Now here you go again, you say you want your freedom.

```

#Fiction
some CC-BY fiction pieces by some selected authors. Mix of tense, dialogue, subject, and style. ~300kb
```javascript
const corpus = require("nlp-corpus")
//lots of edgar-allen-poe
let all= corpus.poe.text()

let txt= corpus.poe.parsed()[3]
//For the most wild, yet most homely narrative which..

//same for oscar wilde,
let txt= corpus.wilde.parsed[7]
//same for thomas hardy,
let txt= corpus.hardy.parsed[3]
```

#Erowid
some very casual and modern slang-filled drug-use reports from erowid.org ~nsfw.
```javascript
const corpus = require("nlp-corpus")
//lots of them
let all= corpus.erowid.text()

let txt= corpus.erowid.parsed()[3]
//I've never been a fan of Mother's Day
```
