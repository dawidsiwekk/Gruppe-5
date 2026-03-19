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
},
{
    className: "fish5",
    fishSpecies: "Krabbe",
    fishFamily: "Krebsdyr",
    fishFood: "alger, orme, smådyr og ådsler",
    funFact: "Krabber kan gå i alle fire retninger, men foretrækker at gå sidelæns!"
}
];

document.addEventListener("DOMContentLoaded", () => {

    const fiskeFakta = document.getElementById("fiskeFakta")


    function showFiskeFakta(html) {

        if (fiskeFakta) {
            fiskeFakta.innerHTML = html;
            fiskeFakta.classList.add("isVisible");

        }
    }
    fishInfo.forEach((fish) => {
        document.querySelectorAll("." + fish.className).forEach((elem) =>{
            elem.addEventListener("mouseenter", () => {
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
})