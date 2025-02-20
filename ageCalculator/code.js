const btn = document.getElementById("btn");
const result = document.querySelector(".result");

document.addEventListener("DOMContentLoaded", () => {
  const { DateTime } = luxon;
  const input = document.querySelector(".input");

  if (input) {
    const picker = datepicker(input, {
      formatter: (input, date) => {
        input.value = date.toLocaleDateString();
      },
    });
    console.log(picker);
  }

  btn.addEventListener("click", () => {
    const fecha = input.value;
    const fechaNacimiento = DateTime.fromFormat(fecha, "d/M/yyyy");
    const fechaActual = DateTime.now();

    // Calcular diferencia en años y meses
    const diff = fechaNacimiento
      .diff(fechaActual, ["years", "months"])
      .negate(); // Negamos para que sea positivo
    const años = Math.floor(diff.years);
    const meses = Math.floor(diff.months);

    result.textContent = `Tienes ${años} años y ${meses} meses.`;
  });
});
