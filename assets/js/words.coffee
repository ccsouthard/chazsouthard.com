$articles = $('.words .articles')
$wordsnav = $('.words .wordsnav')

# load a specific article
load_article = (type, article) ->
	$articles.html(templates['words_inner_article']({
		words: words
		display_type: type
		display_article: article
		}))

# update links in the wordsnav to change articles
update_wordsnav = ->
	$('.words .wordsnav a').click (e) ->
		e.preventDefault()
		type = $('.words .articles').data('loaded')
		load_article(type, this.hash.substring(1))
update_wordsnav()

# replaces the page content with the given type
load_type = (type) ->
	$words = $('.words')
	$words.html(templates['words_inner']({
		words: words
		display_type: type
		}))
	update_wordsnav()
	$articles = $('.words .articles')
	$wordsnav = $('.words .wordsnav')

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

# wordsnav auto-scroll
is_nav_fixed = false
nav_scroll = ->
	if window.scrollY > $articles.offset().top-55 and !is_nav_fixed
		$wordsnav.addClass('fixed')
		is_nav_fixed = true
	else if window.scrollY < $articles.offset().top-55 and is_nav_fixed
		$wordsnav.removeClass('fixed')
		is_nav_fixed = false
$(window).scroll(nav_scroll)
nav_scroll()
