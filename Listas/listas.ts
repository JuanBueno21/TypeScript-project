//TIPO ARRAY
let nombres: string[] = ["juan", "sebas", "lau"];
console.log("Nombres: " + nombres);
// R: Nombres: juan,sebas,lau

let edades: number[] = [29, 30, 27];
console.log("Edades: ", edades);
//R: Edades:  [ 29, 30, 27 ]

let mixto: any[] = ["juan", 28, true]
console.log("Mixto:", mixto);
//R: Mixto: [ 'juan', 28, true ]

//TIPO INTERFACES
interface Persona {
  nombre: string;
  edad: number;
  esDesarrollador: boolean;
}

let personas: Persona[] = [
  { nombre: "juan", edad: 29, esDesarrollador: true },
  { nombre: "sebas", edad: 30, esDesarrollador: true },
  { nombre: "lau", edad: 27, esDesarrollador: false },
]
personas.push({ nombre: "lorena", edad: 50, esDesarrollador: false });
console.log("Personas: ", personas);
/* Respuesta: Personas:  [
  { nombre: 'juan', edad: 29, esDesarrollador: true },
  { nombre: 'sebas', edad: 30, esDesarrollador: true },
  { nombre: 'lau', edad: 27, esDesarrollador: false },
  { nombre: 'lorena', edad: 50, esDesarrollador: false }
]
*/

// TIPO TUPLAS
let personasTupla: [string, number, boolean];
personasTupla = ["juan", 28, true];
console.log("PersonaTupla: ", personasTupla);
// R: PersonaTupla:  [ 'juan', 28, true ]


// TIPO ENUMS
enum diaDeLaSemana {
  lunes,
  martes,
  miercoles,
  jueves,
  viernes,
  sabado,
  domingo,
}

let dia: diaDeLaSemana = diaDeLaSemana.domingo;
console.log("Dia: ", diaDeLaSemana[dia]);
// R: Dia:  domingo