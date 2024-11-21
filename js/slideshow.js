
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

    var buttons = document.querySelectorAll(".lightDarkButton");

    buttons.forEach(button => {
        if (button.innerHTML.includes('id="light"')) {
            button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="dark" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`;
        } else {
            button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="light" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>`;
        }
    });
}
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