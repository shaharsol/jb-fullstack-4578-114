function getAbs(n) {
    if(n > 0) return n;
    return -n;
}

function getAbs2(n) {
    return n > 0 ? n : -n
}

console.log(getAbs(10))
console.log(getAbs2(10))
console.log(getAbs(-10))
console.log(getAbs2(-10))
