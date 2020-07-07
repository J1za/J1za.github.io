
$('a[href*="#main"]').on('click', function(e){
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    },1300);
    e.preventDefault();
  });