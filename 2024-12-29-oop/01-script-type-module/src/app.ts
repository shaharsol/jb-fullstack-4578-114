import shopName, { showSale } from "./shop.js"
import { showSale as showBranchSale } from "./branch.js"

function sayHi() {
    console.log(shopName)
    showSale()
    showBranchSale()
}

document.getElementById('sayHiButton').addEventListener('click', () => {
    sayHi()
})
