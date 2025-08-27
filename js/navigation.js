document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".navButton");
    const mainContent = document.getElementById("mainContent");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const section = button.dataset.section;
            loadSection(section);
        });
    });

    function loadSection(section) {
        fetch(`pages/${section}.html`)
            .then(response => response.text())
            .then(html => {
                mainContent.innerHTML = html;
            })
            .catch(error => {
                mainContent.innerHTML = "<p>Error loading section.</p>";
                console.error("Error loading section:", error);
            });
    }

    // Carica la sezione iniziale (Meditation)
    loadSection("meditation");
});
