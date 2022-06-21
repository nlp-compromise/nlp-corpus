import AWS from 'aws-sdk';
import fs from 'fs'
import path from 'path'
import hash from './hash.js'


AWS.config.update({
  region: 'us-east-2',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const translate = new AWS.Translate();

const translateText = async (text, sourceLanguage, targetLanguage, userId) =>
  new Promise((resolve, reject) => {
    translate.translateText(
      {
        SourceLanguageCode: sourceLanguage,
        TargetLanguageCode: targetLanguage,
        Text: text,
      },
      function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data['TranslatedText']);
        }
      },
    );
  });



const dir = new URL('./', import.meta.url).pathname
const total = 1

const getDoc = function (i) {
  let file = path.join(dir, `../../builds/doc-${i}.json`)
  return JSON.parse(fs.readFileSync(file).toString())
}


// let total = 1
const doAll = async function () {
  for (let i = 0; i <= total; i += 1) {
    let json = getDoc(i)
    let res = []
    for (let o = 0; o < 10; o += 1) {
      let str = json[o]
      let h = hash(str)
      let doc = await translateText(str, 'en', 'es')
      console.log(doc)
      res[o] = [doc, h]
    }
    fs.writeFileSync(`${dir}res/doc-${i}.json`, JSON.stringify(res, null, 2))
    console.log(res)
  }
}
// console.log(dir)
doAll()

