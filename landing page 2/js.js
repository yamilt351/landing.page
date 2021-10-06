
let ubicacionPrincipal = window.pageYOffset;
AOS.init();
window.addEventListener("scroll", function () {
  let desplazamientActual = window.pageYOffset;
  if (ubicacionPrincipal >= desplazamientActual) {
    this.document.getElementsByTagName("nav")[0].style.top = "0px"
  } else {
    this.document.getElementsByTagName("nav")[0].style.top = "-100px"
  } ubicacionPrincipal = desplazamientActual;
})
//menu
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function () {
  enlacesHeader.classList.toggle("menuDos")
})
