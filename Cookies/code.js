document.addEventListener("DOMContentLoaded", () => {
  const cookies = document.querySelector(".cookies");
  const seeCookies = document.querySelector(".seeCookies");
  const container = document.querySelector(".container");
  const btnAccept = document.querySelector(".btn");

  // Si el usuario ya aceptó las cookies, ocultamos el banner ANTES de mostrar la página
  if (localStorage.getItem("accept") === "true") {
    cookies.style.display = "none";
  } else {
    cookies.style.display = "block"; // Mostrar solo si no ha aceptado
  }

  // Ocultar el banner al hacer clic en el fondo oscuro
  cookies.addEventListener("click", () => {
    cookies.style.display = "none";
  });

  // Mostrar el banner al hacer clic en "ver cookies"
  seeCookies.addEventListener("click", () => {
    cookies.style.display = "block";
  });

  // Evitar que el clic en el container cierre el banner
  container.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // Aceptar cookies y guardarlo en localStorage
  btnAccept.addEventListener("click", () => {
    localStorage.setItem("accept", "true"); // Guardamos el estado
    cookies.style.display = "none"; // Ocultamos el banner
    console.log("Cookies accepted!");
  });
});
