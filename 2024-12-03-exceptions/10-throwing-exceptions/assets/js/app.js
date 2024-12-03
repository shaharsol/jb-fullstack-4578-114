const showVat = (event) => {
    event.preventDefault()
    const vat = getVat(document.getElementById('price').value)
    console.log(`the vat for ${document.getElementById('price').value} is ${vat}`)
}

const getVat = (price) => price * 0.17