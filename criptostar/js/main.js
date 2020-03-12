$(function(){

$('.burger-menu').click(function(event){
    $('.burger-menu,.header__main-list').toggleClass('active-menu');
    $('body').toggleClass('lock');
});

});