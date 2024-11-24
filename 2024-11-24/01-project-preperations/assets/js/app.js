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

function saveTaskToStorage(taskObject) {
    // get JSON from local storage
    const currentTasksInStorageJSON = localStorage.getItem('tasks')

    // convert JSON to JavaScript object
    const currentTasksInStorage = JSON.parse(currentTasksInStorageJSON)

    // the object I got is an array, push another item to the array
    currentTasksInStorage.push(taskObject)

    // save it back to the local storage
    localStorage.setItem('tasks', JSON.stringify(currentTasksInStorage))
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

function initStorage() {
    const currentTasksInStorageJSON = localStorage.getItem('tasks')
    if(!currentTasksInStorageJSON) {
        localStorage.setItem('tasks', [])
    }
    
}

function addTask(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    renderHTML(newHTML)
    saveTaskToStorage(data)
    clearForm()
}


initStorage()
loadCarsFromLocalStorage()