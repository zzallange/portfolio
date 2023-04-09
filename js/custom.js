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
    if (window.innerWidth < 768) {
      $(".dim").removeClass("active");
      $(".nav").removeClass("active");
      $(".btn-menu").removeClass("active");
    }
  });
  //mobile menu
  $(".btn-menu").click(function () {
    $(this).toggleClass("active");
    $(".nav").toggleClass("active");
    $(".dim").toggleClass("active");
  });
  $(".dim").click(function () {
    $(this).removeClass("active");
    $(".nav").removeClass("active");
    $(".dim").removeClass("active");
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
  //project-item-link Click html scroll
  $(".project-item-link").click(function () {
    $("body").addClass("active");
    if ($(".featherlight-iframe")) {
      $(".featherlight-close-icon").click(function () {
        $("body").removeClass("active");
      });
    }
  });
}); //end
