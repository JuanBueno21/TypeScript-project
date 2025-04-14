function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hola");
console.log("Output 1: " + output1);

let output2 = identity<number>(29);
console.log("Output2: ", output2);


// CLASES
class Caja<T> {
  private contenido: T;

  constructor(contenido: T) {
    this.contenido = contenido;
  }

  public obtenerContenido(): T {
    return this.contenido;
  }
}

let cajaDeString = new Caja<string>("Libros");
console.log("contenido de la caja de string: ", cajaDeString.obtenerContenido());
