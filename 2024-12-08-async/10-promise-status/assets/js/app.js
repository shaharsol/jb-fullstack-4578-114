"use strict";

(() => {

    const getPower = (num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (num % 3 === 0) {
                    reject('number is a divider of 3')
                } else {
                    resolve(num ** 2)
                }
            }, 3000)
        })
    }


    document.getElementById('power').addEventListener('click', () => {
        const num = +prompt('enter a number')
        const promise = getPower(num)
        console.log(promise) // Promise <pending>
        setTimeout(() => console.log(promise), 4000)  // Promise <fulfilled | rejected>
    })

})()