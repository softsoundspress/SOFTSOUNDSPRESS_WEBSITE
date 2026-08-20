const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {

    mainNav.classList.toggle("nav-open");

    const isOpen = mainNav.classList.contains("nav-open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.classList.toggle("active");

});