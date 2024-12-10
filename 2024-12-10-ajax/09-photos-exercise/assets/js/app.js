"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateHTML = photos => {
        const newHTML = photos
            .map(photo => {
                const { title, thumbnailUrl } = photo // deconstruction
                return `
                    <tr>
                        <td>${title}</td>
                        <td><img src="${thumbnailUrl}"></td>
                    </tr>
                `
            })
            .reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const renderHTML = newHTML => document.getElementById('photos').innerHTML = newHTML

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const photos = await getData('https://jsonplaceholder.typicode.com/photos')

            // generate html
            const newHTML = generateHTML(photos)

            // render html
            renderHTML(newHTML)
            
        } catch (e) {
            console.warn(e)
        }
    })

})()


