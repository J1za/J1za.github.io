import Swiper from 'swiper/bundle';
const mainSwiper = new Swiper('.main__slider', {
    loop: false,
    lazy: true,
    slidesPerView: 1,
    speed: 1000,
    grabCursor: true,
    navigation: {
        nextEl: '.main .swiper-button-next',
        prevEl: '.main .swiper-button-prev',
    }
});
const specoffersSwiper = new Swiper('.specoffers__slider', {
    loop: false,
    lazy: true,
    slidesPerView: 2,
    speed: 800,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.specoffers .swiper-button-next',
        prevEl: '.specoffers .swiper-button-prev',
    }
});