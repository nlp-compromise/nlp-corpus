some handy texts for testing + training [nlp_compromise](http://nlpcompromise.com). Nuthin too crazy.

```bash
npm i nlp-corpus
```

#state of the union
American presidential speech transcrips from 2000-2015.
```javascript
const corpus = require("nlp-corpus")
let txt= corpus.parsed.sotu.Bush_2003
// "Mr. Speaker, Vice President Cheney, Members of Congress, ..."
let all= corpus.text.sotu
```

#SMS Corpus
js version of the National University of Singapore's [56k SMS message  Corpus](http://wing.comp.nus.edu.sg:8080/SMSCorpus/overview.jsp)

```javascript
const corpus = require("nlp-corpus")
let txt= corpus.parsed.sms[491];
// "Wat would u like 4 ur birthday?"
let txt= corpus.parsed.sms[2442];
// "If u dun drive then how i go 2 sch."
let all= corpus.text.sms
```

#Wikipedia
quickly build a plaintext corpus, in any language, using the 1000 most generic ['articles_every_Wikipedia_should_have'](https://meta.wikimedia.org/wiki/List_of_articles_every_Wikipedia_should_have).
```bash
node ./build.js en 500
node ./build.js fr 20
```
```javascript
const corpus = require("nlp-corpus")
let txt= corpus.parsed.wikipedia["Albert Einstein"]
// Albert Einstein, né le 14 mars 1879, est un physicien théoricien qui fut...
let all= corpus.text.wikipedia
// [some large number of words]
```
```bash
head  ./wikipedia/corpus/fr.txt
wc -w  ./wikipedia/corpus/fr.txt
```

#Friends Transcripts
uses [@silentrob's parser](https://github.com/silentrob/superscript-friends) of [transcripts of the friends tv show](http://home.versatel.nl/friendspic0102/)
```javascript
const corpus = require("nlp-corpus")
let txt= corpus.parsed.friends[4][103]
//{speaker:'Monica', text:"Is it like for dinosaur emergencies. 'Help, come quick, they're still extinct.'"}
let all= corpus.text.friends
// all episodes newline-seperated
```