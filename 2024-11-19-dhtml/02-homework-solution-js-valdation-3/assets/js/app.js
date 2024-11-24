function errorMessage(innerHTML, backgroundColor) {
    const firstNameInput = document.getElementById('firstName')
    const firstNameErrorMessage = document.getElementById('firstNameErrorMessage')
    firstNameErrorMessage.innerHTML = innerHTML
    firstNameInput.style.backgroundColor = backgroundColor
}

function message() {
    const firstNameInput = document.getElementById('firstName')
    if (!firstNameInput.value) {
        errorMessage('error', 'pink')
    } else {
        alert(firstNameInput.value)
        errorMessage('', 'white')
    }
}