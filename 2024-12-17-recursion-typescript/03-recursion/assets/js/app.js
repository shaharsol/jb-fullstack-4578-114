"use strict";

(() => {

    document.getElementById('b1').addEventListener('click', () => {

        printStars(10)

    })

    // const printStars = (n) => {
    //     for(let i=0; i <= n; i++) {
    //         document.write('* ')
    //     }
    // }

    const printStars = (n) => { // 1. function signature identical to non-recursive solution
        if (n <= 0) return      // 2. exit condition, otherwise this is an endless loop
        document.write('* ')    // 3. do a single portion of the entire recursion work
        printStars(n - 1)         // 4. invoke the recursion with the rest of the work
    }



    document.getElementById('b2').addEventListener('click', () => {

        printNto1(10)

    })

    const printNto1 = (n) => { // 1. function signature identical to non-recursive solution
        if (n <= 0) return      // 2. exit condition, otherwise this is an endless loop
        document.write(`${n} `)    // 3. do a single portion of the entire recursion work
        printNto1(n - 1)         // 4. invoke the recursion with the rest of the work
    }


    document.getElementById('b3').addEventListener('click', () => {

        printEvenNto1(10)

    })

    const printEvenNto1 = (n) => { // 1. function signature identical to non-recursive solution
        if (n <= 0) return      // 2. exit condition, otherwise this is an endless loop
        if (n % 2 === 0) document.write(`${n} `)    // 3. do a single portion of the entire recursion work
        printEvenNto1(n - 1)         // 4. invoke the recursion with the rest of the work
    }

    document.getElementById('b4').addEventListener('click', () => {

        print1toN(10)

    })

    const print1toN = (n) => { // 1. function signature identical to non-recursive solution
        if (n <= 0) return      // 2. exit condition, otherwise this is an endless loop
        print1toN(n - 1)         // 4. invoke the recursion with the rest of the work
        document.write(`${n} `)    // 3. do a single portion of the entire recursion work
    }

    document.getElementById('b5').addEventListener('click', () => {

        const sum = getSumNto1(10)
        console.log(sum)

    })

    /*
    3 + 2 + 1
    3 + 2 + 1 + 0
    */

    const getSumNto1 = (n) => {         // 1. function signature identical to non-recursive solution
        if (n <= 0) return 0            // 2. exit condition, otherwise this is an endless loop
        return n + getSumNto1(n - 1)     // 3. do a single portion of the entire recursion work +  4. invoke the recursion with the rest of the work
    }


    document.getElementById('b6').addEventListener('click', () => {

        const factorial = getFactorial(10)
        console.log(factorial)

    })

    const getFactorial = (n) => {         // 1. function signature identical to non-recursive solution
        if (n <= 1) return 1            // 2. exit condition, otherwise this is an endless loop
        return n * getFactorial(n - 1)     // 3. do a single portion of the entire recursion work +  4. invoke the recursion with the rest of the work
    }


    document.getElementById('b7').addEventListener('click', () => {

        const fibonacciValue = getFibonacci(7)
        console.log(fibonacciValue)

    })

    /*
    1, 1, 2, 3, 5, 8, 13, 21, 34 …..
    1, 2, 3, 4, 5, 6, 7,   8,   9

    return getFibonacci(1) + getFibonacci(2) + getFibonacci(2) + getFibonacci(1) + getFibonacci(2) + getFibonacci(1) + getFibonacci(2) + getFibonacci(2) + getFibonacci(1) + getFibonacci(2) + getFibonacci(2) + getFibonacci(2) + getFibonacci(2)
    */

    const getFibonacci = (n) => {         // 1. function signature identical to non-recursive solution
        if (n <= 2) return 1            // 2. exit condition, otherwise this is an endless loop
        return getFibonacci(n - 1) + getFibonacci(n - 2)    // 3. do a single portion of the entire recursion work +  4. invoke the recursion with the rest of the work
    }


    document.getElementById('b8').addEventListener('click', () => {

        const user = {
            "id": 1, // number
            "name": "Leanne Graham", //string
            "username": "Bret", //string
            "email": "Sincere@april.biz", //string
            "address": { // object
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }

        flattenObject(user)


    })

    const flattenObject = (obj) => {
        for(const prop in obj) {
            if (typeof obj[prop] !== 'object') console.log(prop)
            else flattenObject(obj[prop])    
        }
    }






})()