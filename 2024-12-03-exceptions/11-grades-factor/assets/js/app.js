const showFactor = (event) => {
    event.preventDefault()
    const grade = +document.getElementById('grade').value
    try {
        const gradeAfterFactor = calcFactor(grade)
        console.log(`the grade after factor for ${grade} is ${gradeAfterFactor}`)
    } catch (e) {
        alert(e.message)
    }
}

const calcFactor = (grade) => { 
    if (!grade) throw new Error('grade is required')
    if (grade < 0) throw new Error('grade must be a positive number')
    if (grade > 100) throw new Error('grade must be lower than 100')
    return 10 * Math.sqrt(grade)
}