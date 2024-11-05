const low = +prompt('enter low end of range');
const high = +prompt('enter high end of range');

for (let i = 1; i <= 100; i++) {
    let randomNumber = Math.random() // generate the base 
    let randomNumberHighRange = randomNumber * (high - low); // multiply by (high range - low range)
    let randomNumberParsed = parseInt(randomNumberHighRange) // parseInt
    let randomNumberFinal  = randomNumberParsed + low; // add the low range
    
    document.write(`answer: ${randomNumberFinal}<br>`)
}
