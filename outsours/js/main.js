$(function(){

    $('.slider').slick({
        infinite: true,
        speed: 1300,
        
        autoplaySpeed: 2100,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: true
      });
  
$('.accordion__title').click(function(){
  $(this).closest('.accordion__item').siblings().removeClass('active').find('.accordion__content').slideUp(500);
  $(this).closest('.accordion__item').toggleClass('active').find('.accordion__content').slideToggle(400);
  return false;
});


  });














let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;
 
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
 
        if (countFiles)
          label.querySelector('.input__file-button-text').innerText = 'Selected files: ' + countFiles;
        else
          label.querySelector('.input__file-button-text').innerText = labelVal;
      });
    });