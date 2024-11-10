const width = +prompt('enter width')
const height = +prompt('enter height')

for(let row = 1; row <= height; row++) {

    for(let col = 1; col <= width; col++) {

        const isFirstOrLastRow = row === 1 || row === height
        const isFirstOrLastCol = col === 1 || col === width
        const iterationOutput = isFirstOrLastRow || isFirstOrLastCol ? "*" : "&nbsp;"

        // document.write(iterationOutput)
        // row !== 1 && row !==height && col !== 1 && col !== width
        document.write(row !== 1 && row !==height && col !== 1 && col !== width ? "&nbsp;&nbsp;" : "*")
        // document.write('*')
    }

    document.write('<br>')

}