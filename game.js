// Variabile globale per il conteggio delle risorse
let soulFragments = 0;

// Selezione dell'elemento che mostra il conteggio delle risorse
const resourceCountElement = document.getElementById('resourceCount');

// Selezione dell'elemento dell'immagine
const soulFragmentImage = document.getElementById('soulFragmentImage');

// Funzione che aggiorna il conteggio delle risorse nella pagina
function updateResourceCount() {
    resourceCountElement.textContent = soulFragments;
}

// Funzione per aggiungere il risultato al log
function addToLog(message) {
    const logContainer = document.getElementById('logContainer');
    
    // Crea un nuovo elemento div per il log
    const logEntry = document.createElement('div');
    logEntry.classList.add('log-entry');
    logEntry.textContent = message;
    
    // Aggiungi il nuovo messaggio al **top** del log (invertere ordine)
    logContainer.insertBefore(logEntry, logContainer.firstChild);
}

// Funzione per cambiare l'immagine in base ai Soul Fragments
function updateFragmentImage() {
    if (soulFragments === 0) {
        soulFragmentImage.src = 'path/to/empty_fragment.png'; // Immagine per 0 Soul Fragments
    } else if (soulFragments <= 3) {
        soulFragmentImage.src = 'path/to/low_fragment.png'; // Immagine per Soul Fragments tra 1 e 3
    } else {
        soulFragmentImage.src = 'path/to/high_fragment.png'; // Immagine per più di 3 Soul Fragments
    }
}

// Funzione per gestire l'azione del pulsante "Focus" (meccanica di gacha)
function focusButtonClicked() {
    // Genera un numero casuale di Soul Fragments tra 0 e 3
    const randomFragments = Math.floor(Math.random() * 4); // 0, 1, 2, o 3

    // Aggiungi i Soul Fragments generati al totale
    soulFragments += randomFragments;

    // Aggiorna il conteggio delle risorse sullo schermo
    updateResourceCount();

    // Cambia l'immagine in base al numero di Soul Fragments
    updateFragmentImage();

    // Crea il messaggio del log
    const message = `Hai ottenuto ${randomFragments} Soul Fragments! Totale: ${soulFragments}`;

    // Aggiungi il messaggio al log
    addToLog(message);
}

// Aggiungi l'evento click al pulsante "Focus"
const focusButton = document.getElementById('focusButton');
focusButton.addEventListener('click', focusButtonClicked);

// Inizializza il conteggio delle risorse (anche se è 0 all'inizio)
updateResourceCount();
