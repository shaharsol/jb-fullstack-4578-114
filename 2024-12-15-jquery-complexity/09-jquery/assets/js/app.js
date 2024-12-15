// jquery will run the callback once the DOM is ready to be manipulated
$(() => {
    
    $('#button1').css('background-color', 'green')    

    $('#button1').click(function (event) {
        $(this).css('background-color', 'red')   
        $(this).fadeOut(2000).fadeIn(2000) 
        $(this).addClass('Tamir')

        $('div').each(function () {
            $(this).css('background-color', 'red')
        })

        $.getJSON({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos',
            success: function (data) {
                console.log(data)
            },
            error: function (err) {
                console.log(err)
            }
        })
    })

})