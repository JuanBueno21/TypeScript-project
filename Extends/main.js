var nombre = "juan";
console.log(nombre.length);
function obtenerLongitud(obj) {
    var longitud = obj.length;
    var tipo = typeof obj;
    console.log("el tipo de dato es: ".concat(tipo, " y la longitud es: ").concat(longitud, "}"));
    return obj.length;
}
console.log(obtenerLongitud("hola"));
console.log(obtenerLongitud([1, 2, 3, 4, 5]));
// console.log(obtenerLongitud(29));
