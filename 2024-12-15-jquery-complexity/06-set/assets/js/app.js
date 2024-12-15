"use strict";

(() => {

    // a function to find an item in an un-sorted array
    // O is O(n)
    const isGradeInGrades = grades => grades.find(grade => grade === input) ? 'yes' : 'no'
    
    // a function that runs in O(log2n), possible on sorted arrays only
    const isGradeInGradesSorted = (grades, search) => {

        let startIndex = 0;
        let finishIndex = grades.length - 1;

        do {
            let currentIndex = Math.floor((finishIndex + startIndex) / 2)
            if (grades[currentIndex] === search) return currentIndex

            if (grades[currentIndex] > search) {
                finishIndex = currentIndex - 1
            } else {
                startIndex = currentIndex + 1
            }
        } while ( finishIndex >= startIndex)

        return -1

    }

    // unsorted array
    const grades =  [100, 99, 78, 87, 65, 66, 64, 99, 92, 80]

    // the same array, sorted
    const sortedGrades = [64, 65, 66, 78, 80, 87, 92, 99, 99, 100]


    const input = +prompt('enter a number to check if it is in the array')

    // console.log(isGradeInGrades(grades))
    console.log(isGradeInGradesSorted(sortedGrades, input))
})()
