
function PersonaDec(target: Function) {
  console.log(target);

  target.prototype.despedir = function (despedida: string) {
    return `${despedida}, ${this.nombre} `;
  }
}

@PersonaDec
class Persona2 {
  nombre: string;
  edad: number;


  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(saludo: string): string {
    return `${saludo}, soy ${this.nombre} y tengo ${this.edad} años.`;
  }

  despedir!: (despedida: string) => string;
}

let usuario = new Persona2("Juan", 29);
console.log(usuario.saludar("Hola"));
console.log(usuario.despedir("Adios"));