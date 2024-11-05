let randomNumber = Math.random() // generate the base 
let randomNumberHighRange = randomNumber * 50; // multiply by (high range - low range)
let randomNumberParsed = parseInt(randomNumberHighRange) // parseInt
let randomNumberFinal  = randomNumberParsed + 0; // add the low range

document.write(`0-50: ${randomNumberFinal}<br>`)


randomNumber = Math.random() // generate the base 
randomNumberHighRange = randomNumber * (30 - 10); // multiply by (high range - low range)
randomNumberParsed = parseInt(randomNumberHighRange) // parseInt
randomNumberFinal  = randomNumberParsed + 10; // add the low range

document.write(`10-30: ${randomNumberFinal}<br>`)


randomNumber = Math.random() // generate the base 
randomNumberHighRange = randomNumber * (50 - 20); // multiply by (high range - low range)
randomNumberParsed = parseInt(randomNumberHighRange) // parseInt
randomNumberFinal  = randomNumberParsed + 20; // add the low range

document.write(`20-50: ${randomNumberFinal}<br>`)


randomNumber = Math.random() // generate the base 
randomNumberHighRange = randomNumber * (51 - 20); // multiply by (high range - low range)
randomNumberParsed = parseInt(randomNumberHighRange) // parseInt
randomNumberFinal  = randomNumberParsed + 20; // add the low range

document.write(`20-50(inclusive): ${randomNumberFinal}<br>`)


const oneLine = parseInt(Math.random() * (51 - 20)) + 20