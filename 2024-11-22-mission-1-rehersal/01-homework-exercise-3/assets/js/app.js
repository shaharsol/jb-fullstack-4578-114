function collectData() {
    const colorName = document.getElementById('colorName').value
    return {
        colorName: colorName
    }
}

function generateHTML(data) {
    const newHTML = `
        <tr>
            <td>${data.colorName}</td>
            <td style="background-color: ${data.colorName}"></td>
        </tr>    
    `
    return newHTML
}

function renderHTML(newHTML) {
    const colorsContainer = document.getElementById('colorsContainer')
    colorsContainer.innerHTML += newHTML
}

function clearForm() {
    const carForm = document.getElementById('colorForm')
    carForm.reset()

    const colorNameInput = document.getElementById('colorName')
    colorNameInput.focus()
}

// function saveSingleCarToStorage(carObject) {
//     const currentCarsInStorageJSON = localStorage.getItem('cars')

//     let carsArray;
//     if (!currentCarsInStorageJSON) {
//         carsArray = []
//     } else {
//         carsArray = JSON.parse(currentCarsInStorageJSON)
//     }
    
//     carsArray.push(carObject)
//     localStorage.setItem('cars', JSON.stringify(carsArray))
// }

function addColorToTable(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    // saveSingleCarToStorage(data)
    renderHTML(newHTML)
    clearForm()
    incrementCounter()
}

function incrementCounter() {
    // const counterSpan = document.getElementById('counter')
    counter++
    document.getElementById('counter').innerHTML = counter
}
// function loadCarsFromLocalStorage() {
//     const carsJSON = localStorage.getItem('cars')
//     if(carsJSON) {
//         const cars = JSON.parse(carsJSON)
//         for(const car of cars) {
//             const newHTML = generateHTML(car)
//             renderHTML(newHTML)
//         }
//     }
// }

// loadCarsFromLocalStorage()
let counter = 0;
