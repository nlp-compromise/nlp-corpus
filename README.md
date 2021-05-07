<div align="center">
  <div><b>nlp-corpus</b></div>
  <img src="https://user-images.githubusercontent.com/399657/68222691-6597f180-ffb9-11e9-8a32-a7f38aa8bded.png"/>
  <div>lots of weird english text</div>
  <div><code>npm install nlp-corpus</code></div>
  <div align="center">
    <sub>
      by
      <a href="https://spencermounta.in/">Spencer Kelly</a>
    </sub>
  </div>
  <img height="25px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>
</div>

<div align="center">
  <div>
    <a href="https://npmjs.org/package/nlp-corpus">
      <img src="https://img.shields.io/npm/v/nlp-corpus.svg?style=flat-square" />
    </a>
  </div>
</div>

<!-- spacer -->
<img height="85px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>

_nlp-corpus_ is a proud series of weird texts from a delicious smattering of sources - aimed at getting cosmopolitan flavours of english - highbrow, lowbrow and unibrow - dialects, typos, shakespearean, unicode, indian, 19th century, aggressive emoji, and epic nsfw slurs into your training data.

it's role is mainly to kick the tires a bit, as creatively as possible, for fuzzy linguistic parsing.

- campy _Friends_ tv-show transcripts
- suggestive American rock lyrics - 70s/80s/90s
- Singaporean SMS message corpus
- vulnerable drug-trip reports from Erowid
- State of the union logorrhea
- generally-offensive 90's rap
- Legal descriptions in NAFTA
- 20th century romantic fiction
- pedantic arguments of Wikipedia editors

Note that some of this text is nsfw, or containing offensive content, badly-formatted unicode, weird indentation, ascii art, antiquated shorthands, etc.

These texts were found just clicking around on the internet. Running them blindly through your parser should be considered fair-use, but please don't commercially republish them, or anything like that.

# ok go.

```bash
npm install nlp-corpus
```

running this library server-side loads a subset of the documents - abt 10mb total

```javascript
const corpus = require('nlp-corpus')
//random sentence
let str = corpus()
//random 5 sentences
let arr = corpus(5) //n can only be <= 1,500
```

or on the client-side, there's a one-liner that fetches the docs:

```html
<script src="http://unpkg.com/nlp-corpus"></script>
<script>
  // load a documents lazily
  await nlpCorpus.fetchDoc(2) //1 - 20
  // (each doc is abt 150kb)
  let arr = nlpCorpus.random(4) //1 - 1,500
</script>
```

# Documents:

### Dialog

- the National University of Singapore's [56 thousand SMS message Corpus](http://wing.comp.nus.edu.sg:8080/SMSCorpus/overview.jsp) 3mb.

- 'Friends' Transcripts
  uses [@silentrob's parser](https://github.com/silentrob/superscript-friends) of [versatel transcripts of the friends tv show](http://home.versatel.nl/friendspic0102/). all 10 seasons. about 2.5mb

### Music lyrics

short, modern texts with some nice slang.

- weezer
- fleetwood mac
- beatles
- fresh prince

### Fiction

some CC-BY fiction pieces by some selected authors. Mix of tense, dialogue, subject, and style. ~300kb

Erowid trip reports - some very casual and modern slang-filled drug-use reports from erowid.org ~nsfw.

### Speeches

State of the union transcripts - American presidential speech transcripts from 2000-2015. ~600kb

### Wikipedia

a bunch of articles from wikipedia's [Articles every Wikipedia must have](https://meta.wikimedia.org/wiki/List_of_articles_every_Wikipedia_should_have) list

### Internet comments

Reddit /r/TLDR corpus from [this dataset](https://github.com/webis-de/webis-tldr-17-corpus)

### Questions

sample of jeopardy questions from [this dataset](https://www.reddit.com/r/datasets/comments/1uyd0t/200000_jeopardy_questions_in_a_json_file/)

### Instructions

sample of wikihow instructions from [this dataset](https://github.com/mahnazkoupaee/WikiHow-Dataset)

### News Headlines

sample of the times of india headlines from [this dataset](https://dataverse.harvard.edu/api/access/datafile/:persistentId?persistentId=doi:10.7910/DVN/DPQMQH/P2Z4PM)
