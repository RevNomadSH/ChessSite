document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.blog__slider', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 24,
        freeMode: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            // Когда ширина экрана >= 1280px
            1280: {
                slidesPerView: 4,
                freeMode: false,
                centeredSlides: false
            },
            // Когда ширина экрана >= 1024px
            1024: {
                slidesPerView: 3,
                freeMode: false,
                centeredSlides: false
            },
            // Когда ширина экрана >= 768px
            768: {
                slidesPerView: 2,
                freeMode: false,
                centeredSlides: false
            }
        }
    });
});