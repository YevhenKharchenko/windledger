import Swiper from 'swiper';
import 'swiper/css/bundle';

let reviewsSwiper;

reviewsSwiper = new Swiper('.reviews-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 20,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
      centeredSlides: false,
      allowTouchMove: false,
      grabCursor: false,
    },
  },

  on: {
    init(swiper) {
      document.querySelector('.reviews-swiper-container').classList.add('show');
    },
  },
});
