
#state of the union
American presidential speech transcrips from 2000-2015.
```javascript
const corpus = require("nlp-corpus")
let txt= corpus.state_of_the_union.Bush_2003
// "Mr. Speaker, Vice President Cheney, Members of Congress, ..."
```

#SMS Corpus
js version of the National University of Singapore's [56k SMS message  Corpus](http://wing.comp.nus.edu.sg:8080/SMSCorpus/overview.jsp)

```javascript
const corpus = require("nlp-corpus")
let txt= corpus["sms"][491];
// "Wat would u like 4 ur birthday?"
let txt= corpus["sms"][2442];
// "If u dun drive then how i go 2 sch."
```

#Wikipedia
quickly build a plaintext corpus, in any language, using the 1000 most generic ['articles_every_Wikipedia_should_have'](https://meta.wikimedia.org/wiki/List_of_articles_every_Wikipedia_should_have).
```javascript
const corpus = require("nlp-corpus")
//    wikipedia.build(lang, article_count)
corpus.wikipedia.build("fr", 20)
// .. wait a couple seconds for it to finish
```
```bash
head  ./wikipedia/corpus/fr.txt
# Albert Einstein, né le 14 mars 1879, est un physicien théoricien qui fut...
wc -w  ./wikipedia/corpus/fr.txt
# [some large number of words]
```