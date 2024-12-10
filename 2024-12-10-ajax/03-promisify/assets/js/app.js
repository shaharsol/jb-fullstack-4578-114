"use strict";

(() => {

    // can I code a generic function for promisification?
    // explanation. Can I develop a function called promisify that turns
    // any callback function to a promise?
    // a sample usage:
    // const getCurrentPositionPromisified = promisify(navigator.geolocation.getCurrentPosition)
    // 
    const getCurrentPositionPromise = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    }

    document.getElementById('button').addEventListener('click', async () => {
        try {
            const position = await getCurrentPositionPromise()
            console.log(position.coords)
        } catch (e) {
            console.warn(e)
        }
    })

})()


