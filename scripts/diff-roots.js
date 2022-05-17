import normals from '../freq/normal.js'
import roots from '../freq/root.js'

let words = new Set(normals.map(a => a[0]))

roots.slice(0, 5000).forEach(a => {
  if (!words.has(a[0])) {
    console.log(a)
  }
})