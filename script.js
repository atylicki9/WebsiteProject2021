/* Aaron Tylicki
 * Scripts.js
 * 4/27/2021 */

function hamburger() {
                /* variables */
                var menu = document.getElementById("menu-links");
                var icon = document.getElementById("menu-icon");
                var nav = document.getElementsByName("header");

                /* if nav items are not showing on click of hamburger button, display menu items*/
                if (menu.style.display === "none") {
        menu.style.display = "block";
                    icon.style.display = "block";
                    nav.style.height = "500px";
                }
                /* if nav items are showing on click of hamburger button, display menu items*/
                else {
        menu.style.display = "none";
                    icon.style.display = "block";


                }


//Slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}