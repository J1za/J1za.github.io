function reorderTeam() {
    var data={};
    if($(window).width()<500) {

        $('.teams__person').each(function(){

            data=$(this).data();

            $style='';

            if(data['leftMobile']) {
                $style+='left:'+  data['leftMobile']+'px';
            }

            if(data['zIndexMobile']) {
                $style+='z-index:'+  data['zIndexMobile'];
            }

            $(this).attr('style',$style);
        });

    } else {

        $('.teams__person').each(function(){

            data=$(this).data();

            $style='';

            if(data['leftDesktop']) {
                $style+='left:'+  data['leftDesktop']+'px';
            }

            if(data['zIndexDesktop']) {
                $style+='z-index:'+  data['zIndexDesktop'];
            }


            $(this).attr('style',$style);
        });


    }
}

$(function(){
    $('.team__inner-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000 ,
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,

            }
          }

        ]


      });


      $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
      });


      if($('.teams__inner-people')[0]) {

          $(window).resize(function () {
              reorderTeam();
          })

          $(window).resize();

      }


});
window.sr = new ScrollReveal()
sr.reveal('body', {
    delay: 0,
    duration: 800,
    distance: '0',
    scale: 1,
    viewFactor: 0.01,
    cleanup: true,
});
sr.reveal('.header',{
    origin: 'top',
    delay: 100,
    duration: 300,
    distance: '200px',
});
sr.reveal('.header__main-info',{
    origin: 'left',
    delay: 400,
    duration: 1500,
    distance: '200px',
});
sr.reveal('.header__main-img',{
    origin: 'right',
    delay: 400,
    duration: 1500,
    distance: '250px',
});
sr.reveal('.team__inner-slider',{
    origin: 'top',
    delay: 200,
    duration: 2500,
    distance: '30px',
    scale: 1.5,
    cleanup: true,
});
sr.reveal('.about',{
    origin: 'bottom',
    delay: 400,
    duration: 500,
    distance: '250px',
});
sr.reveal('.btn-title',{
    delay: 100,
    duration: 1500,
    scale: 2,
});
sr.reveal('.feedback form button',{
    delay: 100,
    duration: 1500,
    scale: 2,
});
sr.reveal('.pathners__inner-img',{
    origin: 'bottom',
    delay: 200,
    duration: 1500,
    distance: '250px',
});
sr.reveal('.feedback',{
    origin: 'bottom',
    delay: 300,
    duration: 1500,
    distance: '250px',
});
sr.reveal('.contacts',{
    origin: 'bottom',
    delay: 400,
    duration: 1400,
    distance: '250px',
});
sr.reveal('.customers__inner',{
    origin: 'bottom',
    delay: 100,
    duration: 1000,
    distance: '250px',
});
sr.reveal('.footer',{
    origin: 'bottom',
    delay: 500,
    duration: 1600,
    distance: '250px',
});
sr.reveal('.footer__down',{
    origin: 'bottom',
    delay: 700,
    duration: 1600,
    distance: '250px',
});
sr.reveal('.teams__box-img', { 
    duration: 1000 
});
sr.reveal('.teams__inner-people', { 
    duration: 3000 
});

var tl = anime.timeline({
    easing: 'linear',
    loop: true,
    endDelay: 1000
});

tl.add({
    targets: 'svg #notebook', // вылетел ноутбук
    easing: 'linear',
    duration: 600,
    opacity: [0, 1],
    translateX: [150, 0],
    translateY: [150, 0],
    //direction: 'alternate',
}, 400)
    .add({
        targets: 'svg #template_building', // здание исчезло
        easing: 'linear',
        duration: 100,
        opacity: [1, 0],
        //direction: 'alternate',
    }, 700);

tl.add({
    targets: 'svg #notebook_code polygon', // код
    easing: 'easeInOutSine',
    duration: 200,
    // delay: function(el, i) { return i * 120 },
    delay: anime.stagger(100, {direction: 'reverse'}),
    opacity: [0, 1],
    //direction: 'alternate',
}, 1000)

active_cube(3, 1000);
active_cube(2, 2000);
active_cube(1, 3000);

deactive_cube(1, 4000);
deactive_cube(2, 4000);
deactive_cube(3, 4000);

tl.add({
    targets: 'svg #notebook', // улетел ноутбук
    easing: 'linear',
    duration: 600,
    opacity: 0,
    translateX: [0, 150],
    translateY: [0, 150],
    //direction: 'alternate',
}, 4000)
    .add({
        targets: 'svg #template_building', // здание появилось
        easing: 'linear',
        duration: 100,
        opacity: 1,
        //direction: 'alternate',
    }, 4500);


