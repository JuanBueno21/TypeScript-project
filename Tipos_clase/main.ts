import { Empleado } from "./empleado";

let empleado = new Empleado("juan", 28, true, "desarrollador senior");

console.log(empleado.saludar());
console.log(empleado.obtenerInfo());

console.log("Nombre: ", empleado.nombre);
