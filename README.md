## If you train on the nyTimes, you'll sound like the nyTimes.
*nlp-corpus* is a proud series of texts from a delicious smattering of sources - aimed at getting cosmopolitan flavours of english - highbrow, lowbrow and unibrow -
dialects, typos, shakespearean, unicode, indian, 19th century, aggressive emoji, and epic nsfw slurs into your training data.

it's role is mainly to kick the tires a bit, as creatively as possible, for linguistic decision-making.

* campy *Friends* tv-show transcripts
* suggestive American rock lyrics - 70s/80s/90s
* Singaporean SMS message corpus
* vulnerable drug-trip reports from Erowid
* State of the union logorrhea
* generically-offensive 90's rap
* Legal descriptions in NAFTA
* 20th century romantic fiction
* pedantic arguments of Wikipedia editors

# ok go.
```bash
npm install nlp-corpus
```
```javascript
const corpus = require("nlp-corpus")
//anything!
corpus.random()

//random transcript of the show 'friends'
corpus.friends.random()
//random state of the union address
corpus.sotu.random()
//random short-story from author
corpus.wilde.random()
corpus.hardy.random()
corpus.poe.random()
//random erowid.com trip-report
corpus.erowid.random()
//random musical lyric
corpus.weezer.random()
corpus.beatles.random()
corpus.fleetwood_mac.random()
//random sms message
corpus.sms.random()
//random wikipedia article (needs to be built first)
corpus.wikipedia.random()
```

# Some details
These texts were found just clicking around on the internet.
Running them through your parser should be considered fair-use, but please don't commercially republish them, or anything dumb like that.

for each given source, you can call `.random()`, `.array()`, or `.text()`

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
let txt= corpus.sms.array()[491];
// "Wat would u like 4 ur birthday?"
let txt= corpus.sms.array()[2442];
// "If u dun drive then how i go 2 sch."
let all= corpus.sms.text()
```

# Wikipedia
a bunch of articles from wikipedia's [Articles every Wikipedia must have](https://meta.wikimedia.org/wiki/List_of_articles_every_Wikipedia_should_have) list
```javascript
const corpus = require("nlp-corpus")
let txt= corpus.wikipedia.random()
// Baseball is a bat-and-ball game played between...
```

# 'Friends' Transcripts
uses [@silentrob's parser](https://github.com/silentrob/superscript-friends) of [versatel transcripts of the friends tv show](http://home.versatel.nl/friendspic0102/). all 10 seasons. about 2.5mb

transcripts are indexed by episode ([season-episode]) and scene. This way a proper conversation can be inferred.
```javascript
const corpus = require("nlp-corpus")
//as an array of speaker lines
let txt= corpus.friends.array()[25][103]
//"Is it like for dinosaur emergencies? 'Help, come quick, they're still extinct.'"
let txt= corpus.friends.array()[16][3]
//"i play al pacino's butt. all right? he goes into the shower, and then- i'm his butt..."

let all= corpus.friends.text()
// ...
```
# Music lyrics
short, modern texts with some nice slang.
```javascript
corpus.weezer.array()[3]
//"What's with these homies, dissing my girl?
//Why do they gotta front?
corpus.fleetwood_mac.array()[4]
//'Now here you go again, you say you want your freedom.
corpus.beatles.random()
//'If I needed someone to love...'
```

# Fiction
some CC-BY fiction pieces by some selected authors. Mix of tense, dialogue, subject, and style. ~300kb
```javascript
const corpus = require("nlp-corpus")
//lots of edgar-allen-poe, oscar wilde, and thomas hardy.
let all= corpus.poe.text()

let txt= corpus.hardy.array()[3]
//For the most wild, yet most homely narrative which..
```

# Erowid
some very casual and modern slang-filled drug-use reports from erowid.org ~nsfw.
```javascript
const corpus = require("nlp-corpus")
//lots of them
let all= corpus.erowid.text()

let txt= corpus.erowid.array()[3]
//I've never been a fan of Mother's Day
```
