import { Page } from "./page.js";

var page = new Page();

page.form.button.onclick = runEvent;

function runEvent() {
  if (valid_number() == -1) {
    alert("Insira um numero válido 0-360");
  } else {
    IncrementTentativa();
  }
}
function IncrementTentativa() {
  if (localStorage.tentativas >= 4) {
    alert("TENTATIVA MAXIMA ATINGIDA REINICIE A PAGINA");
  } else if (localStorage.tentativas >= 0 && localStorage.tentativas < 4) {
    localStorage.tentativas++;
    console.log(localStorage.tentativas);
    page.tentativas.updateTentativas();
    addInTabela();
    if (isEqual() == -1) {
      alert("ACERTOU");
      page.form.input.disabled=true;
      page.form.button.disabled=true;
    }
  } else {
    console.log("nem um nem outro: " + localStorage.tentativas);
  }
}
function isEqual() {
  if (page.canvas.angleDegrees == page.form.input.value) {
    return -1;
  } else {
    return 0;
  }
}
function valid_number() {
  if (page.form.input.value > 360 || page.form.input.value < 0) {
    return -1;
  } else {
    return 0;
  }
}
function addInTabela() {
  let result = verify_input();
  // Configured
  let row = document.createElement("tr");
  let angulo = document.createElement("td");
  angulo.textContent = page.form.input.value;
  let simbolo = document.createElement("td");
  simbolo.textContent = result.sym;
  let indicador = document.createElement("td");
  indicador.textContent = result.ind;

  row.appendChild(angulo);
  row.appendChild(simbolo);
  row.appendChild(indicador);

  page.table.table.appendChild(row);
}
function verify_input() {
  let angle = page.canvas.angleDegrees;
  console.log("Angle: " + angle);
  let angle_input = page.form.input.value;
  let resultado = angle - angle_input;
  if (resultado == 0) {
    let sym = "✅";
    let ind = "✅";
    return { sym, ind };
  } else if (resultado >= -5 && resultado < 0) {
    let sym = "⬇️";
    let ind = "Fervendo!!";
    return { sym, ind };
  } else if (resultado <= 5 && resultado > 0) {
    let sym = "⬆️;";
    let ind = "Fervendo!!";
    return { sym, ind };
  } else if (resultado >= -10 && resultado < -5) {
    let sym = "⬇️";
    let ind = "Quente!";
    return { sym, ind };
  } else if (resultado <= 10 && resultado > 5) {
    let sym = "⬆️";
    let ind = "Quente!";
    return { sym, ind };
  } else if (resultado >= -20 && resultado < -10) {
    let sym = "⬇️";
    let ind = "Ficando quente";
    return { sym, ind };
  } else if (resultado <= 20 && resultado > 10) {
    let sym = "⬆️";
    let ind = "Ficando quente";
    return { sym, ind };
  } else if (resultado >= -50 && resultado < -20) {
    let sym = "⬇️";
    let ind = "Morno";
    return { sym, ind };
  } else if (resultado <= 50 && resultado > 20) {
    let sym = "⬆️";
    let ind = "Morno";
    return { sym, ind };
  } else if (resultado >= -100 && resultado < -50) {
    let sym = "⬇️";
    let ind = "Frio!";
    return { sym, ind };
  } else if (resultado <= 100 && resultado > 50) {
    let sym = "⬆️";
    let ind = "Frio!";
    return { sym, ind };
  } else if (resultado > 100) {
    let sym = "⬆️";
    let ind = "Congelando!!";
    return { sym, ind };
  } else {
    let sym = "⬇️";
    let ind = "Congelando!!";
  }
}
