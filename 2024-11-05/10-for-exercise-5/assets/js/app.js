let sum = 0;
for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        document.write(`*`);
        // delay
        for(let k = 1; k <= 100000; k++) {
            // do nothing
            sum += k;
        }   
    }
    document.write('<br>')
}
