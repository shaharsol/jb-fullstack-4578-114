"use strict";

(() => {

    const getPower = (num, successCallback, errorCallback) => {
        setTimeout(() => {
            if (num % 3 === 0) {
                errorCallback('number is a divider of 3')
            } else {
                successCallback(num ** 2)
            }
        }, 3000)
    }


    document.getElementById('power').addEventListener('click', () => {
        const num = +prompt('enter a number')
        getPower(
            num, 
            result => {
                console.log(`${num} ** 2 = ${result}`)
            }, 
            error => {
                console.log(error)
            }
        )

    })

})()