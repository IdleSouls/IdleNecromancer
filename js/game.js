// Variabile globale per il conteggio delle risorse
let soulFragments = 0;

// Selezione dell'elemento che mostra il conteggio delle risorse
const resourceCountElement = document.getElementById('resourceCount');

// Funzione che aggiorna il conteggio delle risorse nella pagina
function updateResourceCount() {
    resourceCountElement.textContent = 'Soul Fragments: ' + soulFragments;
}

// Funzione per gestire l'azione del pulsante "Focus" (meccanica di gacha)
function focusButtonClicked() {
    // Genera un numero casuale di Soul Fragments tra 0 e 3
    const randomFragments = Math.floor(Math.random() * 4); // 0, 1, 2, o 3

    // Aggiungi i Soul Fragments generati al totale
    soulFragments += randomFragments;

    // Aggiorna il conteggio delle risorse sullo schermo
    updateResourceCount();

    // Aggiungi un nuovo messaggio al log
    updateLog(`Hai ottenuto ${randomFragments} Soul Fragments! Totale: ${soulFragments}`);
}

// Aggiungi l'evento click al pulsante "Focus"
const focusButton = document.getElementById('focusButton');
focusButton.addEventListener('click', focusButtonClicked);

// Inizializza il conteggio delle risorse (anche se è 0 all'inizio)
updateResourceCount();
