const grade = +prompt('enter a grade:'); 

// the following is the same lady in another dress
// if (grade >= 0 && grade <=100) {
//     document.write('valid')
// } else {
//     document.write('invalid')
// }

// if (grade < 0 || grade >100) {
//     document.write('invalid')
// } else {
//     if(grade === 100) {
//         document.write('perfect')
//     } else {
//         if(grade >= 60) {
//             document.write('pass')
//         } else {
//             document.write('fail')
//         }
//     }
// }

// same code with else if
// if (grade < 0 || grade >100) {
//     document.write('invalid')
// } else if(grade === 100) {
//     document.write('perfect')
// } else if(grade >= 60) {
//     document.write('pass')
// } else {
//     document.write('fail')
// }
    

// same code with else if, shortened to the maximum
if (grade < 0 || grade >100) document.write('invalid');
else if(grade === 100) document.write('perfect');
else if(grade >= 60) document.write('pass');
else document.write('fail');


