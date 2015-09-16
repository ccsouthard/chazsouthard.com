(function() {
  var $articles, $wordsnav, is_nav_fixed, load_article, load_type, location_hash, nav_scroll, update_wordsnav;

  $articles = $('.words .articles');

  $wordsnav = $('.words .wordsnav');

  load_article = function(type, article) {
    return $articles.html(templates['words_inner_article']({
      words: words,
      display_type: type,
      display_article: article
    }));
  };

  update_wordsnav = function() {
    return $('.words .wordsnav a').click(function(e) {
      var type;
      e.preventDefault();
      type = $('.words .articles').data('loaded');
      return load_article(type, this.hash.substring(1));
    });
  };

  update_wordsnav();

  load_type = function(type) {
    var $words;
    $words = $('.words');
    $words.html(templates['words_inner']({
      words: words,
      display_type: type
    }));
    update_wordsnav();
    $articles = $('.words .articles');
    return $wordsnav = $('.words .wordsnav');
  };

  location_hash = window.location.hash.substring(1);

  if (location_hash in words) {
    load_type(location_hash);
  }

  $('.filter a').click(function(e) {
    var loaded, type;
    type = $(this).data('type');
    loaded = $('.words .articles').data('loaded');
    if (type !== loaded) {
      return load_type(type);
    }
  });

  is_nav_fixed = false;

  nav_scroll = function() {
    if (window.scrollY > $articles.offset().top - 55 && !is_nav_fixed) {
      $wordsnav.addClass('fixed');
      return is_nav_fixed = true;
    } else if (window.scrollY < $articles.offset().top - 55 && is_nav_fixed) {
      $wordsnav.removeClass('fixed');
      return is_nav_fixed = false;
    }
  };

  $(window).scroll(nav_scroll);

  nav_scroll();

}).call(this);

 //# sourceMappingURL=words.js.map