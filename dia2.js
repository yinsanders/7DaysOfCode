// Se solicita el nombre del usuario a través de un cuadro de diálogo
const nombre = prompt('¿Cuál es tu nombre?');

// Se solicita la edad del usuario a través de un cuadro de diálogo
const edad = prompt('¿Cuántos años tienes?');

// Se solicita el lenguaje de programación que el usuario está estudiando
const lenguaje = prompt('¿Qué lenguaje de programación estás estudiando?');

// Se crea un mensaje personalizado usando las respuestas del usuario
const msg = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}.`;

// Se muestra el mensaje personalizado en un cuadro de alerta
alert(msg);

// Se le pregunta al usuario si le gusta estudiar el lenguaje indicado
// Se pide una respuesta en formato numérico (1 para SÍ o 2 para NO)
const respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

// Si la respuesta es 1 (SÍ), se muestra un mensaje de motivación
if (respuesta == 1) {
    alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
}

// Si la respuesta es 2 (NO), se sugiere intentar aprender otros lenguajes
if (respuesta == 2) {
    alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
}