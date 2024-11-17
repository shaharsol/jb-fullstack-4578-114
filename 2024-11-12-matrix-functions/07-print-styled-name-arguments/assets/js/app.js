function printStyledName(name) {
    document.write(`${name[0].toUpperCase()}${name.substring(1)}`)    
}

function printStyledFullName() {
    printStyledName(firstName)
    document.write(' ')
    printStyledName(middleName)
    document.write(' ')
    printStyledName(lastName)

}

const firstName = prompt('enter first name')
const middleName = prompt('enter middle name')
const lastName = prompt('enter last name')

// printStyledFirstName()
// printStyledLastName()
printStyledFullName()

