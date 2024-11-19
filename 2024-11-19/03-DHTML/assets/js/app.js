function populate() {
    const animals = ['dog', 'cat', 'fish']

    const container = document.getElementById('container')

    // container.innerHTML = "<li>dog</li><li>cat</li>"
    // container.innerHTML += ""

    for(const animal of animals) {
        container.innerHTML += `
            <li>
                ${animal}
            </li>
        `
    }

}

function populateImages() {
    const images = [
        'hippo.jpg', 'parrot.webp'
    ]

    const container = document.getElementById('imagesContainer')

    let newHTML = ''
    for (const image of images) {
        newHTML += `<img src="assets/images/${image}" />`
    }

    container.innerHTML = newHTML


}