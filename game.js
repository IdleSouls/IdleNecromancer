// Variabile globale per tenere traccia dei Soul Fragments
let soulFragments = 0;

// Funzione per generare un numero casuale nel range 0-3
function generateFragments() {
    // Gacha: genera un numero casuale tra 0 e 3
    const fragmentsEarned = Math.floor(Math.random() * 4);  // 0, 1, 2, o 3
    soulFragments += fragmentsEarned;  // Aggiungi i fragments ottenuti al totale

    // Aggiorna il conteggio delle risorse nel DOM
    document.getElementById('resourceCount').textContent = soulFragments;
    
    // Aggiungi un messaggio per informare il giocatore di quanto ha ottenuto
    alert(`Hai ottenuto ${fragmentsEarned} Soul Fragments!`);
}

// Aggiungi l'evento al pulsante "Focus"
document.getElementById('focusButton').addEventListener('click', generateFragments);
