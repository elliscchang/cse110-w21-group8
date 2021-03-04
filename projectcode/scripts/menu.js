let navbar = document.querySelector(".nav");
let hamburgerMenu = document.querySelector(".hamburgerMenu");
let menuButtons = document.querySelectorAll(".menuButton");

hamburgerMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
    navbar.classList.toggle("showNav");
    hamburgerMenu.classList.toggle("showClose");
};

menuButtons.forEach(
    menuButton => {
        menuButton.addEventListener("click", toggleMenu);
});


let aboutPage = document.getElementById("aboutPage");

function displayAbout() {
    aboutPage.style.display = "block";
    overlay.style.display = "block";
}

function aboutClose() {
    aboutPage.style.display = "none";
    overlay.style.display = "none";
}