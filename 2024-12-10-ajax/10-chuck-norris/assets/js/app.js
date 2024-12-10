"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateHTML = joke => joke.value
    // {
    //     const { value } = joke
    //     const newHTML = value
    //     return newHTML
    // }

    const renderHTML = newHTML => document.getElementById('joke').innerHTML = newHTML


    const displayChuckNorrisJoke = async () => {
        try {

            // get data
            const joke = await getData('https://api.chucknorris.io/jokes/random')

            // generate html
            const newHTML = generateHTML(joke)

            // render html
            renderHTML(newHTML)
            
        } catch (e) {
            console.warn(e)
        }

    }

    document.getElementById('button').addEventListener('click', () => {
        setInterval(displayChuckNorrisJoke, 5000)
    })

})()


