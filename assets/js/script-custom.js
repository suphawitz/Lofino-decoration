// Header change background images auto
document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "assets/images/decoration-01.jpg", 
        "assets/images/decoration-02.jpg", 
        "assets/images/decoration-03.jpg", 
        "assets/images/decoration-04.jpg"
    ];

    var currentIndex = 0;
    var headerSlide = document.querySelector('.lf-header-slide');
    var duration = 2000;
    var fade = 750;

    function changeBackground() {
        if (headerSlide) {
            headerSlide.style.backgroundImage = 'url(' + images[currentIndex] + ')';
            headerSlide.style.transition = 'background-image ' + fade + 'ms ease-in-out';

            currentIndex = (currentIndex + 1) % images.length;
        }
    }

    setInterval(changeBackground, duration);
    changeBackground(); // Initial call to set the first background
});


// Create class Active nav link on scroll Active menu
let Kcsections = document.querySelectorAll('.lf-section');
let KcnavLink = document.querySelectorAll('.lf-nav-menu a');

window.onscroll = () => {
  Kcsections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 180;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    // console.log(id);

    if (top >= offset && top < offset + height) {
      KcnavLink.forEach(links => {
        links.classList.remove('lf-nav-menu-active');
        document.querySelector('.lf-nav-menu a[href*=' + id + ']') .classList.add('lf-nav-menu-active');
      });
    };
  });
};


// jQuery
$(document).ready(function(){

    // Slider Section 03 | Reviews
    $('.lf-sec03-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1084,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 774,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
  
    // $('.es-gallery-slider .slick-prev').html('<i class="fa-solid fa-angle-left"></i>');
    // $('.es-gallery-slider .slick-next').html('<i class="fa-solid fa-angle-right"></i>');
  
  });