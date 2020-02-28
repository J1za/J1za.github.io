$(function () {

  $('.slider').slick({
    infinite: true,
    
    speed: 1000,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dots: true ,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
          
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.accordion__title').click(function () {
    $(this).closest('.accordion__item').siblings().removeClass('active').find('.accordion__content').slideUp(500);
    $(this).closest('.accordion__item').toggleClass('active').find('.accordion__content').slideToggle(400);
    return false;
  });


});



// fileButton.addEventListener('change', function (e) {
//   var file = e.target.files[0];

//   var storageRef = firebase.storage().ref('sweet_gifs/' + file.name);

//   var task = storageRef.put(file);

//   task.on('state_changed',
//     function progress(snapshot){
//       var percentage = (snapshot.bytesTransferred / snapshot.totalBytes)* 100;
//     },
//     function error(err){

//     },
//     function complete(){

//     }
//   );

// });









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