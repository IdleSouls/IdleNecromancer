// game.js: Gestisce la logica centrale del gioco

let soulFragments = 0;

// Funzione per aggiornare il conteggio delle risorse
function updateResourceCount() {
    const resourceCountElement = document.getElementById('resourceCount');
    resourceCountElement.textContent = soulFragments;
}

// Funzione per gestire il "Focus" (gacha)
function focusButtonClicked() {
    const randomFragments = generateRandomFragments();
    soulFragments += randomFragments;

    // Aggiorna il conteggio risorse e la UI
    updateResourceCount();

    // Aggiungi al log
    addToLog(`Hai ottenuto ${randomFragments} Soul Fragments! Totale: ${soulFragments}`);
}

// Funzione per generare un numero casuale di Soul Fragments
function generateRandomFragments() {
    return Math.floor(Math.random() * 4); // 0, 1, 2, o 3
}

// Aggiungi l'evento click al pulsante "Focus"
const focusButton = document.getElementById('focusButton');
focusButton.addEventListener('click', focusButtonClicked);

// Inizializza il conteggio delle risorse
updateResourceCount();
