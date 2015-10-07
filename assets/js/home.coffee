# scroll down the page when the hero arrow is clicked
$('.home-page .cd-hero .arrow a').click (e) ->
    e.preventDefault()
    $('html, body').animate({scrollTop: $('.home-page nav').offset().top-51}, 1000)
