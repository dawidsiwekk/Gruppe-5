"use strict";

// This function is making the location appear while hovering on fish
const fish1 = document.querySelector(".fish-box-1");
const fish2 = document.querySelector(".fish-box-2");
const fish3 = document.querySelector(".fish-box-3");
const fish4 = document.querySelector(".fish-box-4");

const area1 = document.getElementById("area-1");
const area2 = document.getElementById("area-2");
const area3 = document.getElementById("area-3");
const area4 = document.getElementById("area-4");

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
setupHover(fish3, area3);
setupHover(fish4, area4);