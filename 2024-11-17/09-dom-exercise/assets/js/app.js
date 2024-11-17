function change() {

    // get access DOM elements
    const colorInput = document.getElementById('colorInput') 
    const textInput = document.getElementById('textInput') 
    const myParagraph = document.getElementById('myParagraph')

    // extract values from the 2 inputs
    const newColor = colorInput.value
    const newText = textInput.value

    // myParagraph.className = 'redBackground'
    // myParagraph.classList.add('purple')
    myParagraph.style.backgroundColor = newColor
    myParagraph.innerText = newText


    // this is a shorthand version of the code....
    // document.getElementById('myParagraph').style.backgroundColor = document.getElementById('colorInput').value
    // document.getElementById('myParagraph').innerText = document.getElementById('textInput').value


}