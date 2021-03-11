window.addEventListener('scroll', function() {
    const logoImage = document.getElementById("logo");

    if(window.pageYOffset > 0 ) {
        logoImage.style.height = "64px";
    } else {
        logoImage.style.height = "84px";
    }
});

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});