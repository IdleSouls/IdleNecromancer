// ui.js: Gestisce gli aggiornamenti della UI

// Funzione per aggiornare l'immagine dei Soul Fragments
function updateFragmentImage(soulFragments) {
    const soulFragmentImage = document.getElementById('soulFragmentImage');

    if (soulFragments === 0) {
        soulFragmentImage.src = 'path/to/empty_fragment.png';
    } else if (soulFragments <= 3) {
        soulFragmentImage.src = 'path/to/low_fragment.png';
    } else {
        soulFragmentImage.src = 'path/to/high_fragment.png';
    }
}
