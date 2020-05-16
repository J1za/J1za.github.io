

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
                
              }
            },
        ]
    });
    
    $('.burger-menu').click(function(event){
        $('.burger-menu, .menu, .overlay').toggleClass('active');
        $('body').toggleClass('lock');
      });

      
      
     

      
});
$(function(){
  $('a[href^="#sub"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});
