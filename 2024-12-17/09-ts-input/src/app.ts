document.getElementById('myForm').addEventListener('submit', (event) => {
    // when we use the keyword "as"
    // we actually tell typescript: trust me, i know what i am doing
    event.preventDefault()
    const myInput = document.getElementById('myInput') as HTMLInputElement
    const result = myInput.value
})