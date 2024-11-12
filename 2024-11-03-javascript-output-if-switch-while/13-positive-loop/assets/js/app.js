// a variable without any assignment will be equal
// to a special JavaScript value, called undefined
let num = +prompt('please enter a number'); 

while (num !== 0) {
    // the following 6 lines of code...
    // let message
    // if (num > 0) {
    //     message = 'positive'
    // } else {
    //     message = 'negative'
    // }

    // ... turn into a SINGLE line of code:
    const message = num > 0 ? 'positive': 'negative'
    alert(message);
    num = +prompt('please enter a number'); 
}
