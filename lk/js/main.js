$(document).ready(function () {
    
    $('.user__box').click(function(event){
        $('.user__box,.user-profile').toggleClass('active');
      });

      $("select").chosen({
        disable_search_threshold: 10
      })
     
});