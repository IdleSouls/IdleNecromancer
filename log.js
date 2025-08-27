// log.js: Gestisce l'aggiunta di voci al log

function addToLog(message) {
    const logContainer = document.getElementById('logContainer');
    
    // Crea un nuovo elemento div per il log
    const logEntry = document.createElement('div');
    logEntry.classList.add('log-entry');
    logEntry.textContent = message;

    // Aggiungi il nuovo messaggio al top del log (inverte ordine)
    logContainer.insertBefore(logEntry, logContainer.firstChild);
}
