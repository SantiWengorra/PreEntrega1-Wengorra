function Cuenta(num1, num2) {
    let type = prompt("Ingrese el tipo de cuenta (Suma, Resta, Multiplicacion o Division)").toLowerCase();
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    while (type !== "suma" && type !== "resta" && type !== "multiplicacion" && type !== "division") {
        alert("Tipo de cuenta incorrecto");
        type = prompt("Ingrese el tipo de cuenta").toLowerCase();
    }
    if (type === "suma" || type === "+") {
        let resultado = num1 + num2;
        alert("El resultado es: " + resultado);
    } else if (type === "resta" || type === "-") {
        let resultado = num1 - num2;
        alert("El resultado es: " + resultado);
    } else if (type === "multiplicacion" || type === "*") {
        let resultado = num1 * num2;
        alert("El resultado es: " + resultado);
    } else if (type === "division" || type === "/") {
        let resultado = num1 / num2;
        alert("El resultado es: " + resultado);
    } else {
        alert("Tipo de cuenta incorrecto");
    }
}

function ejecutar() {
let user = prompt("Ingrese su usuario").toLowerCase();


while (user !== "santiago") {
    alert("Usuario incorrecto");
    user = prompt("Ingrese su usuario");
}

let password = prompt("Ingrese su contraseña");

while (password !== "12345") {
    alert("Contraseña incorrecta");
    password = prompt("Ingrese su contraseña");
}

alert("Bienvenido");

let numero1;
while (isNaN(numero1)) {
    numero1 = prompt("Ingrese el primer número");
}

let numero2;
while (isNaN(numero2)) {
    numero2 = prompt("Ingrese el segundo número");
}

Cuenta(numero1, numero2);
}