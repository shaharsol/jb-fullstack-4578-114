const generatePassword = (length) => {
    const possibleChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890'
    let password = ''

    for (let i=0; i<length; i++) {
        const randomIndex = Math.floor(Math.random() * possibleChars.length)
        password += possibleChars[randomIndex]
    }

    return password
}

module.exports = {
    generatePassword
}