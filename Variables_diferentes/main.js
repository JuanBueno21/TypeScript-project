// TIPO ANY
var variableAny;
// variableAny = "hello"
variableAny = 29;
// variableAny = true
console.log("valor de variable any: " + variableAny);
// TIPO UNKNOWN
var variableDesconocida;
// variableDesconocida = "hello"
variableDesconocida = 28;
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
function logMessage(message) {
    console.log("Log message: ", message);
}
logMessage("este es un mensaje de log");
