function validate(event) {
    // tells the browser, that i am taking command
    // on this event, and I don't want the browser
    // to continue handling the event
    // event.preventDefault()

    const emailInput = document.getElementById('email') 
    const passwordInput = document.getElementById('password') 
    const ageInput = document.getElementById('age') 
    const emailErrorMessage = document.getElementById('emailErrorMessage') 
    const passwordErrorMessage = document.getElementById('passwordErrorMessage') 
    const ageErrorMessage = document.getElementById('ageErrorMessage') 
    


    const email = emailInput.value
    const password = passwordInput.value
    const age = ageInput.value

    if(!email) {
        emailErrorMessage.innerHTML = 'You must enter an email'
    }

    if(password.length < 8) {
        passwordErrorMessage.innerHTML = 'Passwords must be at least 8 characters long'
    }

    if(age < 13) {
        ageErrorMessage.innerHTML = 'Kids are not allowed. Grow up and come back'
    }

    return false;
    

}