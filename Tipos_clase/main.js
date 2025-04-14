"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empleado_1 = require("./empleado");
var empleado = new empleado_1.Empleado("juan", 28, true, "desarrollador senior");
console.log(empleado.saludar());
console.log(empleado.obtenerInfo());
console.log("Nombre: ", empleado.nombre);
