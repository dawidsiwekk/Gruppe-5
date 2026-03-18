"use strict";

const fishInfo = [
{
    className: "fish1",
    fishSpecies: "Søhest",
    fishFamily: "Nålefisk",
    fishFood: "smådyr, plankton og små krebsdyr",
    funFact: "Søhesten er den langsomste fisk i verden!"
},
{
    className: "fish2",
    fishSpecies: "Pincetfisk",
    fishFamily: "Sommerfuglefisk",
    fishFood: "smådyr, glasroser",
    funFact: "Søhesten er den langsomste fisk i verden!"
},
{
    className: "fish3",
    fishSpecies: "Klovnfisk",
    fishFamily: "Jomfrufisk",
    fishFood: "plankton, alger, orme",
    funFact: "Alle klovnfisk er født som drenge!"
}
];

/* Venter med at køre JS-koden til hele DOM'en er indlæst */
document.addEventListener("DOMContentLoaded", () => {

    const fiskeFakta = document.getElementById("fiske-fakta") 
    
    /* Funktion der viser toolTip med bil-info */

    function showFiskeFakta(html) {

        /* Tjekker om tool-tip elementet eksisterer i DOM'en */
        if (fiskeFakta) {
            /* Indsætter tekst i tool-tip elementet */
            fiskeFakta.innerHTML = html;
            /* Gør tooltip elementet synligt med CSS-klassen is-visible */
            fiskeFakta.classList.add("is-visible");
            /* Sætte en timer til at skjule tool-tip elementet efter 8 sek */
            setTimeout(function(){
                /* Fjerner CSS-klassen is-visible efter 8 sek */
                fiskeFakta.classList.remove("is-visible");
                },8000);

        }
    }
    /* Gennemløber alle bil-objekter i carinfo JS-Datastrukturen */
    fishInfo.forEach((fish) => {
        /* Finder alle DOM-elementer med den aktuelle bil class attribute navn */
        document.querySelectorAll("." + fish.className).forEach((elem) =>{
            elem.addEventListener("click", () => {
                /* Oprette en HTML-blok indeholdende bilens detaljer */
                const fishDetails = `
                <strong>Art: ${fish.fishSpecies}</strong><br>
                Familie: ${fish.fishFamily}<br>
                Fisken spiser ${fish.fishFood}<br>
                FISKEFAKTA: ${fish.funFact}<br>
                `;
                showFiskeFakta(fishDetails)
            });
        });
    });

    /* Hente Alle DOM-elementer */

    const getRedCar = document.querySelector("#redcar");
    const getBlueCar = document.querySelector("#blueCar");
    const getPoliceCar = document.querySelector("#policeCar");

})