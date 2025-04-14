interface Persona {
  nombre: string;
  edad: number;
  esDesarrollador: boolean;
}

let persona: Persona = {
  nombre: "juan",
  edad: 29,
  esDesarrollador: true,
}

console.log("Personas: ", persona);

interface Sumar {
  (a: number, b: number): number;
}

let sumar1: Sumar = (a: number, b: number): number => {
  return a + b
}
console.log("El resultado es: ", sumar1(3, 5));
