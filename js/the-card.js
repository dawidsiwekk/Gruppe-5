"use strict";

// This function is making the location appear while hovering on fish
const fish1 = document.querySelector(".fish-box-1");
const fish2 = document.querySelector(".fish-box-2");

const area1 = document.getElementById("area-1");
const area2 = document.getElementById("area-2");

function setupHover(fish, area) {
    fish.addEventListener("mouseenter", () => {
        area.style.display = "block";
    });

    fish.addEventListener("mouseleave", () => {
    area.style.display = "none";
    });

}

setupHover(fish1, area1);
setupHover(fish2, area2);