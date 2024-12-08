"use strict";

(() => {


    const getNumberOfCandles = (dayNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (dayNumber < 1) return reject('dayNumber must be greater than 0');
                if (dayNumber > 8) return reject('no Isru Chag in Hanukah');
                resolve(dayNumber + 1)
            }, 10)
        })
    }

    let sum = 0;
    getNumberOfCandles(1).then(result => {
        // JavaScript will now create a promise that 
        // is resolved to the value of result
        return result 
    })
    .then(result => {
        sum += result
        return getNumberOfCandles(2)
    })
    .then(result => {
        sum += result
        return getNumberOfCandles(3)
    })
    .then(result => {
        sum += result
        return getNumberOfCandles(4)
    })
    .then(result => {
        sum += result
        return getNumberOfCandles(5)
    })
    .then(result => {
        sum += result
        return getNumberOfCandles(6)
    })
    .then(result => {
        sum += result
        return getNumberOfCandles(7)
    })
    .then(result => {
        sum += result
        return getNumberOfCandles(8)

    }).then(result => console.log(sum + result))
    .catch(error => console.log(`error is ${error}`))



})()