# filter components
$date_btn = $('.filter .date')
$dates = $('.filter .date .dropdown')
$medium_btn = $('.filter .medium')
$mediums = $('.filter .medium .dropdown')
# modal components
$modal = $('.gallery-modal .modal-inner')
$close_btn = $('.gallery-modal .close a')
$previous_btn = $('.gallery-modal .previous a')
$next_btn = $('.gallery-modal .next a')


# variables
gallery_artwork = artwork
date_filter = false
medium_filter = false
modal_index = -1


# functions
sort_artwork = (artwork) ->
    artwork.sort((a, b) ->
        result = b.date - a.date
        if result == 0 then a.title.localeCompare(b.title)
        else result
        )

update_artwork = ->
    gallery_artwork = []
    for art in artwork
        if (!date_filter || art._attributes['data-date'] == date_filter) && (!medium_filter || art._attributes['data-medium'] == medium_filter)
            gallery_artwork.push(art)
    $('.gallery').html(
        templates.gallery_inner(sorted_artwork:gallery_artwork)
        )
    $('.gallery figure > a').click(open_modal)

update_modal = ->
    $modal.html(templates.gallery_modal(artwork:gallery_artwork, index:modal_index))

open_modal = (e) ->
    e.preventDefault()
    modal_index = $(this).parent().data('index')

    update_modal()
    $('body').addClass('modal')

    $('html').on('keydown.modal', (e) ->
        key = e.which
        if key == 37 # left arrow
            e.preventDefault()
            $previous_btn.click()
        else if key == 39 # right arrow
            e.preventDefault()
            $next_btn.click()
        else if key == 27 # escape
            e.preventDefault()
            $close_btn.click()
        )

# populate filters
dates = []
mediums = []
for art in artwork
    if art._attributes['data-date'] not in dates
        dates.push(art._attributes['data-date'])
    if art._attributes['data-medium'] not in mediums
        mediums.push(art._attributes['data-medium'])
dates.sort().reverse()

$dates.append('<li class="all"><a href="#">All</a></li>')
for date in dates
    $li = $('<li>')
    $a = $('<a href="#">').text(date).data('date', date)
    $dates.append($li.append($a))

$mediums.append('<li class="all"><a href="#">All</a></li>')
for medium in mediums
    $li = $('<li>')
    $a = $('<a href="#">').text(medium).data('medium', medium)
    $mediums.append($li.append($a))


# open / close filter
$date_btn.click (e) ->
    e.preventDefault()
    if $dates.hasClass('hidden')
        $dates.removeClass('hidden')
        if not $mediums.hasClass('hidden')
            $mediums.addClass('hidden')
    else
        $dates.addClass('hidden')

$medium_btn.click (e) ->
    e.preventDefault()
    if $mediums.hasClass('hidden')
        $mediums.removeClass('hidden')
        if not $dates.hasClass('hidden')
            $dates.addClass('hidden')
    else
        $mediums.addClass('hidden')


# filter change
$dates.find('a').click (e) ->
    e.preventDefault()
    $this = $(this)
    $date_btn.find('> span').text(if $this.parent().hasClass('all') then 'Year' else $this.text())

    date_filter = !$this.parent().hasClass('all') && $this.data('date')
    update_artwork()

$mediums.find('a').click (e) ->
    e.preventDefault()
    $this = $(this)
    $medium_btn.find('> span').text(if $this.parent().hasClass('all') then 'Medium' else $this.text())

    medium_filter = !$this.parent().hasClass('all') && $this.data('medium')
    update_artwork()

# modal open / close / previous / next
$('.gallery figure > a').click(open_modal)

$close_btn.click (e) ->
    e.preventDefault()
    $('body').removeClass('modal')
    $modal.empty()
    $('html').off('keydown.modal')
    modal_index = -1

$previous_btn.click (e) ->
    e.preventDefault()
    if modal_index == -1
        return
    modal_index -= 1
    if modal_index < 0
        modal_index = gallery_artwork.length-1
    update_modal()

$next_btn.click (e) ->
    e.preventDefault()
    if modal_index == -1
        return
    modal_index += 1
    if modal_index >= gallery_artwork.length
        modal_index = 0
    update_modal()
