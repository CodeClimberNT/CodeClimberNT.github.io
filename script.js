document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle-button');
    const body = document.body;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // Verifica il tema corrente e nasconde/lascia visibile l'icona appropriata
    function toggleIcons() {
        if (body.classList.contains('dark-mode')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        } else {
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
        }
    }

    toggleIcons(); // Imposta le icone iniziali
    setCopyright(); // Imposta il copyright
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        toggleIcons(); // Aggiorna le icone dopo il cambio di tema
    });
});

function setCopyright() {
    const footer = document.getElementById("footer");
    const currentYear = new Date().getFullYear();
    const startYear = 2022;
    const name = "Nicolò Taormina";
    footer.textContent = "\u00A9 " + startYear + "-" + currentYear + " " + name;
}

