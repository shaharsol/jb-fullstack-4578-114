"use strict";

(() => {

    const getData = url => fetch(url).then(response => response.json())

    const generateUsersSelect = users => {
        const newHTML = users
            .map(user => {
                const { id, name } = user // deconstruction
                return `
                    <option value="${id}">${name}</option>
                `
            })
            .reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const renderUsersSelect = newHTML => document.getElementById('users').innerHTML = newHTML


    const generateSingleUserDisplay = user => {
        const { name, phone, company } = user

        return `
            <li>${name}</li>
            <li>${phone}</li>
            <li>${company.name}</li>
        `        
    }

    const renderSingleUserDisplay = newHTML => document.getElementById('singleUser').innerHTML = newHTML

    document.getElementById('users').addEventListener('change', async () => {
        const userId = document.getElementById('users').value
        const user = await getData(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const newHTML = generateSingleUserDisplay(user)
        renderSingleUserDisplay(newHTML)

    })

    const load = async () => {
        try {

            // get data
            const users = await getData('https://jsonplaceholder.typicode.com/users')

            // generate html
            const usersSelectHTML = generateUsersSelect(users)

            // render html
            renderUsersSelect(usersSelectHTML)
            
        } catch (e) {
            console.warn(e)
        }
    }

    load()

})()


