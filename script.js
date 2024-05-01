/* webflow only this section swiper pagination */
$(document).ready(function() {
  /* add html by js (no way to add this HTML by webflow UI beacuse this is CMS list*/
  var part1 = "<div class=swiper-pagination></div>";
  //  var part2 = '<div class="swiper-button-prev"></div>';
  //var part3 = '<div class="swiper-button-next"></div>';
  // var swiperString = part1.concat(part2, part3);
  $("#swiper-press").append(part1);
});

/* change active class when click */
$(".swiper-container-videos .swiper-wrapper .swiper-slide a").click(function() {
  $(this)
    .closest(".swiper-slide")
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  mySwiper1.slideTo(mySwiper1.clickedIndex);
});

$(".swiper-container-videos .swiper-slide")
  .first()
  .addClass("selected");

/* 1 of 2 : SWIPER */
var mySwiper1 = new Swiper(".swiper-container-videos", {
  // If loop true set photoswipe - counterEl: false
  loop: false,
  /* slidesPerView || auto - if you want to set width by css like flickity.js layout - in this case width:80% by CSS */
  slidesPerView: "auto",
  spaceBetween: 15,
  centeredSlides: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-custom-next",
    prevEl: ".swiper-custom-prev"
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true
  }
});

/* This is what makes the videos responsive. You can either include this in a <script> tag in the markup, or better yet, include it in a separata JavaScript file.*/
$(function() {
  //Look for all the videos inside this element and make them responsive
  $(".vid-container").fitVids();
});

/*JS FOR SCROLLING THE ROW OF THUMBNAILS*/

$(document).ready(function() {
  $(".vid-item").each(function(index) {
    $(this).on("click", function() {
      var current_index = index + 1;
      $(".vid-item .thumb").removeClass("active");
      $(".vid-item:nth-child(" + current_index + ") .thumb").addClass("active");
    });
  });
});