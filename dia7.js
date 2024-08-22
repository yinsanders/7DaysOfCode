// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero.";
    } else {
        return a / b;
    }
}

// Función para mostrar el menú y recibir la elección del usuario
function mostrarMenu() {
    return parseInt(prompt("Seleccione una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir"));
}

// Función principal de la calculadora
function calculadora() {
    let opcion;
    do {
        opcion = mostrarMenu();
        
        if (opcion >= 1 && opcion <= 4) {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            let resultado;

            switch(opcion) {
                case 1:
                    resultado = sumar(num1, num2);
                    alert(`El resultado de la suma es: ${resultado}`);
                    break;
                case 2:
                    resultado = restar(num1, num2);
                    alert(`El resultado de la resta es: ${resultado}`);
                    break;
                case 3:
                    resultado = multiplicar(num1, num2);
                    alert(`El resultado de la multiplicación es: ${resultado}`);
                    break;
                case 4:
                    resultado = dividir(num1, num2);
                    alert(`El resultado de la división es: ${resultado}`);
                    break;
                default:
                    alert("Opción no válida.");
            }
        } else if (opcion === 5) {
            alert("Gracias por usar la calculadora. ¡Hasta luego!");
        } else {
            alert("Opción no válida. Por favor, seleccione una opción entre 1 y 5.");
        }
    } while (opcion !== 5);
}

// Ejecutar la calculadora
calculadora();
