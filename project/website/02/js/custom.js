$(function () {
  //header scroll style
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  //header active
  $(".main-menu").hover(
    function () {
      var windowSize = $(window).width();
      if (windowSize > 940) {
        $(this).children(".main-menu-link").addClass("active");
        $(".sub-gnb-wrap").stop().slideDown(250);
        $(".header-wrap").addClass("active");
      } else {
        $(".header-wrap").removeClass("active");
      }
    },
    function () {
      var windowSize = $(window).width();
      if (windowSize > 940) {
        $(this).children(".main-menu-link").removeClass("active");
        $(".sub-gnb-wrap").stop().slideUp(250);
        $(".header-wrap").removeClass("active");
      }
    }
  );
  //mobile menu click slideUpDown
  $(".main-menu-link").click(function () {
    var windowSize = $(window).width();
    if (windowSize < 960) {
      $(".sub-gnb-wrap").stop().slideUp();
      $(this).next(".sub-gnb-wrap").stop().slideToggle();
      $(this).parent().siblings().find(".main-menu-link").removeClass("active");
      $(this).toggleClass("active");
    }
  });
  //dim click
  $(".dim").click(function () {
    $(this).removeClass("on");
    $(".nav").removeClass("active");
    $(".mobile-menu").removeClass("active");
    $(".sub-gnb-wrap").stop().slideUp();
    $(".main-menu-link").removeClass("active");
  });
  //mobile menu Click
  $(".mobile-menu").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".nav").addClass("active");
      $(".dim").addClass("on");
    } else {
      $(".nav").removeClass("active");
      $(".dim").removeClass("on");
      $(".sub-gnb-wrap").stop().slideUp();
      $(".main-menu-link").removeClass("active");
    }
  });
  //Exhibition Swiper Controls
  $(".control-button").click(function () {
    $(this).toggleClass("stop");
    if ($(this).hasClass("stop")) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
  });
  //top button
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(".header").height()) {
      $(".btn-top").addClass("on");
    } else {
      $(".btn-top").removeClass("on");
    }
  });
  $(".btn-top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 300);
  });
}); //end
