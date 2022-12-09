$(document).ready(function () {

  // Museum gallery Lightbox
  const openLightBox = function (event) {

    $(".lightbox-content").html("<img src='" + event.target.src + "'>");

    $(".lightbox").addClass("active");
  }

  $(function () {

    $("body").on("click", ".gallery-item img", openLightBox);

    $(".lightbox-back").on("click", function () {
      $(".lightbox").removeClass("active");
    })
  })

  //Artwork gallery 
  let chosen = 0;
  let page = 0;

  function scrollDiv() {
    $(".thumb-img").animate({
      scrollLeft: 800 * page
    })
  }

  function showImage() {
    let chose = $(".lightbox-thumb img").eq(chosen);
    $('.main-image img').attr({
      src: chose.attr("src")
    });
    chose.addClass("current-img").siblings().removeClass("current-img");
  }

  $(".lightbox-thumb img").on("click", function () {
    chosen = $(this).index();
    showImage();
  })

  $(".controls .arrow.right").on("click", function () {
    let max = Math.floor($(".lightbox-thumb img").length / 10);
    page < max ? page++ : page;
    scrollDiv();
  })

  $(".controls .arrow.left").on("click", function () {
    page > 0 ? page-- : page;
    scrollDiv();
  })

  $(".main-image .arrow.right").on("click", function () {
    let max = Math.floor($(".lightbox-thumb img").length);
    chosen < max ? chosen++ : chosen;
    showImage();
  })

  $(".main-image .arrow.left").on("click", function () {
    chosen > 0 ? chosen-- : chosen;
    showImage();
  })
})