const num = +prompt('enter a number')

for (let row = 1 ; row <= num; row++) {

    for (let blanksLeft = 1; blanksLeft <= num - row; blanksLeft++) {
        document.write('&nbsp;&nbsp;')
    }

    for (let colLeft = 1; colLeft <= row; colLeft++) {
        document.write(colLeft)
    }
    
    for (let colRight = row - 1; colRight >= 1; colRight--) {
        document.write(colRight)
    }

    document.write('<br>')

}