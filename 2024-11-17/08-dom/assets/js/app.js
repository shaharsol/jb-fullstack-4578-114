function sayGoodbye() {
    // we won't use this way to access dom elements
    // console.log(document.body.firstChild.nextSibling.nextSibling)

    document.getElementById("myParagraph").innerText = "goodbye"
}

function saveName() {
    console.log(document.getElementById("nameInput").value)
}