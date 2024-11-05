let start = +prompt('enter start number')
let finish = +prompt('enter finish number')

if (finish < start) {
    const helper = start;
    start = finish;
    finish = helper;
}

for(let i = start; i <= finish; i++) {
    document.write(`${i} `)
}
