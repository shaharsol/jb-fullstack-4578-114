function printAsterisksLine(n) {
    for(let i=0; i<n; i++) {
        document.write('* ')
    }
}

function printSquare(m) {
    for(let i=0; i<m; i++) {
        printAsterisksLine(m)
        document.write('<br>')
    }
}

printAsterisksLine(5)
document.write("<hr>")
printAsterisksLine(8)
document.write("<hr>")

printSquare(5)
document.write("<hr>")
printSquare(8)
document.write("<hr>")
