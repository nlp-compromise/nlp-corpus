// const fs = require('fs')
// let arr = fs.readFileSync('/Users/spencer/data/yelp/yelp_academic_dataset_review.json').toString().split('\n')
const sundayDriver = require('sunday-driver')
const nlp = require('compromise')

let options = {
  file: '/Users/spencer/data/yelp/yelp_academic_dataset_review.json',
  splitter: '\n',
  each: (chunk, resume) => {
    let obj = JSON.parse(chunk)
    nlp
      .tokenize(obj.text)
      .json()
      .forEach(o => console.log(o.text))
    // console.log(obj.text)
    resume()
  },
}

sundayDriver(options).then(() => {
  console.log('done!')
})
