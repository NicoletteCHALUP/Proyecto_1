import {PosInicial, VerificarFormatoEntrada,Comands,VerificarComandos,ComandoControlarAuto,ComandosCoordenadas,MoverAuto} from "./Proyecto_1";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#proyecto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstComand = first.value;//(convertir a números enteros) valores de un array 
  const X = Number.parseInt(firstComand[0]);
  const Y = Number.parseInt(firstComand[2]);
  const posicionX = Number.parseInt(firstComand[4]);
  const posicionY = Number.parseInt(firstComand[6]);
  const orientacion= firstComand[7];
  let comandos=""

  for(let j=9; j < firstComand.length; j++){
    comandos+=firstComand[j]; //avanzar

  }
  div.innerHTML = "<p> La Posicion INICIAL del Carro es : " + PosInicial(posicionX, posicionY,orientacion) + "</p>";
  div.innerHTML += "<p>"+"Comando : " +Comands(comandos) + "</p>";
  div.innerHTML += "<p>"+"La Posicion FINAL del Auto : "+ MoverAuto(comandos,posicionX,posicionY,orientacion,X,Y) + "</p>";
});
