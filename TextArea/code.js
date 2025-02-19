const textArea = document.getElementById("textArea");
const number = document.querySelector(".number");
const maxLength = parseInt(textArea.getAttribute("maxlength")); // Convertir a número

textArea.addEventListener("input", () => {
  const currentLength = textArea.value.length;
  number.textContent = currentLength; // Actualizar contador

  if (currentLength === maxLength) {
    alert("limite alcanzado");
  }
});
