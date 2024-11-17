// 1. non persistent cookie - lives as long as the browser lives
// document.cookie = "theme=dark"
// console.log(document.cookie)

// 2. persistent cookie.
const expirationDate = new Date() // create a new date object that represents now

// now expirationDate is 2024-11-17 11:33

// i want expiration date to be 2025-11-17 11:33, a year from now

// calc the value of next year
const nextYear = expirationDate.getFullYear() + 1 // 2024 + 1 = 2025

expirationDate.setFullYear(nextYear) // 2024-11-17 11:33 => 2025-11-17 11:33
// expirationDate.setFullYear(expirationDate.getFullYear() + 1) // 2024-11-17 11:33 => 2025-11-17 11:33
document.cookie = `theme=purple; expires=${expirationDate}`
console.log(document.cookie)

// sessionStorage
sessionStorage.setItem('font', 'david')
console.log(sessionStorage.getItem('font'))

// localStorage - persistnet storage
// localStorage.setItem('font-size', '36')
console.log(localStorage.getItem('font-size'))
