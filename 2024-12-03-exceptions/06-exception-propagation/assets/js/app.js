const work = () => {
    const numberOfDigits = +prompt('enter number of digits')

    console.log('hello1')
    
    try {
        // 
        const pi = Math.PI.toFixed(numberOfDigits)
        console.log(pi)
        return
    } catch (e) {
        console.log(e.message)
        if(e.message.includes('between 0 and 100')) alert ('please enter a number between 0 and 100')
        return
        // const pi = Math.PI.toFixed(numberOfDigits)
    } finally { 
        // finally is good for 2 things:
        // invoked also when exception occurs in the catch block
        // and if a return statement is executed in the try block or in the catch block
        console.log('dealt with toFixed for better and worse')
    }
    
    
    console.log('hello2')
}

work()




