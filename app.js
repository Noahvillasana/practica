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

//SLIDER DE PRODUCTOS
var contenedor = document.querySelector('.slider'),
btnIzquierdo = document.getElementById("btn-izquierda"),
btnDerecho = document.getElementById("btn-derecha");

//EVENTO PARA EL BOTON DERECHO
btnDerecho.addEventListener("click", function(){
contenedor.scrollLeft += contenedor.offsetWidth;
});
btnIzquierdo.addEventListener("click", function(){
    contenedor.scrollLeft -= contenedor.offsetWidth;
    });