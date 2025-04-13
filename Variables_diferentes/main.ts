// TIPO ANY
let variableAny: any
// variableAny = "hello"
variableAny = 29
// variableAny = true
console.log("valor de variable any: " + variableAny);


// TIPO UNKNOWN
let variableDesconocida: unknown
// variableDesconocida = "hello"
variableDesconocida = 28
// variableDesconocida = true

if (typeof variableDesconocida === "string") {
  console.log("variable unknown is a string: " + variableDesconocida);
}


// TIPO NEVER
/*
function throwError(message: string): never {
  throw new Error(message);
}
throwError("Este es un error")
*/

// TIPO VOID
function logMessage(message: string): void {
  console.log("Log message: ", message);
}
logMessage("este es un mensaje de log");
