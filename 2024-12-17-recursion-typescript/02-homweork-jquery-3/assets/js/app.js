$(function () {
    $('#myForm').submit(function(event) {
        event.preventDefault()
        const start = $('#start').val()
        const end = $('#end').val()
        console.log(start, end)

        for(let i=start ; i <= end; i++) {
            $('#mySelect').append(`<option value="${i}">${i}</option>`)
        }

        // $('#mySelect').addClass('big')
        document.getElementById('mySelect').classList.add('big')
        document.getElementById('mySelect').classList.remove('pink')

    })
})