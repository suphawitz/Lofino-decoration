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

    // setInterval(changeBackground, duration);
    changeBackground(); // Initial call to set the first background
});