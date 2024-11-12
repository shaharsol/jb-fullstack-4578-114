let sentence = prompt('please enter a sentence')
sentence = sentence.trim()

const firstWordEnd = sentence.indexOf(' ')
const firstWord = sentence.substring(0, firstWordEnd)
console.log(firstWord)

const lastWordStart = sentence.lastIndexOf(' ') + 1
const lastWord = sentence.substring(lastWordStart)
console.log(lastWord)

console.log(`${firstWord} ${lastWord}`)