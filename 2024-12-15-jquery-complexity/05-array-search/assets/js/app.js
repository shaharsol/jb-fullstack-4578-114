"use strict";

(() => {

    // a function to find an item in an un-sorted array
    // O is O(n)
    const isGradeInGrades = grades => grades.find(grade => grade === input) ? 'yes' : 'no'
    

    const isGradeInGradesSorted = grades => {}

    const grades =  [100, 99, 78, 87, 65, 66, 64, 99, 92, 80]
    const grades2 = [64, 65, 66, 78, 80, 87, 92, 99, 99, 100]


    const input = +prompt('enter a number to check if it is in the array')

    console.log(isGradeInGrades(grades))
})()
