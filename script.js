function setCopyright() {
    const footer = document.getElementById("footer");
    const currentYear = new Date().getFullYear();
    const startYear = 2022;
    const name = "Nicolò Taormina";
    footer.textContent = "\u00A9 " + startYear + "-" + currentYear + " " + name;
}