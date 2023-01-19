window.onload = function () {
    getCurrentYear();
    
    getCurrentYear = function () {
        const year = new Date().getFullYear();
        document.getElementById("year").innerHTML = year;
    }
}