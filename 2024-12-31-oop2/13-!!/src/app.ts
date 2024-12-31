const myName: string = 'yossi'

let haveName: boolean;
// hasName(myName) // ts error...
hasName(!!myName)

function hasName(hasName: boolean) {
    if(hasName) {
        console.log('they have a name')
    }
}