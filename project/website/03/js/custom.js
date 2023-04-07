$(function () {
  //header
  $(".header").hover(
    function () {
      $(".header a").find("img").attr("src", "images/logo-active.png");
    },
    function () {
      if ($(this).hasClass("active")) {
        $(".header a").find("img").attr("src", "images/logo-active.png");
      } else {
        $(".header a").find("img").attr("src", "images/logo.png");
      }
    }
  );
  $(window).scroll(function () {
    var winScroll = $(window).scrollTop();
    if (winScroll > 0) {
      $(".header").addClass("active");
      $(".header a").find("img").attr("src", "images/logo-active.png");
    } else {
      $(".header").removeClass("active");
      $(".header a").find("img").attr("src", "images/logo.png");
    }
  });
  //gnb menu
  $(".gnb").hover(
    function () {
      if (window.innerWidth > 1024) {
        $(".gnb-bg").addClass("active");
      }
    },
    function () {
      if (window.innerWidth > 1024) {
        $(".gnb-bg").removeClass("active");
      }
    }
  );
  //search form
  $(".btn-search").click(function () {
    $(".search-wrap").addClass("active");
    $(".dim").addClass("on");
  });
  $(".btn-close").click(function () {
    $(".search-wrap").removeClass("active");
    $(".dim").removeClass("on");
  });
  $(".dim").click(function () {
    $(".search-wrap").removeClass("active");
    $(".dim").removeClass("on");
  });
  //mobile menu
  $(".btn-menu").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".header").removeClass("active");
      $(".nav").removeClass("active");
      $(".gnb-bg").removeClass("active");
    } else {
      $(this).addClass("active");
      $(".header").addClass("active");
      $(".nav").addClass("active");
      $(".gnb-bg").addClass("active");
    }
  });
  $(window)
    .resize(function () {
      if (window.innerWidth < 1024) {
        $(".gnb-bg").click(function () {
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".nav").removeClass("active");
            $(".btn-menu").removeClass("active");
          }
        });
      }
    })
    .resize();
  $(".depth1-menu").click(function () {
    $(this)
      .toggleClass("active")
      .parent(".depth1")
      .siblings()
      .find(".depth1-menu")
      .removeClass("active");
    $(this)
      .next(".submenu-wrap")
      .toggleClass("active")
      .parent(".depth1")
      .siblings()
      .find(".submenu-wrap")
      .removeClass("active");
  });
}); //end
