function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre);
    }
    else {
        return "hola ".concat(nombre, "!");
    }
}
console.log(saludar("juan"));
console.log(saludar("juan", "buenos dias"));
// PARAMETROS MULTIPLES
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulado, actual) { return acumulado + actual; }, 0);
}
console.log("Resultado de sumar todos: ", sumarTodos(1, 2, 3, 4, 5));
