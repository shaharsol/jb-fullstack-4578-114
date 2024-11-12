// let's create a random matrix.
// of 5*5
const matrix = []

for(let rowCount=0; rowCount<3; rowCount++){
    const row = []
    for(let colCount=0; colCount<3; colCount++){
        const randomNumber = parseInt(Math.random() * (100 - 20)) + 20
        row.push(randomNumber)
    }
    matrix.push(row)    
}

console.log(matrix)

// find the max value of the matrix
let max = 0;
for(const row of matrix) {
    for(const cell of row) {
        max = cell > max ? cell : max
    }
}

console.log(`max value is ${max}`)

// find the coordinates of the max value of the matrix
let maxRow = 0;
let maxCol = 0;
max = 0;

for(let row=0; row < matrix.length; row++) {
    for(let col=0; col < matrix[row].length; col++) {
        if (matrix[row][col] > max) {
            max = matrix[row][col]
            maxRow = row
            maxCol = col            
        }
    }
}

console.log(`max value is ${max}, located at [${maxRow}][${maxCol}]`)


// find the coordinates of the max value of the matrix
// maxRow = 0;
// maxCol = 0;
// maxValue = 0;

const maxi = {
    row: 0,
    col: 0,
    value: 0
}
for(let row=0; row < matrix.length; row++) {
    for(let col=0; col < matrix[row].length; col++) {
        if (matrix[row][col] > maxi.value) {
            maxi.value = matrix[row][col]
            maxi.row = row
            maxi.col = col            
        }
    }
}

console.log(`max value is ${maxi.value}, located at [${maxi.row}][${maxi.col}]`)


// 3d matrix:
const matrix3D = [
    [
        [],
        []
    ],
    [
        [],
        []
    ],
]