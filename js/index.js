document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    hamburger.addEventListener("click", function() {
        hamburgerMenu.classList.toggle("active");
    });
});