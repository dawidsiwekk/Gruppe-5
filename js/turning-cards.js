"use strict";

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", function () {
        card.classList.toggle("flipped");
    });
});