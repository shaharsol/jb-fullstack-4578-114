const num = +prompt('please enter a number');

// this is the solution using if-elseif-else
// if(num === 1) document.write('one')
// else if(num === 2) document.write('two')
// else if(num === 3) document.write('three')    
// else if(num === 4) document.write('four')
// else if(num === 5) document.write('five')
// else document.write('invalid input')

// when we have a single input, 
// from which we can diverse into various outputs
// we should use the "switch" command

switch(num) {
    case 1: 
        document.write('one');
        break;
    case 2: 
        document.write('two');
        break;
    case 3: 
        document.write('three');
        break;
    case 4: 
        document.write('four');
        break;
    case 5: 
        document.write('five');
        break;
    default:
        document.write('invalid input')
}

const firstName = prompt('enter your name')
switch(firstName) {
    case 'shahar':
        
    case 'tamir':

}

switch(true) {
    case firstName === 'moshe':
    case num < 0:    
}