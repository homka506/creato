;(function() {
    "use strict";
    let btn = document.querySelector('.ba-menu-toggle');
      let menu = document.querySelector('.ba-menu');
      btn.addEventListener('click', function (e) {
        menu.classList.toggle('open');
      });

      
let testimonialSlider = $(".ba-slider__testimonial");
testimonialSlider.slick({
    infinite: true,
    appendArrows: $('.ba-slider-arrows'),
    prevArrow: '<button class="ba-btn"><svg class="icon icon-angle-left"><use xlink:href="#icon-angle-left"></use></svg></button>',
    nextArrow: '<button class="ba-btn"><svg class="icon icon-angle-right"><use xlink:href="#icon-angle-right"></use></svg></button>'

});
// $(document).ready(function () {
//     $('.ba-slider__testimonial').slick({
//         infinite: true,
//         //autoplay: true,
//         prevArrow: '<button class="ba-btn"><svg class="icon icon-angle-left"><use xlink:href="#icon-angle-left"></use></svg></button>',
//         nextArrow: '<button class="ba-btn"><svg class="icon icon-angle-right"><use xlink:href="#icon-angle-right"></use></svg></button>'
        
    })();



