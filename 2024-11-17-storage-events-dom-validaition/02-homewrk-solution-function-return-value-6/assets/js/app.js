function getMinimalItemIndex(arr) {
    let min = Infinity
    let index;
    for(let i=0; i< arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
            index = i
        }
    }
    return index
}

console.log(getMinimalItemIndex([99,13,44]))
console.log(getMinimalItemIndex([990,13,414,9,55]))