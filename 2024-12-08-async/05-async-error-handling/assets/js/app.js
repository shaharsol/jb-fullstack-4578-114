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

    const pickColorAsync = (successCallback, errorCallback) => {
        setTimeout(() => {
            const colors = ['red', 'green', 'blue', 'yellow', 'cyan']
            const randomColor = colors[Math.floor(Math.random() * colors.length * 2)]
            if(!randomColor) {
                errorCallback('color is undefined')
                return
            }
            successCallback(randomColor)
        }, 2000)
    }

    document.getElementById('switchColorAsync').addEventListener('click', () => {
        const colorPicked = color => {
            document.body.style.backgroundColor = color
        }
        const failure = error => {
            console.log(error)
        }
        pickColorAsync(colorPicked, failure)
    })



})()