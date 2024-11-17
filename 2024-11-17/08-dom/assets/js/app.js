function sayGoodbye() {
    // we won't use this way to access dom elements
    // console.log(document.body.firstChild.nextSibling.nextSibling)

    document.getElementById("myParagraph").innerText = "goodbye"
}

function saveName() {
    const name = document.getElementById("nameInput").value
    localStorage.setItem('username', name)
}

function restoreName() {
    const name = localStorage.getItem('username')
    document.getElementById('nameInput').value = name
}