const doEval = () => {
    const code = document.getElementById('code').value
    try {
        eval(code)
    } catch (e) {
        alert(e.message)
    }
}