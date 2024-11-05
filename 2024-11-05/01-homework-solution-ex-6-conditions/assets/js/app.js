const grade = +prompt('please enter a grade')

switch(true) {
    case grade >=0 && grade <= 59:
        document.write('fail');
        break;
    case grade >=0 && grade <= 69:
        document.write('D');
        break;
    case grade >=0 && grade <= 79:
        document.write('C');
        break;
    case grade >=0 && grade <= 89:
        document.write('B');
        break;
    case grade >=0 && grade <= 99:
        document.write('A-');
        break;
    case grade === 100:
        document.write('A');
        break;
    default:
        alert('bad input')
}