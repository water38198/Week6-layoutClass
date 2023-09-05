import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
const swiper = new Swiper(".mySwiper", {
  modules:[Autoplay],
  speed: 10000,
  slidePerView:"auto",
  loop: true,
  autoplay:{
    delay: 0,
    disableOnInteraction: true,
  },
  spaceBetween: 32,
  
});

import './assets/scss/all.scss';

