let nombre: string = "juan";
console.log(nombre.length);

function obtenerLongitud<T extends { length: number }>(obj: T) {
  let longitud: number = obj.length;
  let tipo: string = typeof obj;
  console.log(`el tipo de dato es: ${tipo} y la longitud es: ${longitud}}`);

  return obj.length;
}

console.log(obtenerLongitud("hola"));

console.log(obtenerLongitud([1, 2, 3, 4, 5]));

// console.log(obtenerLongitud(29));
