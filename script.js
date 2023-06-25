// Funzione per il cambio di tema
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    toggleDarkmodeIcons();
}

// Funzione per verificare il tema corrente e nascondere/lasciare visibili le icone appropriate
function toggleDarkmodeIcons() {
    const body = document.body;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    if (body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    } else {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    }
}

// Funzione per impostare il tema iniziale
function setInitialTheme() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode) {
        document.body.classList.add('dark-mode');
    }
    toggleDarkmodeIcons();
}

function setCopyright() {
    const footer = document.getElementById('footer');
    const currentYear = new Date().getFullYear();
    const startYear = 2022;
    const name = 'Nicolò Taormina';
    footer.textContent = `\u00A9 ${startYear}-${currentYear} ${name}`;
}

// Evento "DOMContentLoaded"
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle-button');

    setInitialTheme(); // Imposta il tema iniziale

    darkModeToggle.addEventListener('click', toggleTheme);
});