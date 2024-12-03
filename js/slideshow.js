
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

function validateForm() {

    document.getElementById("fName-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("query-error").innerText = "";

    let fName = document.getElementById("fName").value.trim();
    let email = document.getElementById("email").value.trim();
    let query = document.getElementById("query").value.trim();

    let isValid = true;

    if (fName === "") {
        document.getElementById("fName-error").innerText = "First name is a required field";
        isValid = false;
    }
    
    let emailRegex = /^[^s@]+[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("email-error").innerText = "Email is a required field";
        isValid = false;
    }
    else if (!emailRegex.test(email)) {
        document.getElementById("email-error").innerText = "Please enter a valid email address";
        isValid = false;
    }

    if (query === "") {
        document.getElementById("query-error").innerText = "Query is a required field";
        isValid = false;
    }

    return isValid;
}