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
     
    ]
  });

  $('.accordion__title').click(function () {
    $(this).closest('.accordion__item').siblings().removeClass('active').find('.accordion__content').slideUp(500);
    $(this).closest('.accordion__item').toggleClass('active').find('.accordion__content').slideToggle(400);
    return false;
  });
  
// Якорь
$("#upload").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});

});



	// E-mail Ajax Send
	$("#form-modal").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
      url: "telegram.php", //Change
      data: new FormData($('#form-modal')[0]),
      
      // Tell jQuery not to process data or worry about content-type
      // You *must* include these options!
      cache: false,
      contentType: false,
      processData: false,
      
		}).done(function() {
      $.fancybox.open({
        src  : '#modal-done',
        opts : {
          afterShow : function( instance, current ) {
            console.info('done!');
          }
        }
      });
      
			setTimeout(function() {
        // Done Functions
        $.fancybox.close();
				th.trigger("reset");
      }, 4000);
      
		});
		return false;
  });
  
  $("#form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
      url: "telegram.php", //Change
      data: new FormData($('#form')[0]),
      
      // Tell jQuery not to process data or worry about content-type
      // You *must* include these options!
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: function(){
        $(".loader__wrapper").css("display", "block");
        $(".loader__wrapper").animate({opacity: 1}, 500);
    }
		}).done(function() {
      $.fancybox.open({
        src  : '#modal-done',
        opts : {
          afterShow : function( instance, current ) {
            console.info('done!');
          }
        }
      });
      
			setTimeout(function() {
        // Done Functions
        $.fancybox.close();
				th.trigger("reset");
      }, 4000);
      $(".loader__wrapper").animate({opacity: 0}, 500, function(){ $(".loader__wrapper").css("display", "none");});
		});
		return false;
  });
  $('#form').trigger( 'reset' );
 

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
      label.querySelector('.input__file-button-text').innerText = 'Upload files';

  });
});



// var firebaseConfig = {
//   apiKey: "AIzaSyC1I2FWA4g90MoiycNjqELezwXp6BK_u_I",
//   authDomain: "microtasky-1a703.firebaseapp.com",
//   databaseURL: "https://microtasky-1a703.firebaseio.com",
//   projectId: "microtasky-1a703",
//   storageBucket: "microtasky-1a703.appspot.com",
//   messagingSenderId: "1036848585355",
//   appId: "1:1036848585355:web:9661bb3b3502a8776e128e"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// input__file.addEventListener('change', function (e) {
 
//   var file = e.target.files[0];
//   var storageRef = firebase.storage().ref('OutSoursCompany/' + file.name);
//   var task = storageRef.put(file);

//   task.on('state_changed', 
//     function progress(snapshot) {
//       var percentage = (snapshot.bytesTransferred / snapshot.totalBytes)* 100;
//     },
//     function error(err){

//     },
//     function complete(){

//     }
//   );
// });


