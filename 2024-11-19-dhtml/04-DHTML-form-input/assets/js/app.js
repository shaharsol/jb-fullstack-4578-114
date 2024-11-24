function collectData() {
    const carName = document.getElementById('carName').value
    const engineVolume = document.getElementById('engineVolume').value
    const carColor = document.getElementById('carColor').value
    const imageUrl = document.getElementById('imageUrl').value
    return {
        carName: carName,
        engineVolume: engineVolume,
        carColor: carColor,
        imageUrl: imageUrl
    }
}

function generateHTML(data) {
    const newHTML = `
        <tr style="background-color: ${data.carColor}">
            <td>${data.carName}</td>
            <td>${data.engineVolume}</td>
            <td><img src="${data.imageUrl}" /></td>
        </tr>    
    `
    return newHTML
}

function renderHTML(newHTML) {
    const carsContainer = document.getElementById('carsContainer')
    carsContainer.innerHTML += newHTML
}

function clearForm() {
    // const carName = document.getElementById('carName')
    // const engineVolume = document.getElementById('engineVolume')
    // carName.value = ''
    // engineVolume.value = ''

    // we can clear the entire form in one command
    const carForm = document.getElementById('carForm')
    carForm.reset()

    const carNameInput = document.getElementById('carName')
    carNameInput.focus()
}

function saveSingleCarToStorage(carObject) {
    const currentCarsInStorageJSON = localStorage.getItem('cars')

    let carsArray;
    if (!currentCarsInStorageJSON) {
        carsArray = []
    } else {
        carsArray = JSON.parse(currentCarsInStorageJSON)
    }
    
    carsArray.push(carObject)
    localStorage.setItem('cars', JSON.stringify(carsArray))
}

function addCarToTable(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    saveSingleCarToStorage(data)
    renderHTML(newHTML)
    clearForm()
}

function loadCarsFromLocalStorage() {
    const carsJSON = localStorage.getItem('cars')
    if(carsJSON) {
        const cars = JSON.parse(carsJSON)
        for(const car of cars) {
            const newHTML = generateHTML(car)
            renderHTML(newHTML)
        }
    }
}

loadCarsFromLocalStorage()