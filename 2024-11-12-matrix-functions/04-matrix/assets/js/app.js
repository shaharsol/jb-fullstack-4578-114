const matrix = [
    [1, 2, 3], 
    [13, 15, 17], 
    [40, 60 , 80, 99],
    [41, 65 , 89]
]

// print 17
document.write(matrix[1][2])
document.write("<hr>")
// print 60
document.write(matrix[2][1])
document.write("<hr>")

// display entire matrix in the naive way
for(let i=0; i < matrix.length; i++) {
    for(let j=0; j < matrix[i].length; j++) {
        document.write(`${matrix[i][j]} | `)
    }    
    document.write('<br>')
}

document.write("<hr>")

// display entire matrix in a less naive way
for(let row=0; row < matrix.length; row++) {
    for(let col=0; col < matrix[row].length; col++) {
        document.write(`${matrix[row][col]} | `)
    }    
    document.write('<br>')
}

document.write("<hr>")


// display entire matrix
for(const row of matrix) {
    for(const cell of row) {
        document.write(`${cell} | `)
    }
    document.write('<br>')
}

// calc the sum of matrix
let sum = 0

for(const row of matrix) {
    for(const cell of row) {
        sum += cell
    }
}

document.write(`sum of matrix is ${sum}`)
document.write('<hr>')

// calc the avg of matrix
sum = 0
let count = 0;
for(const row of matrix) {
    for(const cell of row) {
        sum += cell
        count += 1
    }
}

document.write(`avg of matrix is ${sum/count}`)
document.write('<hr>')

// calc the avg of matrix
sum = 0
count = 0;
for(const row of matrix) {
    for(const cell of row) {
        sum += cell
    }
    count += row.length
}

document.write(`avg of matrix is ${sum/count}`)
document.write('<hr>')
