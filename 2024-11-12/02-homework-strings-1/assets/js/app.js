const websiteAddress = prompt('enter a website address')

/*
ksp.co.il => .co.il
ivory.com => .com
latet.org.il => .org.il
w3c.org => .org
*/

const indexOfFirstDot = websiteAddress.indexOf('.')
const suffix = websiteAddress.substring(indexOfFirstDot)

if (websiteAddress.endsWith('.co.il') || websiteAddress.endsWith('.org.il'))

alert(suffix)