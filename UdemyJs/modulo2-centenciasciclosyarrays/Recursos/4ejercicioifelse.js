let hora = 20;
let saludos;

if (hora >= 6 && hora <= 11) {
  saludos = "Buenos dias";
} else if (hora >= 12 && hora <= 18) {
  saludos = "Buenas tardes";
} else if (hora >= 19 && hora <= 24) {
  saludos = "Buenas noches";
} else if (hora >= 0 && hora < 6) {
  saludos = "Durmiendo";
} else {
  saludos = "No coincide ";
}
console.log(saludos);
