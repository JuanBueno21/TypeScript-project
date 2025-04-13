//TIPO ARRAY
var nombres = ["juan", "sebas", "lau"];
console.log("Nombres: " + nombres);
// R: Nombres: juan,sebas,lau
var edades = [29, 30, 27];
console.log("Edades: ", edades);
//R: Edades:  [ 29, 30, 27 ]
var mixto = ["juan", 28, true];
console.log("Mixto:", mixto);
var personas = [
    { nombre: "juan", edad: 29, esDesarrollador: true },
    { nombre: "sebas", edad: 30, esDesarrollador: true },
    { nombre: "lau", edad: 27, esDesarrollador: false },
];
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
var personasTupla;
personasTupla = ["juan", 28, true];
console.log("PersonaTupla: ", personasTupla);
// TIPO ENUMS
var diaDeLaSemana;
(function (diaDeLaSemana) {
    diaDeLaSemana[diaDeLaSemana["lunes"] = 0] = "lunes";
    diaDeLaSemana[diaDeLaSemana["martes"] = 1] = "martes";
    diaDeLaSemana[diaDeLaSemana["miercoles"] = 2] = "miercoles";
    diaDeLaSemana[diaDeLaSemana["jueves"] = 3] = "jueves";
    diaDeLaSemana[diaDeLaSemana["viernes"] = 4] = "viernes";
    diaDeLaSemana[diaDeLaSemana["sabado"] = 5] = "sabado";
    diaDeLaSemana[diaDeLaSemana["domingo"] = 6] = "domingo";
})(diaDeLaSemana || (diaDeLaSemana = {}));
var dia = diaDeLaSemana.domingo;
console.log("Dia: ", diaDeLaSemana[dia]);
