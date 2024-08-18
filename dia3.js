
const areaElegir = prompt('¿Que área deseas elegir Front-End = 1 o Back-End = 2?');
if (areaElegir == 1) {
    const areaFrontend = prompt('¿Dentro del Front-End, que quieres aprender React = 1 o Vue = 2?');
    if (areaFrontend == 1) {
        alert('Elegiste dentro del Front-End la biblioteca React.');
    } else if (areaFrontend == 2) {
        alert('Elegiste dentro del Front-End el framework Vue.');
    }
}
if (areaElegir == 2) {
    const areaBackend = prompt('¿Dentro del Back-End, que quieres aprender C# = 1 o Java = 2?');
    if (areaBackend == 1) {
        alert('Elegiste dentro del Back-End el lenguaje C#.');
    } else if (areaBackend == 2) {
        alert('Elegiste dentro del Back-End el lenguaje JAVA.');
    }
}

const eleccion = prompt('¿Quieres eguir especializándose en el área elegida = 1 o quieres desarrollarte para convertirte en Fullstack = 2?')
if (eleccion == 1) {
    alert('Buena elección seguiras especializandote en el áre elegida.');
}else if (eleccion == 2) {
    alert('QUe bueno, seguiras desarrolandote para convertirte en Fllstack.');
}

const tecnologias = prompt('¿Cuántas tecnologías te gustaría aprender?')
let i = 0;
while (i < tecnologias) {
    prompt('¿Qué tecnología te gustaría aprender?');
    i++;
}
alert('Esa es una buena tecnología para aprender.');