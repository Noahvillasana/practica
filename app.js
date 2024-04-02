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

//EVENTO PARA EL BOTON IZQUIERDO
btnIzquierdo.addEventListener("click", function(){
contenedor.scrollLeft -= contenedor.offsetWidth;
});


//VALIDACION DE FORMULARIO
var formulario = document.getElementById("formulario");
function validar(e){
    var inputNombre = document.getElementById("nombre"),
        inputEmail = document.getElementById("email"),
        inputComents = document.getElementById("comentarios"),
        alertSuccess = document.getElementById("alertSuccess"),
        alertError = document.getElementById("alertError");

        if (inputNombre.value == 0 || inputEmail.value == 0 || inputComents.value == 0) {
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");

            setTimeout(function(){
                alertError.classList.remove("show");
                alertError.classList.add("hide");
            }, 2000);

        } else{
            e.preventDefault();
            alertSuccess.classList.remove("hide");
            alertSuccess.classList.add("show");

            setTimeout(function(){
                alertSuccess.classList.remove("show");
                alertSuccess.classList.add("hide");
            }, 2000);

            inputNombre.value = "";
            inputEmail.value = "";
            inputComents.value = "";
        }

    }

//EVENTOS DE FORMULARIO
formulario.addEventListener("submit", validar);

//BOTON SCOLL TOP
var btnTop = document.getElementById("btn-top"),
logo = document.getElementById("logo");

//DETECTAMOS SCROLL EN NUESTRA PAGINA WEB
window.addEventListener("scroll", function(){
var scroll = document.documentElement.scrollTop,
fullSize = document.documentElement.offsetHeight,
sizeVp = document.documentElement.clientHeight;

if (scroll > 100){
btnTop.classList.add("show");

}else{
    btnTop.classList.remove("show");
}

//MODIFICAR ELEMENTO CUANDO LLEGUE A FINAL DE PAGINA
if(fullSize == (scroll + sizeVp)){
    btnTop.classList.add("scrollFinal");
}else{
    btnTop.classList.remove("scrollFinal");
}
});

//DETECTAMOS EVENTO CLICL EN EL BOTON
btnTop.addEventListener("click", function(){
    window.scrollTo(0,0);
});

//DETECTAR EVENTO CLICK EN LOGO
logo.addEventListener("click", function(){
    window.scrollTo(0,0);
});
