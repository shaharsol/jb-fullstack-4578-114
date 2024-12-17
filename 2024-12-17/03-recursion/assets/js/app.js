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
        printStars(n-1)         // 4. invoke the recursion with the rest of the work
    }


})()