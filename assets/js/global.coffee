# share drop downs
$('#header .share .share-btn').click (e) ->
    e.preventDefault()
    $ul = $(this).siblings('ul')
    if $ul.hasClass('hidden')
        $(this).addClass('expanded')
        $ul.slideDown(200, 'swing').removeClass('hidden')
    else
        $ul.addClass('hidden').slideUp(200, 'swing', => $(this).removeClass('expanded'))

# open share link in a new window
$('#header .share .share-ul a').click (e) ->
    e.preventDefault()
    $('#header .share .share-btn').click()
    window.open($(this).attr('href'), '', 'height=500,width=600')

# open side navigation
$('#header .menu .menu-btn').click (e) ->
    e.preventDefault()
    $sidenav = $('#sidenav')
    $sidenav.removeClass('hidden')
    $sidenav.animate(right: 0)

# close side navigation
$('#sidenav .close a').click (e) ->
    e.preventDefault()
    $sidenav = $('#sidenav')
    if $(window).width() <= 300
        $sidenav.addClass('hidden')
    else
        $sidenav.animate(right: -$sidenav.width(), -> $sidenav.addClass('hidden'))
