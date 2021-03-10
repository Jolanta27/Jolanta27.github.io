window.addEventListener('scroll', function() {
    const logoImage = document.getElementById("logo");

    if(window.pageYOffset > 0 ) {
        logoImage.style.height = "64px";
    } else {
        logoImage.style.height = "84px";
    }
})