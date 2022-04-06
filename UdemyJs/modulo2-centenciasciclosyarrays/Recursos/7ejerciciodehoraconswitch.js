/*
6am-11am - Buenos dias
12pm-18pm - Buenas Tardes
19pm-24pm - Buenas noches
0am-6am - Durmiendo
*/

let horaDia = 8;
let mensaje = "horas desconocidad";

switch (horaDia) {
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    mensaje = `Buenos días`;
    break;
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
    mensaje = "Buenas tardes";
    break;
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
  case 24:
    mensaje = "Buenas noches";
    break;
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    mensaje = "Durmiendo";
    break;
  default:
    mensaje = "Valor incorrecto";
}

console.log(mensaje);
