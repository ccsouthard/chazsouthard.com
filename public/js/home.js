(function() {
  $('.home-page .hero .arrow a').click(function(e) {
    e.preventDefault();
    return $('html, body').animate({
      scrollTop: $('.home-page nav').offset().top - 51
    }, 1000);
  });

}).call(this);

 //# sourceMappingURL=home.js.map