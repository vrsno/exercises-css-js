const card = document.querySelector(".card");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

let data = [];
let currentIndex = 0; // Índice de la pregunta actual

const fetchQ = async () => {
  try {
    const response = await fetch("./question.json");
    const responseJson = await response.json();
    data = responseJson.preguntas;
    console.log(data.length);

    // Mostrar la primera pregunta si hay datos
    if (data.length > 0) {
      renderQuestion();
    } else {
      card.innerHTML = `<p>No se encontraron preguntas.</p>`;
    }
  } catch (e) {
    console.error("Error al obtener los datos:", e);
  }
};

// Función para mostrar la pregunta actual
const renderQuestion = () => {
  const selectedQuestion = data[currentIndex];

  card.innerHTML = `
    <div class="question-container">
      <h3 class="question">${selectedQuestion.pregunta}</h3>
      <p class="response">${selectedQuestion.respuesta}</p>
    </div>
  `;

  console.log("Pregunta actual:", selectedQuestion);
};

// Evento para avanzar a la siguiente pregunta (en ciclo)
btnNext.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % data.length; // Avanza y vuelve al inicio si es necesario
  renderQuestion();
  console.log(currentIndex);
  if (currentIndex === data.length - 1) {
    card.innerHTML = "<p>Preguntas terminadas</p>";
    btnNext.disabled = true; // Deshabilita el botón
    return;
  } else {
    btnNext.disabled = false;
  }
});

// Evento para retroceder a la pregunta anterior (en ciclo)
btnPrev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + data.length) % data.length; // Retrocede y vuelve al final si es necesario
  renderQuestion();
  console.log(currentIndex);
});

fetchQ();
