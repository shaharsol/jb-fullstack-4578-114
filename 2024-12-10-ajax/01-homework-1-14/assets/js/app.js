"use strict";

(() => {

    const getPizzaFromServerAsync = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * 100)
                if (randomNumber % 2 === 0) {
                    return resolve('here is your pizza')
                    // resolve is actually what we added as callback in then.
                    // so if we did .then(console.log), then resolve is now console.log
                    // so instead of resolve('here is your pizza') javascript invokes
                    // return console.log('here is your pizza')
                }
                return reject('no pizza today')
            }, 1000)
        })
    }

    const displayPizza = pizza => console.log(pizza)

    document.getElementById('button').addEventListener('click', async () => {
        // getPizzaFromServerAsync()
        //     .then(console.log)
        //     .catch(console.warn)
        try {
            const pizza = await getPizzaFromServerAsync()
            console.log(pizza)
        } catch (e) {
            console.warn(e)
        }
    })

})()


