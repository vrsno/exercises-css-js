const btns = document.querySelectorAll(".btn");
const responses = document.querySelectorAll(".response");

// Ocultar todas las respuestas excepto la primera
responses.forEach((response, index) => {
  response.style.display = index === 0 ? "block" : "none";
});

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const isVisible = responses[index].style.display === "block";

    // Ocultar todas las respuestas
    responses.forEach((res) => (res.style.display = "none"));

    // Si la respuesta no estaba visible, mostrarla; si ya estaba visible, dejarla oculta
    responses[index].style.display = isVisible ? "none" : "block";
  });
});
