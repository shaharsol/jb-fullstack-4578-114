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

function addCarToTable(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    renderHTML(newHTML)
    clearForm()
}