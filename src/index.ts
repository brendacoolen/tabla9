let resultado: number;
resultado = 0;
function tabladel(numerodetabla: number) {
  for (let contador = 1; contador <= 9; contador++) {
    resultado = contador * numerodetabla;
    console.log(resultado);
  }
}
let llamarfuncion: string = String(prompt("Ingresar a,b,c, o d"));
switch (llamarfuncion) {
  case "a":
    console.log(tabladel(9));
    break;
  case "b":
    console.log(tabladel(9));
    break;
  case "c":
    console.log(tabladel(9));
    break;
  case "d":
    console.log(tabladel(9));
    break;
  default:
    break;
}
