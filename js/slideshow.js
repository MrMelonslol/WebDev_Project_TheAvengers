
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    document.body.classList.remove('blur');
}

function lightDark() {
    document.body.classList.toggle("dark-mode");
}

function lightDark() {
    let isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkmode1", isDark ? "enabled" : "disabled");
}

document.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem("darkmode1") == "enabled") {
        document.body.classList.add("dark-mode");
    }
});

let slideIndex = 1;
let autoScrollTimeout;

showSlides(slideIndex);
autoScrollSlides();

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoScrollSlides() {
    autoScrollTimeout = setTimeout(() => {
        slideIndex++;
        showSlides(slideIndex);
        autoScrollSlides();
    }, 5000);
}

function plusSlides(n) {
    clearTimeout(autoScrollTimeout);
    showSlides(slideIndex += n);
    autoScrollSlides();
}

function currentSlide(n) {
    clearTimeout(autoScrollTimeout);
    showSlides(slideIndex = n);
    autoScrollSlides();
}

var countDownDate = new Date("Sep 1, 2025 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";}, 1000);

window.onload = function() {
    if (localStorage.getItem('cookieConsent') === 'accepted' || localStorage.getItem('cookieConsent') === 'declined') {
        document.getElementById('cookieAlert').style.display = 'none';
    }
};

function hideAlert(choice) {
    localStorage.setItem('cookieConsent', choice);
    document.getElementById('cookieAlert').style.display = 'none';
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(message) {
        message.style.display = "none";
    });
    
});