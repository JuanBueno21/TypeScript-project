var Persona = /** @class */ (function () {
    function Persona(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    Persona.prototype.saludar = function () {
        return "hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    return Persona;
}());
var persona = new Persona("juan", 29, true);
console.log(persona.saludar());
