const wtf = require('/Users/spencer/mountain/wtf_wikipedia/src')
wtf.plugin(require('/Users/spencer/mountain/wtf_wikipedia/plugins/api/src'))
;(async () => {
  let doc = await wtf.fetch(
    'https://meta.wikimedia.org/wiki/List_of_articles_every_Wikipedia_should_have'
  )
  let links = doc.links().map((l) => l.text())

  // links = links.slice(200, 210)
  // console.log(JSON.stringify(links, null, 2))
  let docs = await wtf.fetchList(links)
  // console.log(docs)
  docs = docs.filter((d) => d)
  docs.forEach((doc) => console.log(doc.sentences()[0].text()))
  // console.log(JSON.stringify(links.slice(200), null, 2))
  // console.log(links.length)
})()
