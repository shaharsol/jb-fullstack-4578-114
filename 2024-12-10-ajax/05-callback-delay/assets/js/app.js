"use strict";

(() => {

    document.getElementById('button').addEventListener('click', () => {
        setTimeout(() => {
            console.log('1 second passed')
        }, 3000)
        for(let i=0; i < 10000; i++) {
            console.log('h')
            // do nothing
        }

    })

    document.getElementById('button2').addEventListener('click', () => {
        console.log('clicked')
    })
})()


