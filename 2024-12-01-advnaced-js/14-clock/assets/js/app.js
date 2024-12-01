setInterval(() => {
    const now = new Date()
    document.getElementById('clock').innerHTML = now.toLocaleTimeString()
}, 1 * 1000)



