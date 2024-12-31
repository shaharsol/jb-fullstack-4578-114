const myName = 'yossi';
let haveName;
// hasName(myName) // ts error...
hasName(!!myName);
function hasName(hasName) {
    if (hasName) {
        console.log('they have a name');
    }
}
