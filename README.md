some handy texts for testing + training [nlp_compromise](http://nlpcompromise.com). Nuthin too crazy.

```bash
npm i nlp-corpus
```

#State of the union transcripts
American presidential speech transcripts from 2000-2015. ~600kb
```javascript
const corpus = require("nlp-corpus")
let txt= corpus.parsed.sotu().bush_2003
// "Mr. Speaker, Vice President Cheney, Members of Congress, ..."
let all= corpus.text.sotu()
```

#SMS Corpus
js version of the National University of Singapore's [56 thousand SMS message  Corpus](http://wing.comp.nus.edu.sg:8080/SMSCorpus/overview.jsp) 3mb.

```javascript
const corpus = require("nlp-corpus")
let txt= corpus.parsed.sms()[491];
// "Wat would u like 4 ur birthday?"
let txt= corpus.parsed.sms()[2442];
// "If u dun drive then how i go 2 sch."
let all= corpus.text.sms()
```

#Wikipedia
quickly build a plaintext corpus, in any language, using the (up to) 1000 most generic ['articles_every_Wikipedia_should_have'](https://meta.wikimedia.org/wiki/List_of_articles_every_Wikipedia_should_have).
```bash
node ./build.js en 500
node ./build.js fr 20
```
```javascript
const corpus = require("nlp-corpus")
let txt= corpus.parsed.wikipedia()["Albert Einstein"]
// Albert Einstein, né le 14 mars 1879, est un physicien théoricien qui fut...
let all= corpus.text.wikipedia()
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
let txt= corpus.parsed.friends()['02-10'][2][103]
//['Monica', "Is it like for dinosaur emergencies? 'Help, come quick, they're still extinct.'"]
let txt= corpus.parsed.friends['09-12'][103][3][1]
//joey  i play al pacino's butt. all right? he goes into the shower, and then- i'm his butt...

let all= corpus.text.friends()['04-12']
//"Oh my God! I can’t believe my little brother is married!
// ...
```

#Fiction
some CC-BY fiction pieces by some selected authors. Mix of tense, dialogue, subject, and style. ~300kb
```javascript
const corpus = require("nlp-corpus")
let txt= corpus.parsed.fiction().poe
//For the most wild, yet most homely narrative which..
let all= corpus.text.fiction()
// [all texts newline-seperated]
```
