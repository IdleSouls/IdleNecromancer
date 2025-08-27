// mechanics.js: Gestisce la meccanica del gioco, come il sistema di gacha

// Funzione per il gacha
function performGacha() {
    const randomFragments = Math.floor(Math.random() * 4); // 0, 1, 2, o 3
    return randomFragments;
}
