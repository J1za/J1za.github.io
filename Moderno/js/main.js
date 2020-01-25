$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });

      $('.products-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
      });

      $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 00,
        to: 600,
        hide_min_max: true,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function(){
      $('.products__item').addClass('list');
      $('.icon-th-list').addClass('active');
      $('.icon-th-large').removeClass('active');
    });
    $('.icon-th-large').on('click', function(){
      $('.products__item').removeClass('list');
      $('.icon-th-large').addClass('active');
      $('.icon-th-list').removeClass('active');
    });
    var mixer = mixitup('.products__inner-box');
    
});