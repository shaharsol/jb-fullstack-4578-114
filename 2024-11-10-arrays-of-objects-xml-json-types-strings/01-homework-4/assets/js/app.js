let num = +prompt('please enter a number')

while (num > 0) {

    for(let i = num % 2 === 0 ? num : num - 1 ; i >=2; i -=2) {
        // document.write(`${i}<br/>`)
        console.log(i)
    }
    num = +prompt('please enter a number')
}

