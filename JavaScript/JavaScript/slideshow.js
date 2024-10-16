
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block';
    document.body.classList.add('blur');
    document.querySelector('.sidebar').style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    document.body.classList.remove('blur');
    document.querySelector('.sidebar').style.display = 'none';
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
