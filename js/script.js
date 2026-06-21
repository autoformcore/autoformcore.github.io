const carousel = document.querySelector(".approach-carousel");

const leftButton = document.querySelector(".carousel-button-left");
const rightButton = document.querySelector(".carousel-button-right");

const card = document.querySelector(".carousel-card");

const gap = parseFloat(getComputedStyle(carousel).gap);

const scrollAmount = card.offsetWidth + gap;

rightButton.addEventListener("click", () => {

    carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });

});

leftButton.addEventListener("click", () => {

    carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });

});