"use strict";

(() => {

    function showThis() {
        console.log(this)    
    }

    document.getElementById('button').addEventListener('click', showThis)
    console.log(this)

    showThis()

    function paintGreen() {
        this.style.backgroundColor = 'green'        
    }

    document.getElementById('greenButton').addEventListener('click', paintGreen)
    document.getElementById('myDiv').addEventListener('click', paintGreen)

    document.getElementById('greenButtonTimeout').addEventListener('click', function() {
        const originalThis = this
        setTimeout(function() {
            console.log(originalThis)
            originalThis.style.backgroundColor = 'green'        
        }, 1000)
    })

    document.getElementById('greenButtonTimeout2').addEventListener('click', function() {
        setTimeout(paintGreen.bind(this), 1000)
    })


})()


