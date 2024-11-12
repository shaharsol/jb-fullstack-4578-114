// this is an operator with 1 operand
const grade = +prompt('please enter a grade');

/*

prompt => string (let's say the user typed 13, so the value is "13")
+"13" => 13 (the + operator, turns the string to its right into number)

const grade = prompt('please enter a grade');
const numericGrade = +grade;


*/

// this is an operator with 2 operands (the most popular)
const sum = 1 + 1

// let message;
// if (grade >= 60) {
//     message = 'pass'
// } else {
//     message = 'fail'
// }

// ternary operator - ternary means שלושה, and this the only operator 
// that works on 3 operands
// the format is:
// condition ? result for true : result for false
let message = grade >= 60 && grade <= 100 ? 'pass' : 'fail'




// can use as many ternary operators at once, please don't
// message = grade >= 60 ? 'pass' : (grade > 0 ? 'fail' : 'invalid')


document.write(message)
