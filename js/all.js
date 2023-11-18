// swiper
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

const swiper = new Swiper('.mySwiper', {
  allowTouchMove: false,
  slidesPerView: 'auto',
  speed: 2000,
  spaceBetween: 12,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

const swiperNews = new Swiper('.mySwiperNews', {
  slidesPerView: 2,
  spaceBetween: 24,

  breakpoints: {
    1400: {
      slidesPerView: 4
    }
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 倒數計時器
const endTime = new Date('2024/1/13 8:00');

function remainTime() {
  const nowTime    = new Date();
  const offsetTime = (endTime - nowTime) / 1000; // 以秒為單位
  const sec        = parseInt(offsetTime % 60);
  const min        = parseInt((offsetTime / 60) % 60);
  const hour       = parseInt((offsetTime / 60 / 60) % 24);
  const day        = parseInt(offsetTime / 60 / 60 / 24);
  const times      = [day, hour, min, sec];

  const countdown  = document.querySelectorAll('.js-countdown');
  countdown.forEach((item, index) => {
    item.textContent = times[index];
  });
}

const interval = setInterval(() => {
  const time = endTime - new Date();
  if (time < 0) {
    clearInterval(interval);
  } else {
    remainTime();
  }
}, 1000);

// 表單驗證
(function () {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()