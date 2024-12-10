"use strict";

(() => {

    document.getElementById('button').addEventListener('click', () => {
        document.body.style.backgroundColor = "Green";
        setTimeout(() => {alert("Done")}, 0)
    })

})()


