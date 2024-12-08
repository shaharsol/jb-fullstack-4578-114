"use strict";

(async () => {

    const getNumberOfCandles = (dayNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (dayNumber < 1) return reject('dayNumber must be greater than 0');
                if (dayNumber > 8) return reject('no Isru Chag in Hanukah');
                resolve(dayNumber + 1)
            }, 10)
        })
    }   

    try {
    
        // result = await getNumberOfCandles(1)
        // console.log('B')
        // console.log(result)
        // console.log(result2)
    
        // result2 = await getNumberOfCandles(-2)
        // console.log('C')
        // console.log(result)
        // console.log(result2)

        let sum = 0;
        for(const dayNumber of [1,2,3,4,5,6,7,8]) {
            const result = await getNumberOfCandles(dayNumber)
            sum += result;
        }
        console.log(sum)

    } catch(e) {
        console.log(e)
    }





})()