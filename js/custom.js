$(function () {
  var nav = $(".gnb li");
  var section = $("section");

  nav.click(function (e) {
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var content = section.eq(index);
    var offset = content.offset().top;
    $("html, body").animate({ scrollTop: offset }, 600);
    target.addClass("active").siblings().removeClass("active");
  });
  //scroll active
  $(window).scroll(function () {
    var winScroll = $(this).scrollTop();
    for (var i = 0; i < section.length; i++) {
      var secTop = section.eq(i).offset().top;
      if (winScroll >= secTop) {
        nav.removeClass("active");
        nav.eq(i).addClass("active");
      } else if (winScroll == 0) {
        nav.removeClass("active");
      }
    }
  });
}); //end