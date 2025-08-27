// Variabili iniziali
let soulFragments = 0;
let focusRate = 1; // Numero di Soul Fragments guadagnati per focus

// Funzione per raccogliere "Soul Fragments"
const focusButton = document.getElementById('focusButton');
if (focusButton) {
    focusButton.addEventListener('click', () => {
        soulFragments += focusRate; // Incrementa le risorse
        document.getElementById('resourceCount').textContent = soulFragments; // Aggiorna il display
    });
} else {
    console.error('Il pulsante "Focus" non è stato trovato!');
}
