"use strict";

(() => {

    const getNumberOfCandles = (dayNumber, successCallback, errorCallback) => {
        setTimeout(() => {
            if (dayNumber < 1) errorCallback('dayNumber must be greater than 0');
            if (dayNumber > 8) errorCallback('no Isru Chag in Hanukah');
            successCallback(dayNumber + 1)
        }, 3000)
    }

    // use getNumberOfCandles to calculate how many candles are lit during hanukah
    getNumberOfCandles(1, day1Result => {
        getNumberOfCandles(2, day2Result => {
            getNumberOfCandles(3, day3Result => {
                getNumberOfCandles(4, day4Result => {
                    getNumberOfCandles(5, day5Result => {
                        getNumberOfCandles(6, day6Result => {
                            getNumberOfCandles(7, day7Result => {
                                getNumberOfCandles(8, day8Result => {
                                    console.log(day1Result + day2Result + day3Result + day4Result + day5Result + day6Result + day7Result + day8Result)
                                }, console.error)
                            }, console.error)
                        }, console.error)
                    }, console.error)
                }, console.error)
            }, console.error)
        }, console.error)
    }, console.error)
    


    // let sum = 0;
    // let daysCalculated = 0;
    // for(let dayNumber = 1; dayNumber < 9; dayNumber++) {
    //     getNumberOfCandles(dayNumber, result => {
    //         sum += result
    //         daysCalculated++
    //         if(daysCalculated === 8) {
    //             console.log(sum)
    //         }
    //     }, console.error)
    // }
    // console.log(sum)
})()