tl.add({
    targets: 'svg #mobile',
    easing: 'linear',
    duration: 500,
    opacity: [0, 1],
    translateX: [150, 0],
    translateY: [150, 0],
    //direction: 'alternate',
}, 5000)
    .add({
        targets: 'svg #mobile_ray',
        easing: 'linear',
        duration: 400,
        opacity: [0, 1],
    }, 5600);



// подсвечиваем путь 1
    tl.add({
        targets: 'svg #cube3_qrcode',
        easing: 'linear',
        opacity: 1,
        duration: 300,
    }, 5700)
    .add({
        targets: 'svg #cube3_top',
        easing: 'linear',
        fill: '#ffd000',
        duration: 300,
    }, 5700)
    .add({
    targets: 'svg #cube3_shadow',
        easing: 'linear',
        fill: '#FFFFFF',
        strokeWidth: '1.71717117199327px',
        duration: 300,
}, 5700)
    .add({
    targets: 'svg #path_to_place',
    easing: 'linear',
    stroke: '#00adff',
    duration: 200,
}, 5800)
    .add({
    targets: ['svg #place'],
    easing: 'linear',
    stroke: '#00adff',
    duration: 200,
}, 5900)
.add({
    targets: 'svg #place_point',
    easing: 'linear',
    opacity: [0, 1],
    duration: 200,
}, 6000).add({
    targets: 'svg #place_marker',
    easing: 'linear',
    opacity: [0, 1],
    duration: 200,
}, 6100);



tl.add({
    targets: 'svg #mobile_ray',
    easing: 'linear',
    duration: 400,
    opacity: 0,
}, 6700);

// тущим путь 1
tl.add({
    targets: 'svg #cube3_qrcode',
    easing: 'linear',
    opacity: 0,
    duration: 200,
}, 6700)
    .add({
        targets: 'svg #cube3_top',
        easing: 'linear',
        fill: '#f0f2f5',
        duration: 200,
    }, 6700)
    .add({
        targets: 'svg #cube3_shadow',
        easing: 'linear',
        fill: '#f0f2f5',
        strokeWidth: '0px',
        duration: 200,
    }, 6700)
    .add({
        targets: 'svg #path_to_place',
        easing: 'linear',
        stroke: '#f0f2f5',
        duration: 200,
    }, 6700)
    .add({
        targets: ['svg #place'],
        easing: 'linear',
        stroke: '#f0f2f5',
        duration: 200,
    }, 6700)
    .add({
        targets: 'svg #place_point',
        easing: 'linear',
        opacity: 0,
        duration: 200,
    }, 6700).add({
    targets: 'svg #place_marker',
    easing: 'linear',
    opacity: 0,
    duration: 200,
}, 6700);




tl.add({
    targets: 'svg #mobile',
    easing: 'easeInOutSine',
    duration: 500,
    translateX:  180,
    translateY:  -100,
    //direction: 'alternate',
}, 7200)
    .add({
        targets: 'svg #mobile_ray',
        easing: 'linear',
        duration: 400,
        opacity: [0, 1],
    }, 7800);


// подсвечиваем путь 2

tl.add({
    targets: 'svg #cube2_qrcode',
    easing: 'linear',
    opacity: 1,
    duration: 300,
}, 7900)
    .add({
        targets: 'svg #cube2_top',
        easing: 'linear',
        fill: '#ffd000',
        duration: 300,
    }, 7900)
    .add({
        targets: 'svg #cube2_shadow',
        easing: 'linear',
        fill: '#FFFFFF',
        strokeWidth: '1.71717117199327px',
        duration: 300,
    }, 7900)
    .add({
        targets: 'svg #path_to_building',
        easing: 'linear',
        stroke: '#00adff',
        duration: 200,
    }, 8000);


// тушим путь 2

tl.add({
    targets: 'svg #mobile',
    easing: 'easeInOutSine',
    duration: 500,
    opacity: 0,
    //direction: 'alternate',
}, 9300)
    .add({
        targets: 'svg #mobile_ray',
        easing: 'linear',
        duration: 400,
        opacity: 0,
    }, 9200);

tl.add({
    targets: 'svg #cube2_qrcode',
    easing: 'linear',
    opacity: 0,
    duration: 200,
}, 9000)
    .add({
        targets: 'svg #cube2_top',
        easing: 'linear',
        fill: '#f0f2f5',
        duration: 200,
    }, 9000)
    .add({
        targets: 'svg #cube2_shadow',
        easing: 'linear',
        fill: '#f0f2f5',
        strokeWidth: '0px',
        duration: 200,
    }, 9000)
    .add({
        targets: 'svg #path_to_building',
        easing: 'linear',
        stroke: '#f0f2f5',
        duration: 200,
    }, 9000);





