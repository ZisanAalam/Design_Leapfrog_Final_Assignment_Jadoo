const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".navbar-items");
const navbar = document.querySelector(".navbar");


hamburger.addEventListener('click',() => {
    navItems.classList.toggle('show');
    navbar.classList.toggle('bg-color');
});