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
        getPower(num)
            .then(result => {
                console.log(`${num} ** 2 = ${result}`)
            })
            .catch(error => {
                console.log(error)
            })
    })

})()