## If you train on the nyTimes, you'll sound like the nyTimes.
*nlp-corpus* is a proud series of texts from a delicious smattering of sources - aimed at getting cosmopolitan flavours of english - highbrow, lowbrow and unibrow -
dialects, typos, shakespearean, unicode, indian, 19th century, aggressive emoji, and epic nsfw slurs into your training data.

it's role is mainly to kick the tires a bit, as creatively as possible, for linguistic decision-making.

* campy *Friends* tv-show transcripts
* suggestive American rock lyrics - 70s/80s/90s
* Singaporean SMS message corpus
* vulnerable Erowid drug-trip reports
* State of the union addresses
* sort-of-offensive 90's rap
* Legal descriptions in NAFTA
* Romantic 20th century fiction
* pedantic arguments between Wikipedia editors

# ok go.
```bash
npm install nlp-corpus
```
```javascript
const corpus = require("nlp-corpus")
//random transcript of the show 'friends'
corpus.friends.random()
//random state of the union address
corpus.sotu.random()
//random short-story from author
corpus.fiction.random()
//random erowid.com trip-report
corpus.erowid.random()
//random musical lyric
corpus.rock.random()
//random sms message
corpus.sms.random()
//random wikipedia article (needs to be built first)
corpus.wikipedia.random()
//or just roll the dice
corpus.random.text()
```

# Some details
These texts were found just clicking around on the internet.
Running them through your parser should be considered fair-use, but please don't commercially republish them, or anything dumb like that.

### State of the union transcripts
American presidential speech transcripts from 2000-2015. ~600kb
```javascript
const corpus = require("nlp-corpus")
let txt= corpus.sotu.parsed()[4]
// "Mr. Speaker, Vice President Cheney, Members of Congress, ..."
let all= corpus.sotu.text()
```

### SMS Corpus
js version of the National University of Singapore's [56 thousand SMS message  Corpus](http://wing.comp.nus.edu.sg:8080/SMSCorpus/overview.jsp) 3mb.

```javascript
const corpus = require("nlp-corpus")
let txt= corpus.sms.parsed()[491];
// "Wat would u like 4 ur birthday?"
let txt= corpus.sms.parsed()[2442];
// "If u dun drive then how i go 2 sch."
let all= corpus.sms.text()
```

# Wikipedia
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

# 'Friends' Transcripts
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
# Music lyrics
short, modern texts with some nice slang.
```javascript
corpus.rock.parsed()[3]
//"What's with these homies, dissing my girl?
//Why do they gotta front?
corpus.rock.parsed()[4]
//'Now here you go again, you say you want your freedom.

```

# Fiction
some CC-BY fiction pieces by some selected authors. Mix of tense, dialogue, subject, and style. ~300kb
```javascript
const corpus = require("nlp-corpus")
//lots of edgar-allen-poe, oscar wilde, and thomas hardy.
let all= corpus.fiction.text()

let txt= corpus.fiction.parsed()[3]
//For the most wild, yet most homely narrative which..
```

# Erowid
some very casual and modern slang-filled drug-use reports from erowid.org ~nsfw.
```javascript
const corpus = require("nlp-corpus")
//lots of them
let all= corpus.erowid.text()

let txt= corpus.erowid.parsed()[3]
//I've never been a fan of Mother's Day
```
