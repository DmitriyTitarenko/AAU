$(document).ready(function () {
  $('.slider__preview').on('beforeChange', function(event,slick,slide,nextSlide) {
  $('.slider__nav').find('.slick-slide').removeClass('slick-current').eq(nextSlide).addClass('slick-current');
  });

  $('.slider__preview').slick({
    asNavFor: '.slider__nav',
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
  });
  
    $('.slider__nav').slick({
      arrows: false,
      asNavFor: '.slider__preview',
      dots: false,
      focusOnSelect: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 4,
      speed: 0,
      swipe: false,
      centerPadding: '0px',
      variableWidth: true
    });

    $('.selector').slick({
      nextArrow: '<i class="fa fa-arrow-right"></i>',
      prevArrow: '<i class="fa fa-arrow-left"></i>',
    // add the rest of your options here
    });
});



$(document).ready(function() {
  $('.photo__slider-wrap').click(function() {
      $(this).addClass('active');
      $('.overlay-main').addClass('active');
  });
  $('.photo__slider-close, .overlay-main').click(function() {
    $('.photo__slider-wrap').removeClass('active');
    $('.overlay-main').removeClass('active');
    return false;
  });
});


$('.slider__preview').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.slider__nav .slick-slide').removeClass('slick-current');
  $('.slider__nav .slick-slide:eq('+nextSlide+')').addClass('slick-current');
});