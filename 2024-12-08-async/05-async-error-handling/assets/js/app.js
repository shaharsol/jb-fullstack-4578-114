"use strict";

(() => {



    // const pickColor = (callback) => {
    //     setTimeout(() => {
    //         const colors = ['red', 'green', 'blue', 'yellow', 'cyan']
    //         const randomColor = colors[Math.floor(Math.random() * colors.length)]
    //         callback(randomColor)
    //     }, 3000)
    // }

    // document.getElementById('switchColor').addEventListener('click', () => {
    //     const myVar = 'fdgdfg'
    //     pickColor(color => {
    //         document.body.style.backgroundColor = color
    //         console.log(myVar)
    //     })
    // })


    const pickColor = (callback) => {
        setTimeout(() => {
            const colors = ['red', 'green', 'blue', 'yellow', 'cyan']
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            callback(randomColor)
        }, 3000)
    }

    document.getElementById('switchColor').addEventListener('click', () => {
        const myVar = 'fdgdfg'
        pickColor(color => {
            document.body.style.backgroundColor = color
            console.log(myVar)
        })
    })

})()