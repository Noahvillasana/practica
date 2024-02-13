//MENU RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

//CLICK ABRIR
btnMenuOpen.addEventListener("click", function () {
    menuResponsive.classList.add("active");
    console.log("click abrir")
});

//CLICK CERRAR
btnMenuClose.addEventListener("click", function () {
    menuResponsive.classList.remove("active");
    console.log("click cerrar")
});

//CERRAR MENU CON ELEMENTOS DE ENLACE
enlaces.addEventListener("click", function () {
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove("active");
});

// shift + option + F
// indenta el codigo