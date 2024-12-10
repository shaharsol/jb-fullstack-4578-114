"use strict";

(() => {

    document.getElementById('button').addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition(position => {
            document.getElementById('location').innerHTML = `
                latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude}
            `
        }, error => {
            document.getElementById('location').innerHTML = error.message
        })
    })

})()


