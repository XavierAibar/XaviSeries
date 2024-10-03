function checkMenu() {
  var menu = document.getElementById("menu");
  var logoContainer = document.querySelector("nav.izquierda");

  if (window.innerWidth <= 1300) {
    // Mostrar menú móvil y ocultar menú de logos
    menu.style.display = "block";
    logoContainer.classList.add("hidden");
  } else {
    // Mostrar menú de logos y ocultar menú móvil
    menu.style.display = "none";
    logoContainer.classList.remove("hidden");
  }
}

window.addEventListener("resize", checkMenu);
document.addEventListener("DOMContentLoaded", function() {
  checkMenu();
});