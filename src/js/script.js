window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

$(document).ready(function(){
    $('.portfolio-carousel').slick({
        dots: false,
        infinite: true,
        speed: 1300,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i></div>',
        responsive: [
            {
              breakpoint: 800,
              settings: {
                arrows: false,
                infinite: true,
                dots: false
                }
            },
            {
                breakpoint: 450,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});

new WOW().init();