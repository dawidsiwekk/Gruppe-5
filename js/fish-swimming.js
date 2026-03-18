"use strict";

document.addEventListener("DOMContentLoaded", () => {
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
    funFact: "Pincetfisken bruger sin lange snude til at nå byttet dybt inde i koralrevnerne!"
},
{
    className: "fish3",
     fishSpecies: "Klovnfisk",
    fishFamily: "Jomfrufisk",
    fishFood: "plankton, alger, orme",
    funFact: "Alle klovnfisk er født som drenge!"
},
{
    className: "fish4",
    fishSpecies: "Guldfisk",
    fishFamily: "Karpefisk",
    fishFood: "insektlarver, orme, alger og plantemateriale",
    funFact: "Guldfisk kan huske ting i op til 3 måneder – de har ikke kun 3 sekunders hukommelse!"
}
];

/* Venter med at køre JS-koden til hele DOM'en er indlæst */
document.addEventListener("DOMContentLoaded", () => {

    const fiskeFakta = document.getElementById("fiskeFakta")
    
    /* Funktion der viser toolTip med bil-info */

    function showFiskeFakta(html) {

        /* Tjekker om tool-tip elementet eksisterer i DOM'en */
        if (fiskeFakta) {
            /* Indsætter tekst i tool-tip elementet */
            fiskeFakta.innerHTML = html;
            /* Gør tooltip elementet synligt med CSS-klassen is-visible */
            fiskeFakta.classList.add("isVisible");

        }
    }
    /* Gennemløber alle bil-objekter i carinfo JS-Datastrukturen */
    fishInfo.forEach((fish) => {
        /* Finder alle DOM-elementer med den aktuelle bil class attribute navn */
        document.querySelectorAll("." + fish.className).forEach((elem) =>{
            elem.addEventListener("mouseenter", () => {
                /* Oprette en HTML-blok indeholdende bilens detaljer */
                const fishDetails = `
                <div class="fakta-navn">${fish.fishSpecies}</div>
                Familie: ${fish.fishFamily}<br>
                Fisken spiser ${fish.fishFood}<br>
                <span style="font-weight: 600;">&#9733; ${fish.funFact}</span>
                `;
                showFiskeFakta(fishDetails)
            });
            elem.addEventListener("mouseleave", () => {
                if (fiskeFakta) {
                    fiskeFakta.classList.remove("isVisible");
                }
            });
        });
    });

    /* Hente Alle DOM-elementer */

    const getRedCar = document.querySelector("#redcar");
    const getBlueCar = document.querySelector("#blueCar");
    const getPoliceCar = document.querySelector("#policeCar");

})
})