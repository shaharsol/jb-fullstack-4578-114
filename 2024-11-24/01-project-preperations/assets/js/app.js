function collectData() {
    const description = document.getElementById('description').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value
    return {
        description,
        date,
        time,
    }
}

function generateHTML(data) {
    const newHTML = `
        <div class="task">
            <div>${data.description}</div>
            <div>${data.date}</div>
            <div>${data.time}</div>
        </div>
    `
    return newHTML
}

function renderHTML(newHTML) {
    const tasksContainer = document.getElementById('tasks')
    tasksContainer.innerHTML += newHTML
}

function clearForm() {
    const tasksForm = document.getElementById('tasksForm')
    tasksForm.reset()

    const descriptionInput = document.getElementById('description')
    descriptionInput.focus()
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

function addTask(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    // saveTaskToStorage(data)
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