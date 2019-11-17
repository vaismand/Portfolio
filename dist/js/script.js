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
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
              breakpoint: 780,
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

function myFunction() {
document.getElementById("dropMenu").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.service_button')) {
    var dropdowns = document.getElementsByClassName("service_descr");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
  }
};

new WOW().init();