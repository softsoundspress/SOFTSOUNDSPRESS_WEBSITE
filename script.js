const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {

    mainNav.classList.toggle("nav-open");

    const isOpen = mainNav.classList.contains("nav-open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.classList.toggle("active");

});

// ========================================
// SCROLL REVEAL
// ========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function(element) {
    revealObserver.observe(element);
});


// ========================================
// INFORMATION MODALS
// ========================================

const modalButtons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".info-modal");
const closeButtons = document.querySelectorAll(".modal-close");


modalButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const modalId = button.getAttribute("data-modal");
        const modal = document.getElementById(modalId);

        if (modal) {
            modal.classList.add("open");
        }

    });

});


closeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        button.closest(".info-modal").classList.remove("open");

    });

});


modals.forEach(function(modal) {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {
            modal.classList.remove("open");
        }

    });

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        modals.forEach(function(modal) {
            modal.classList.remove("open");
        });

    }

});