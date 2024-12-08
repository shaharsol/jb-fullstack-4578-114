"use strict";

(() => {

    const getAverage = (numbers) => {

        // numbers = 0, numbers = ''
        if (typeof numbers === 'undefined' ) throw new Error('numbers must not be undefined') 
        if (numbers === null) throw new Error('numbers must not be null') 
        if (!Array.isArray(numbers)) throw new Error('numbers must be an array') 
        if (numbers.length === 0) throw new Error('numbers must not be an empty array') 

        const average = numbers.reduce((count, num) => count + num, 0)/numbers.length
        return average
    }

    const btn = document.getElementById('invoker')
    btn.addEventListener('click', () => {
        try {
            const average = getAverage(['dfgdfgd'])
            console.log(`average is ${average}`)
        } catch (e) {
            console.log(e.message)
        }
    })

})()