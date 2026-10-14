"use strict";


const fish = [
      {
        id: "kardinalFisk",
        species: "HEJ, JEG ER EN BANGGAI-KARDINALFISK!",
        habitat: "Jeg kommer fra Banggai-øerne ved Indonesien.",
        size: "Jeg kan blive op til 8 cm lang.",
        diet: "Jeg spiser plankton.",
        funFact: "Vidste du, at Banggai-kardinalfisken er en af de få fisk, hvor hannen ruger æggene i munden?",
        photo: "img/irlbanggaikardinalfisk.png" 
    },

      {
        id: "gulKirurgfisk",
        species: "HEJ, JEG ER EN GUL KIRURGFISK!",
        habitat: "Jeg kommer fra Stillehavet.",
        size: "Jeg kan blive op til 20 cm lang.",
        diet: "Jeg spiser plankton.",
        funFact: "Vidste du, at gul kirurgfisk kan bruge sin skarpe “skalpel” ved haleroden som forsvarsvåben?",
        photo: "img/irlgulkirurgfisk.png"
    },

      {
        id: "raevFjaes",
        species: "HEJ, JEG ER EN RÆVEFJÆS!",
        habitat: "Jeg kommer fra Det Indiske Ocean og  Stillehavet.",
        size: "Jeg kan blive op til 25 cm lang.",
        diet: "Jeg spiser alger og plankton.",
        funFact: "Vidste du, at rævefjæs har en smart forsvarsmekanisme? Den har giftige pigge på finnerne!",
        photo: "img/irlraevefjaes.png"
    },

      {
        id: "gulfinnetKirurgfisk",
        species: "HEJ, JEG ER EN GULFINNET KIRURGFISK!",
        habitat: "Jeg kommer fra Det Indiske Ocean og  Stillehavet.",
        size: "Jeg kan blive op til 36 cm lang.",
        diet: "Jeg spiser plankton.",
        funFact: "Vidste du, at gulfinnet kirurgfisk kan skifte farve afhængigt af humør og situation?",
        photo: "img/irlgulfinnetkirurgfisk.png"
    },

      {
        id: "nemo",
        species: "HEJ, JEG ER EN KLOVNFISK!",
        habitat: "Jeg kommer fra Det Indiske Ocean, Stillehavet og Det Røde Hav.",
        size: "Jeg kan blive op til 11 cm lang.",
        diet: "Jeg spiser alger og smådyr.",
        funFact: "Vidste du, at klovfisk (også kendt som Nemo fra filmen “Find Nemo”) kan skifte køn? Det gør de hvis der mangler en ynglehun i flokken.",
        photo: "img/irlnemo.png"
    },

     {
        id: "paletKirurgFisk",
        species: "HEJ, JEG ER EN PALETKIRURGFISK!",
        habitat: "Jeg kommer fra Det Indiske Ocean og Stillehavet.",
        size: "Jeg kan blive op til 15 cm lang.",
        diet: "Jeg spiser plankton.",
        funFact: "Vidste du, at paletkirurgfisken (også kendt som Dory fra filmen “Find Nemo”) har en giftig pig ved haleroden, som den bruger til at forsvare sig med?",
        photo: "img/irlpaletkirurgfisk.png"
    },

      {
        id: "chromis",
        species: "HEJ, JEG ER EN CHROMIS!",
        habitat: "Jeg kommer fra Det Indiske Ocean, Stillehavet og Det Røde Hav.",
        size: "Jeg kan blive op til 10 cm lang.",
        diet: "Jeg spiser alger og plankton.",
        funFact: "Vidste du, at chromis kan leve i store stimer på flere hundrede fisk? De bevæger sig synkront, hvilket gør det svært for rovfisk at udpege én bestemt fisk.",
        photo: "img/irlchromis.png"
    },

      {
        id: "kugleFisk",
        species: "HEJ, JEG ER EN KUGLEFISK!",
        habitat: "Jeg kommer fra koralrev ved Australiens østkyst.",
        size: "Jeg kan blive 43 cm lang.",
        diet: "Jeg spiser muslinger, krabber og snegle.",
        funFact: "Vidste du at når jeg bliver bange, puster jeg mig op til en bold?",
        photo: "img/irlkuglefisk.png"
    },

]

fish.forEach(function(fish) {
const getFishElem= document.getElementById(fish.id);

getFishElem.addEventListener("click", function(){
  const getRealFish=document.getElementById("irl"+fish.id);
  getRealFish.style.display="block";
})

})


function onKardinalFisk() {
  document.getElementById("overlayKardinalFisk").style.display = "block";
}
function offKardinalFisk() {
  document.getElementById("overlayKardinalFisk").style.display = "none";
}


