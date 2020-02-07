$(function(){
   
    $('.slider').slick({ });
    
  
    
        
$('.counter__box-number').each(function(){
    $(this).prop('counter__box-number', 0).animate({
        Counter:$(this).text()
    },{
        duration: 3000,
        easing: 'swing',
        step:function(now){
            $(this).text(Math.ceil(now));
        }
        
    })
    
        
});

    



new WOW().init();

    
    var mixer = mixitup('.project__inner-box');
    
});