function active_cube(number, time) {


    /*    tl.add({ // штрихкод убираем
            targets: 'svg #cube'+number+'_barcode',
            easing: 'linear',
            opacity: 0,
            duration: 100,
        }, time+0);*/

    /*
        cube_blink.add({ // мигаем гранями
            targets: 'svg #cube'+number+'_top',
            easing: 'linear',
            fill: ['#f0f2f5','#ffd000'],
            duration: 200,
        }, time+300)
          .add({
            targets: 'svg #cube'+number+'_right',
            easing: 'linear',
            fill: ['#00adff','#f0f2f5'],
            duration: 200,
        }, time+300)
            .add({
            targets: 'svg #cube'+number+'_left',
            easing: 'linear',
            fill: ['#003e87','#0064da'],
            duration: 200,
        }, time+300);
    */

    // программирование
    tl.add({
        targets: 'svg #cube' + number + '_code',
        easing: 'linear',
        opacity: [0, 1],
        translateY: [100, 0],
        duration: 300,
    }, time + 200)
        .add({
            targets: 'svg #cube' + number + '_qrcode',
            easing: 'linear',
            opacity: [0, 1],
            duration: 200,
        }, time + 400)
        .add({
            targets: 'svg #cube' + number + '_glow',
            easing: 'easeInBounce',
            opacity: [0, 1],
            duration: 500,
        }, time + 400)
        .add({
            targets: 'svg #cube' + number + '_top',
            easing: 'easeInBounce',
            fill: ['#f0f2f5', '#ffd000'],
            duration: 500,
        }, time + 400);


    tl.add({  // выбор кубика - меняем тень
        targets: 'svg #cube' + number + '_shadow',
        easing: 'linear',
        //fill: '#ebf0f0',
        fill: '#FFFFFF',
        /*        stroke: '#00adff',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',*/
        strokeWidth: '1.71717117199327px',
        duration: 100,
        //direction: 'alternate',
    }, time + 700);

}


function deactive_cube(number, time) {

    // тушим свечение
    tl.add({
        targets: 'svg #cube' + number + '_glow',
        easing: 'linear',
        opacity: [1, 0],
        duration: 400,
    }, time + 0);

    tl.add({
        targets: 'svg #cube' + number + '_top',
        easing: 'linear',
        fill: ['#ffd000', '#f0f2f5'],
        duration: 400,
    }, time + 200);


    tl.add({
        targets: 'svg #cube' + number + '_qrcode',
        easing: 'linear',
        opacity: 0,
        duration: 200,
    }, time + 400);

    // код улетает
    tl.add({
        targets: 'svg #cube' + number + '_code',
        easing: 'linear',
        opacity: [1, 0],
        translateY: [0, -30],
        duration: 200,
    }, time + 0);


    tl.add({  // выбор кубика - меняем тень
        targets: 'svg #cube' + number + '_shadow',
        easing: 'linear',
        fill: '#f0f2f5',
        strokeWidth: '0px',
        duration: 100,
    }, time + 300);

    /*    tl.add({ // штрихкод
            targets: 'svg #cube'+number+'_barcode',
            easing: 'linear',
            opacity: 1,
            duration: 100,
        }, time+300);*/


}


/*
// #check .dotted_line .point.top .point.bottom .cube.top #document_inner

tl
    .add({
        targets: ['svg .path','svg path'],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 20 },
        //direction: 'alternate',
    }, 300)
    .add({
        targets: 'svg #check',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 300,
    }, 2000)
    .add({
        targets: ['svg #company_text','svg #company_text_bg'],
        easing: 'linear',
        duration:600,
        opacity: [0, 1],
    }, 1500)
    .add({
        targets: 'svg #arrow ',
        easing: 'easeOutQuad',
        duration:400,
        opacity: [0, 1],
        translateX: [-100, 0]
    }, 1700)
    .add({
        targets: ['svg #curve_arrow','.dotted_line','.cube.top'],
        easing: 'easeOutQuad',
        duration:400,
        opacity: [0, 1],
    }, 1500)
    .add({
        targets: ['.point'],
        easing: 'easeOutQuad',
        duration:300,
        opacity: [0, 1],
    }, 1900)
    .add({
        targets: 'svg #equlibrium ',
        /!* easing: 'linear',,*!/
        duration:0,
        opacity: [0, 1],
        translateY: [{value:20},{value:0, duration: 300,  easing: 'easeOutQuad'}],
        opacity: [{value:0}, {value:'1', duration: 400,  easing: 'linear'}],
        direction: 'normal'
    }, 2200)
    .add({
        targets: ['svg #mobile .item','.cube.mobile'],
        duration:700,
        opacity: [0, 1],
        delay: anime.stagger(100) // increase delay by 100ms for each elements.
    }, 1500)
    .add({
        targets: ['svg .document_inner_item'],
        duration:700,
        opacity: [0, 1],
        delay: anime.stagger(100) // increase delay by 100ms for each elements.
    }, 1500);

*/
