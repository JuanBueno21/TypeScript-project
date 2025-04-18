type PersonaType = {
  nombre: string;
  edad: number;
};

type Parcial<T> = {
  [K in keyof T]?: T[K];
}

type PersonaParcial = Parcial<PersonaType>;

type SoloLectura<T> = {
  readonly [K in keyof T]: T[K];
}

type PersonaSoloLectura = SoloLectura<PersonaType>;

let persona: PersonaSoloLectura = {
  nombre: "Juan",
  edad: 29,
}

console.log(persona.nombre);


// TEMPLATES LITERASL TYPES
type Variantes = "pequeño" | "mediano" | "grande";
type classCSS = `boton-${Variantes}`;

// let botonPequeño: classCSS = "boton-pequeño";
// let botonMediano: classCSS = "boton-mediano";
// let botonGrande: classCSS = "boton-grande";

// conditional types
type EsNumero<T> = T extends number ? true : false;

function esNumero<T>(valor: T): EsNumero<T> {
  return (typeof valor === "number") as EsNumero<T>;
}

const resultado1 = esNumero(5); // true
const resultado2 = esNumero("5"); // false

console.log(resultado1); // true
console.log(resultado2); // false
