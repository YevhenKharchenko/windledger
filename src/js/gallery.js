import Swiper from 'swiper';
import 'swiper/css/bundle';

const galleryLeftArrow = document.getElementById('galleryLeftArrow');
const galleryRightArrow = document.getElementById('galleryRightArrow');

let gallerySwiper;

gallerySwiper = new Swiper('.gallery-swiper-container', {
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
      initialSlide: 1,
    },
  },

  on: {
    init(swiper) {
      document.querySelector('.gallery-swiper-container').classList.add('show');
      updateGalleryArrows(swiper);
    },
    slideChange(swiper) {
      updateGalleryArrows(swiper);
    },
    reachEnd(swiper) {
      galleryRightArrow.disabled = true;
    },
    fromEdge(swiper) {
      galleryRightArrow.disabled = false;
    },
  },
});

updateGalleryArrows(gallerySwiper);

function updateGalleryArrows(swiper) {
  galleryLeftArrow.disabled = swiper.isBeginning;
  galleryRightArrow.disabled = swiper.isEnd;
}

galleryLeftArrow.addEventListener('click', () => {
  gallerySwiper.slidePrev();
});

galleryRightArrow.addEventListener('click', () => {
  gallerySwiper.slideNext();
});
