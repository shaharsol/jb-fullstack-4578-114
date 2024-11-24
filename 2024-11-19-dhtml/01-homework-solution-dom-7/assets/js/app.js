function changeBackgroundColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'wheat', 'purple', 'grey']

    const randomIndex = parseInt(Math.random() * colors.length)

    document.getElementById('myInput').style.backgroundColor = colors[randomIndex]

}