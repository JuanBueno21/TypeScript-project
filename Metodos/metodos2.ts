function saludar(nombre: string, saludo?: string): string {
  if (saludo) {
    return `${saludo}, ${nombre}`
  } else {
    return `hola ${nombre}!`
  }
}

console.log(saludar("juan"));
console.log(saludar("juan", "buenos dias"));


// PARAMETROS MULTIPLES
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((acumulado, actual) => acumulado + actual, 0)
}
console.log("Resultado de sumar todos: ", sumarTodos(1, 2, 3, 4, 5));


// VALORES POR DEFECTO
function despedir(nombre: string, despedida: string = "Adios"): string {
  if (despedida) {
    return `${despedida}, ${nombre}`
  }
}

console.log(despedir("juan"));
console.log(despedir("juan", "hasta luego"));
