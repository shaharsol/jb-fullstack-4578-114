// i can do as many exports as i want
export function showSale() {
    console.log('only today 20% discount on shoes');
}
export function showBrands() {
    console.log('adidas, puma, nike');
}
// i can do ONE default export
const name = 'elital';
export default name;
/*

=> {
    showSale,
    showBrands
},
name

*/ 
