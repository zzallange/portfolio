$(function () {
  //Header scroll
  var winHeight = $(window).height(),
    docHeight = $(document).height(),
    headTop = $(".head-top").outerHeight(),
    lastScrollTop = 0,
    moveScroll;
  $(window).scroll(function (event) {
    moveScroll = true;
  });
  setInterval(function () {
    if (moveScroll) {
      hasScroll();
      moveScroll = false;
    }
  }, 250);
  function hasScroll() {
    var winScroll = $(this).scrollTop();
    if (winScroll > lastScrollTop && winScroll > headTop) {
      $(".head-top").addClass("hide");
    } else {
      if (winScroll + winHeight < docHeight) {
        $(".head-top").removeClass("hide");
      }
    }
    lastScrollTop = winScroll;
  }
  //Category Best Item
  $(".category-menu-icon").click(function () {
    $(".category-menu-icon").removeClass("active");
    $(this).addClass("active");
    var idx = $(this).index();
    //category-menu-items
    $(".category-menu-items").removeClass("active");
    $(".category-menu-items").eq(idx).addClass("active");
  });
  //iloom-interior
  $(".btn-interior").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var index = $(this).index();
    $(".interior-products")
      .eq(index)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  //footer
  $(".sitemap-list .title").click(function () {
    $(this).nextAll().stop().slideToggle();
    $(this).parent().siblings().find(".title").nextAll().slideUp();
    $(this)
      .toggleClass("active")
      .parent()
      .siblings()
      .find(".title")
      .removeClass("active");
  });
  // $(window).resize(function () {
  //   var windowSize = $(window).width();
  //   if (windowSize < 1024) {

  //   }
  // });
}); //end
