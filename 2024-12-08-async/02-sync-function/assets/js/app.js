"use strict";

(() => {

    const user = {
        id: 123,
        name: 'Israel Israeli'
    }

    ////////////////////////////////////////////////////////////
    const showUser = () => {
        console.log('function started')
        console.log(user)
        console.log('function finished')
    }


    document.getElementById('showUser').addEventListener('click', () => {
        console.log('event started')
        showUser()
        console.log('event finished')
    })

    //////////////////////////////////////////////////////////////
    const getUser = () => {
        console.log('function started')
        // doing something
        console.log('function finished')
        return user
    }

    document.getElementById('getUser').addEventListener('click', () => {
        console.log('event started')
        const user = getUser()
        console.log(user)
        console.log('event finished')
    })


})()