"use strict";

(() => {


    const grades = [10, 20, 50, 90, 80, 70]

    let max = 0;
    for(const grade of grades) {
        if(grade > max) max = grade
    }

    let min = Infinity
    for(const grade of grades) {
        if(grade < min) min = grade
    }

    grades.reduce((min, grade) => grade < min ? grade : min, Infinity)

    let sum = 0
    for(const grade of grades) {
        sum += grade
    }

    grades.reduce((sum, grade) => sum += grade, 0)

    let html = ''
    for(const grade of grades) {
        html += `<li>${grade}</li>`
    }
    console.log(html) // <li>10</li><li>20</li>

    grades.reduce((html, grade) => {
        html += `<li>${grade}</li>`
        return html
    }, '')




})()