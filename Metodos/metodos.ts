function imprimeMensaje(message: string): void {
  console.log(message);
}
imprimeMensaje("hola, soy un mensaje");


function sumar(a: number, b: number): number {
  return a + b;
}
let resultado: number = sumar(5, 20);
console.log(`Tu resultado es: ${resultado}`);
