// change of size on logo img
window.addEventListener('scroll', function() {
    const logoImage = document.getElementById("logo");

    if(window.pageYOffset > 0 ) {
        logoImage.style.height = "64px";
    } else {
        logoImage.style.height = "84px";
    }
});

// Add navbar button on mobile version 
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

// Create a scroll back to top
let myButton = document.getElementById('myBtn');

window.onscroll = function() {
    scrollFunction();
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
}

