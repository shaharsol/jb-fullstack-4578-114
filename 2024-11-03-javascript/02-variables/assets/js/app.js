// naming conventions
// let's say I need a variable to hold value for a "family name"
// family_name (all lower case, _ between words, used in Python, PHP, SQL)
// FamilyName (Each word starts with a capital Letter)
// JavaScript uses this for variable names:
// familyName (Each word except the first starts with a capital Letter)

// historic way of using variables
var companyName = 'KSP';

// starting 2015, usage of var is wrong
// don't use var

// we can use let to declare a variable
let aVariableThatIMayWantToChange;
// and then assign (assing = השמה)
aVariableThatIMayWantToChange = 1;

// or, we can declare and assign in the same command
let anotherVariable = 3;

// however we declared the "let" variable, we can always change it:
aVariableThatIMayWantToChange += 3;

// sometimes, I want to protect a variable from modifications. const from the word constant
// assigment to const can only happen on declaration
const aVariableThatNeverChanges = 10;



document.write(companyName);
// using \n in document.write won't work for us
// document.write("\n");
document.write("<br>");
document.write(companyName);

alert(companyName + "\n" + companyName);
console.log(companyName + "\n" + companyName);

// KSP is a great company, everybody likes KSP, KSP have the best products
document.write("KSP is a great company, everybody likes KSP, KSP have the best products")
document.write("<br>" + companyName + " is a great company, everybody likes " + companyName + ", " + companyName + " have the best products")
document.write('i can also use these גרש to specify strings');
alert(`i can also 
    use back tick`)

document.write("<br>" + companyName + " is a great company, everybody likes " + companyName + ", " + companyName + " have the best products")
document.write(`<br>${companyName} is a great company, everybody likes ${companyName}, ${companyName} have the best products`)    


document.write(`<br>${aVariableThatIMayWantToChange}`)