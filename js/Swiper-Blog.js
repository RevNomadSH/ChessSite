document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.blog__slider', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 24,
      navigation: {
          nextEl: '.swiper-button-next',
      },
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
  });
})