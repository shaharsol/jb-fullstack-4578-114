const age = prompt(`Please enter your age`);
// document.write(`your age is ${age}`)

if(age >= 13) {
    alert('Welcome');
    alert('Today we have sale on Artiks')
} else {
    alert('go home minor');  
    alert('and next time bring mama with you');
}

// this is better
if(age >= 13) {
    alert('Welcome');
} else {
    alert('go home minor');  
}

// than this:
if(age >= 13) alert('Welcome');
else alert('go home minor');  
