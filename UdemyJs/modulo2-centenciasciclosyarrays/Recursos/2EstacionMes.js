let numero = 4;

if (numero === 1) {
  console.log("El numero es uno");
} else if (numero === 2) {
  console.log("El numero es dos");
} else if (numero === 3) {
  console.log("El numero es tres");
} else if (numero === 4) {
  console.log("El numero es cuatro");
} else {
  console.log("Valor desconocido");
}

let mes = 6;
let estacion;

if (mes == 1 || mes == 2 || mes == 12) {
  estacion = "Invierno";
} else if (mes == 3 || mes == 4 || mes == 5) {
  estacion = "Primavera";
} else if (mes == 6 || mes == 7 || mes == 8) {
  estacion = "Verano";
} else if (mes == 9 || mes == 10 || mes == 11) {
  estacion = "Otoño";
} else {
  estacion = "Valor incorrecto";
}

console.log(estacion);
