// Funzione per aggiungere nuovi log
function updateLog(message) {
    const logContainer = document.getElementById('log');
    
    // Crea un nuovo elemento div per il log
    const newLog = document.createElement('div');
    newLog.textContent = message;
    
    // Aggiungi il nuovo log all'inizio del contenitore
    logContainer.insertBefore(newLog, logContainer.firstChild);

    // Limita il numero di log che vengono mostrati (esempio: massimo 10 log)
    const logItems = logContainer.getElementsByTagName('div');
    if (logItems.length > 10) {
        logContainer.removeChild(logItems[logItems.length - 1]);
    }
}
