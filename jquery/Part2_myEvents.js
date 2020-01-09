$('h1').click(function(){
    console.log('There was a click!')
})

$('li').click(function(){
    console.log('any li was clicked!')
})

$('input').eq(0).keypress(function(){
    if(event.which === 13) {
        $('h3').toggleClass('turnBlue')
    }
})

$('h1').on('mouseenter', function(){
    $(this).toggleClass('turnBlue')
})

$('input').eq(1).on('click', function(){
    $('.container').fadeOut(1000)
})