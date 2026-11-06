// Les joueurs et leur taille en centimètres
const players = {
    "Victor Wembanyama": 224,
    "LeBron James": 206,
    "Stephen Curry": 188,
    "Kevin Durant": 211,
    "Giannis Antetokounmpo": 211
};

// On récupère les éléments du HTML
const heightInput = document.getElementById("user-height");
const playerSelect = document.getElementById("player-select");
const compareButton = document.getElementById("compare-button");

const userHeightResult = document.getElementById("user-height-result");
const playerHeightResult = document.getElementById("player-height-result");
const playerName = document.getElementById("player-name");

// Quand on clique sur le bouton
compareButton.addEventListener("click", function () {

    // On récupère la taille entrée par l'utilisateur
    const userHeight = Number(heightInput.value);

    // On récupère le joueur sélectionné
    const selectedPlayer = playerSelect.value;

    // On récupère sa taille dans notre liste
    const selectedPlayerHeight = players[selectedPlayer];

    // On affiche les résultats
    userHeightResult.textContent = userHeight + " cm";
    playerHeightResult.textContent = selectedPlayerHeight + " cm";
    playerName.textContent = selectedPlayer;
});