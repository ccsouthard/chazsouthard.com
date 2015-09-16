(function() {
  var $a, $close_btn, $date_btn, $dates, $li, $medium_btn, $mediums, $modal, $next_btn, $previous_btn, art, date, date_filter, dates, gallery_artwork, i, j, k, len, len1, len2, medium, medium_filter, mediums, modal_index, open_modal, ref, ref1, sort_artwork, update_artwork, update_modal,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $date_btn = $('.filter .date');

  $dates = $('.filter .date .dropdown');

  $medium_btn = $('.filter .medium');

  $mediums = $('.filter .medium .dropdown');

  $modal = $('.gallery-modal .modal-inner');

  $close_btn = $('.gallery-modal .close a');

  $previous_btn = $('.gallery-modal .previous a');

  $next_btn = $('.gallery-modal .next a');

  gallery_artwork = artwork;

  date_filter = false;

  medium_filter = false;

  modal_index = -1;

  sort_artwork = function(artwork) {
    return artwork.sort(function(a, b) {
      var result;
      result = b.date - a.date;
      if (result === 0) {
        return a.title.localeCompare(b.title);
      } else {
        return result;
      }
    });
  };

  update_artwork = function() {
    var art, i, len;
    gallery_artwork = [];
    for (i = 0, len = artwork.length; i < len; i++) {
      art = artwork[i];
      if ((!date_filter || art._attributes['data-date'] === date_filter) && (!medium_filter || art._attributes['data-medium'] === medium_filter)) {
        gallery_artwork.push(art);
      }
    }
    $('.gallery').html(templates.gallery_inner({
      sorted_artwork: gallery_artwork
    }));
    return $('.gallery figure > a').click(open_modal);
  };

  update_modal = function() {
    return $modal.html(templates.gallery_modal({
      artwork: gallery_artwork,
      index: modal_index
    }));
  };

  open_modal = function(e) {
    e.preventDefault();
    modal_index = $(this).parent().data('index');
    update_modal();
    $('body').addClass('modal');
    return $('html').on('keydown.modal', function(e) {
      var key;
      key = e.which;
      if (key === 37) {
        e.preventDefault();
        return $previous_btn.click();
      } else if (key === 39) {
        e.preventDefault();
        return $next_btn.click();
      } else if (key === 27) {
        e.preventDefault();
        return $close_btn.click();
      }
    });
  };

  dates = [];

  mediums = [];

  for (i = 0, len = artwork.length; i < len; i++) {
    art = artwork[i];
    if (ref = art._attributes['data-date'], indexOf.call(dates, ref) < 0) {
      dates.push(art._attributes['data-date']);
    }
    if (ref1 = art._attributes['data-medium'], indexOf.call(mediums, ref1) < 0) {
      mediums.push(art._attributes['data-medium']);
    }
  }

  dates.sort().reverse();

  $dates.append('<li class="all"><a href="#">All</a></li>');

  for (j = 0, len1 = dates.length; j < len1; j++) {
    date = dates[j];
    $li = $('<li>');
    $a = $('<a href="#">').text(date).data('date', date);
    $dates.append($li.append($a));
  }

  $mediums.append('<li class="all"><a href="#">All</a></li>');

  for (k = 0, len2 = mediums.length; k < len2; k++) {
    medium = mediums[k];
    $li = $('<li>');
    $a = $('<a href="#">').text(medium).data('medium', medium);
    $mediums.append($li.append($a));
  }

  $date_btn.click(function(e) {
    e.preventDefault();
    if ($dates.hasClass('hidden')) {
      $dates.removeClass('hidden');
      if (!$mediums.hasClass('hidden')) {
        return $mediums.addClass('hidden');
      }
    } else {
      return $dates.addClass('hidden');
    }
  });

  $medium_btn.click(function(e) {
    e.preventDefault();
    if ($mediums.hasClass('hidden')) {
      $mediums.removeClass('hidden');
      if (!$dates.hasClass('hidden')) {
        return $dates.addClass('hidden');
      }
    } else {
      return $mediums.addClass('hidden');
    }
  });

  $dates.find('a').click(function(e) {
    var $this;
    e.preventDefault();
    $this = $(this);
    $date_btn.find('> span').text($this.parent().hasClass('all') ? 'Year' : $this.text());
    date_filter = !$this.parent().hasClass('all') && $this.data('date');
    return update_artwork();
  });

  $mediums.find('a').click(function(e) {
    var $this;
    e.preventDefault();
    $this = $(this);
    $medium_btn.find('> span').text($this.parent().hasClass('all') ? 'Medium' : $this.text());
    medium_filter = !$this.parent().hasClass('all') && $this.data('medium');
    return update_artwork();
  });

  $('.gallery figure > a').click(open_modal);

  $close_btn.click(function(e) {
    e.preventDefault();
    $('body').removeClass('modal');
    $modal.empty();
    $('html').off('keydown.modal');
    return modal_index = -1;
  });

  $previous_btn.click(function(e) {
    e.preventDefault();
    if (modal_index === -1) {
      return;
    }
    modal_index -= 1;
    if (modal_index < 0) {
      modal_index = gallery_artwork.length - 1;
    }
    return update_modal();
  });

  $next_btn.click(function(e) {
    e.preventDefault();
    if (modal_index === -1) {
      return;
    }
    modal_index += 1;
    if (modal_index >= gallery_artwork.length) {
      modal_index = 0;
    }
    return update_modal();
  });

}).call(this);

 //# sourceMappingURL=gallery.js.map