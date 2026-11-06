// Informations sur les joueurs
const players = {
    wembanyama: {
        name: "Victor Wembanyama",
        height: 224
    },
    shaq: {
        name: "Shaquille O'Neal",
        height: 216
    },
    lebron: {
        name: "LeBron James",
        height: 206
    },
    curry: {
        name: "Stephen Curry",
        height: 188
    },
    bogues: {
        name: "Muggsy Bogues",
        height: 160
    },
    bol: {
        name: "Manute Bol",
        height: 231
    }
};

// Récupération des éléments HTML
const userHeightInput = document.getElementById("user-height");
const playerSelect = document.getElementById("player-select");
const compareButton = document.getElementById("compare-button");

const userName = document.getElementById("user-name");
const userHeightResult = document.getElementById("user-height-result");

const playerName = document.getElementById("player-name");
const playerHeightResult = document.getElementById("player-height-result");

const userPerson = document.querySelector(".user-person");
const playerPerson = document.querySelector(".player-person");


// Fonction pour comparer
function compareHeights() {

    // Récupère la taille de l'utilisateur
    const userHeight = Number(userHeightInput.value);

    // Récupère le joueur sélectionné
    const selectedPlayer = players[playerSelect.value];

    // Vérification
    if (!userHeight || !selectedPlayer) {
        alert("Veuillez entrer une taille et choisir un joueur.");
        return;
    }

    // Affichage des noms et tailles
    userName.textContent = "TOI";
    userHeightResult.textContent = userHeight + " cm";

    playerName.textContent = selectedPlayer.name;
    playerHeightResult.textContent = selectedPlayer.height + " cm";


    // Calcul de la taille visuelle
    // 231 cm = environ 500 pixels maximum
    const scale = 2;

    const userVisualHeight = userHeight * scale;
    const playerVisualHeight = selectedPlayer.height * scale;

    // Changement de la taille des bonhommes
    userPerson.style.height = userVisualHeight + "px";
    playerPerson.style.height = playerVisualHeight + "px";
}


// Lorsque l'on clique sur COMPARER
compareButton.addEventListener("click", compareHeights);


// Lance une première comparaison au chargement de la page
compareHeights();