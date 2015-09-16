(function() {
  $('#header .share .share-btn').click(function(e) {
    var $ul;
    e.preventDefault();
    $ul = $(this).siblings('ul');
    if ($ul.hasClass('hidden')) {
      $(this).addClass('expanded');
      return $ul.slideDown(200, 'swing').removeClass('hidden');
    } else {
      return $ul.addClass('hidden').slideUp(200, 'swing', (function(_this) {
        return function() {
          return $(_this).removeClass('expanded');
        };
      })(this));
    }
  });

  $('#header .share .share-ul a').click(function(e) {
    e.preventDefault();
    $('#header .share .share-btn').click();
    return window.open($(this).attr('href'), '', 'height=500,width=600');
  });

  $('#header .menu .menu-btn').click(function(e) {
    var $sidenav;
    e.preventDefault();
    $sidenav = $('#sidenav');
    if ($sidenav.hasClass('hidden')) {
      return $sidenav.removeClass('hidden').animate({
        'margin-right': 0
      });
    } else {
      return $sidenav.animate({
        'margin-right': -300
      }, {
        complete: function() {
          return $(this).addClass('hidden');
        }
      });
    }
  });

  $('#sidenav .close a').click(function(e) {
    var $sidenav;
    e.preventDefault();
    $sidenav = $('#sidenav');
    return $sidenav.animate({
      'margin-right': -300
    }, {
      complete: function() {
        return $(this).addClass('hidden');
      }
    });
  });

}).call(this);

 //# sourceMappingURL=global.js.map