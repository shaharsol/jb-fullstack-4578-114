function sayGoodbye() {
    // we won't use this way to access dom elements
    // console.log(document.body.firstChild.nextSibling.nextSibling)

    document.getElementById("myParagraph").innerText = "goodbye"
}

function saveName() {
    const username = document.getElementById("nameInput").value
    localStorage.setItem('username', username)
}

function restoreName() {
    const username = localStorage.getItem('username')
    const inputElement = document.getElementById('nameInput')
    inputElement.value = username
    inputElement.style.width = '300px'
    inputElement.style.backgroundColor = 'green'
    inputElement.classList.add('myClass')

    document.getElementById("mira").style.textDecoration = 'none'

}