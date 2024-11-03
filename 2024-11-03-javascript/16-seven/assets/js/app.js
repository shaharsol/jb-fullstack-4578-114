let num = +prompt('please enter a number');

while (num !== 0) {
    alert(num % 7 === 0 ? 'divides' : 'does not divide')
    num = +prompt('please enter a number'); 
}
