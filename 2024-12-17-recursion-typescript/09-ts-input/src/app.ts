document.getElementById('myForm').addEventListener('submit', (event) => {
    // when we use the keyword "as"
    // we actually tell typescript: trust me, i know what i am doing
    event.preventDefault()
    const myInput = document.getElementById('myInput') as HTMLInputElement
    const result = myInput.value
})

function test () {
    type Human = {
        name: string | undefined, // union type
        middleName?: string, // same as above, shorter syntax
        familyName: string
        age: number,
        birthdate: Date
    }

    type Animal = {
        type: string,
        eat: Function
    }

    const toy: Animal = {
        type: 'yorkshare',
        eat: () => { console.log('eating Bonzo') }
    }

    const yossi: Human = toy as unknown as Human
    yossi.familyName



    
}