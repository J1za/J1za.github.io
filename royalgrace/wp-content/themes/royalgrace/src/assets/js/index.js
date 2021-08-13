//header scroll

let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header--hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('header--hide');
    }
    else if(scrollPosition() < lastScroll && containHide()) {
        //scroll up
        header.classList.remove('header--hide');
    }

    lastScroll = scrollPosition();
});