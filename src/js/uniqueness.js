import Swiper from 'swiper';
import 'swiper/css/bundle';

const uniquenessLeftArrow = document.getElementById('uniquenessLeftArrow');
const uniquenessRightArrow = document.getElementById('uniquenessRightArrow');

let uniquenessSwiper;

uniquenessSwiper = new Swiper('.uniqueness-swiper-container', {
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
      slidesPerView: 'auto',
      centeredSlides: false,
    },
  },

  on: {
    init(swiper) {
      document
        .querySelector('.uniqueness-swiper-container')
        .classList.add('show');
      updateUniquenessArrows(swiper);
    },
    slideChange(swiper) {
      updateUniquenessArrows(swiper);
    },
    reachEnd(swiper) {
      uniquenessRightArrow.disabled = true;
    },
    fromEdge(swiper) {
      uniquenessRightArrow.disabled = false;
    },
  },
});

updateUniquenessArrows(uniquenessSwiper);

function updateUniquenessArrows(swiper) {
  uniquenessLeftArrow.disabled = swiper.isBeginning;
  uniquenessRightArrow.disabled = swiper.isEnd;
}

uniquenessLeftArrow.addEventListener('click', () => {
  uniquenessSwiper.slidePrev();
});

uniquenessRightArrow.addEventListener('click', () => {
  uniquenessSwiper.slideNext();
});
