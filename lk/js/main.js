$(document).ready(function () {
    
    $('.user__box').click(function(event){
        $('.user__box,.user-profile').toggleClass('active');
      });

      $('.header__burger').click(function(event){
        $('.header__burger,.header__box').toggleClass('active');
      });

      $("select").chosen({
        disable_search_threshold: 10
      })
     
});