// a variable without any assignment will be equal
// to a special JavaScript value, called undefined
let num = +prompt('please enter a number'); 

while (num !== 0) {
    alert(num > 0 ? 'positive': 'negative');
    num = +prompt('please enter a number'); 
}
