$articles = $('.words .articles')
$sidenav = $('.words .sidenav')

# setup smooth scrolling in the side nav
smooth_scroll = ->
	$('nav.sidenav a').click (e) ->
		e.preventDefault()
		$('html,body').animate({scrollTop:$(this.hash).offset().top-51}, 500)
smooth_scroll()

# replaces the page content with the given type
load_type = (type) ->
	$words = $('.words')
	$words.html(templates['words_inner']({
		words: words
		display_type: type
		}))
	smooth_scroll()
	$articles = $('.words .articles')
	$sidenav = $('.words .sidenav')

# load content based on the location hash
location_hash = window.location.hash.substring(1)
if location_hash of words
	load_type(location_hash)

# load content when a filter is clicked
$('.filter a').click (e) ->
	type = $(this).data('type')
	loaded = $('.words .articles').data('loaded')
	if type != loaded
		load_type(type)

# sidenav auto-scroll
is_nav_fixed = false
nav_scroll = ->
	if window.scrollY > $articles.offset().top-55 and !is_nav_fixed
		$sidenav.addClass('fixed')
		is_nav_fixed = true
	else if window.scrollY < $articles.offset().top-55 and is_nav_fixed
		$sidenav.removeClass('fixed')
		is_nav_fixed = false
$(window).scroll(nav_scroll)
nav_scroll()
