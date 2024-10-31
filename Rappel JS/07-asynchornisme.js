const url_1 = "https://api.spacexdata.com/v3/missions";
const url_2 =  "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

let missions = [];

// Affichage des missions
function showMissions() {
    console.log( missions );
}



// Traitement asynchrone
// --

fetch(url_1)
    .then( response => response.json())
    .then( data => {
        missions = data;
        showWorks(); // Le tableau des missions est renseigné par "missions = data;"
    })
    .catch(err => console.log(err))
    
showMissions(); // Le tableaux des missions est vide, cette ligne s'execute AVANT la réponse de la requete



// Traitement Synchrone
// --

// Execute le fetch, mais ATTEND (await) la reponse de la requete avant affectation à la variable "response"
async function httpGet(url) {
    const response = await fetch(url); // Attend la donnée avant affetation
    const data = await response.json(); // Attend la fin de la convertion JSON avant affectation

    return data; // retourne la donnée
}

// Pour attendre une resultat d'une promesse (await)
// Il faut que "await" soit associé a "async"
// "async" est toujours le prefix d'une function
// Dans notre cas, async est le prefix d'une fonction immédiate
(async () => {
    missions = await httpGet(url_1);
    console.log(missions);

    // const result2 = await httpGet(url_2);
    // console.log(result2);
})();
