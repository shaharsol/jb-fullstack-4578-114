"use strict";

(() => {

    const pickColor = () => {
        const colors = ['red', 'green', 'blue', 'yellow', 'cyan']
        const randomColor = colors[Math.floor(Math.random() * colors.length * 2)]
        if(!randomColor) throw new Error ('undefined color')
        document.body.style.backgroundColor = randomColor
    }

    document.getElementById('switchColorSync').addEventListener('click', () => {
        try {
            pickColor()
        } catch (e) {
            console.log(e.message)
        }
    })


    ////////////////////////////////////////////////////////////////////////////////////

    const pickColorAsync = (callback) => {
        setTimeout(() => {
            const colors = ['red', 'green', 'blue', 'yellow', 'cyan']
            const randomColor = colors[Math.floor(Math.random() * colors.length * 2)]
            if(!randomColor) throw new Error ('undefined color')
            callback(randomColor)
        }, 2000)
    }

    document.getElementById('switchColorAsync').addEventListener('click', () => {
        try {
            pickColorAsync(color => document.body.style.backgroundColor = randomColor)
        } catch (e) {
            console.log(e.message)
        }
    })



})()