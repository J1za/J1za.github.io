

$(document).ready(function () {

    $('.slick__slider').slick({
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 400,
              settings: {
                arrows: false,
              }
            },
        ]
    });
    
    $('.burger-menu').click(function(event){
        $('.burger-menu, .menu').toggleClass('active');
        $('body').toggleClass('lock');
      });

      

     

      
});