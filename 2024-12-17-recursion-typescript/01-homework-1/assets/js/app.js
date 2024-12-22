"use strict";

(() => {

    const allDivs = document.getElementsByTagName('div')

    console.log(allDivs)


    const whatever = document.querySelectorAll('div > aside')
    
    console.log(whatever)

})()