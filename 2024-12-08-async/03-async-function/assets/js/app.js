"use strict";

(() => {

    const user = {
        id: 123,
        name: 'Israel Israeli'
    }

    ////////////////////////////////////////////////////////////
    const showUser = () => {
        console.log('function started')

        // NOT ALL callback are async!
        const grades = [80, 90, 95]
        const gradesWithFactor = grades.map(grade => grade + 2)        
        console.log(gradesWithFactor)

        // console.log(user)
        setTimeout(() => {
            console.log(user)
        }, 3000)

        console.log('function finished')
    }


    document.getElementById('showUser').addEventListener('click', () => {
        console.log('event started')
        showUser()
        console.log('event finished')
    })

    //////////////////////////////////////////////////////////////
    const getUser = (callback) => {
        console.log('function started')
        // doing something
        setTimeout(() => {
            // mimic communication with server
            // now we want to return the user record to whoever invoked us
            callback(user)
        }, 3000)
        console.log('function finished')
    }

    document.getElementById('getUser').addEventListener('click', () => {
        console.log('event started')
        getUser(user => {
            console.log(user)
        })
        console.log('event finished')
    })


})()