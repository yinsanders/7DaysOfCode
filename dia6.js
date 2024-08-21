// Inicializar las categorías y la lista de compras
let categorias = {
    Frutas: [],
    Lacteos: [],
    Congelados: [],
    Dulces: [],
    Otros: []
};

let agregarOtro = true;

while (agregarOtro) {
    // Verificar si la lista ya tiene elementos para permitir la opción de eliminar
    let hayElementos = Object.values(categorias).some(categoria => categoria.length > 0);

    // Preguntar si desea agregar o eliminar un alimento
    let accion = prompt(hayElementos ? 
        "¿Deseas agregar o eliminar un alimento de tu lista de compras? (agregar/eliminar/no): " : 
        "¿Deseas agregar un alimento a tu lista de compras? (sí/no): ").toLowerCase();

    if (accion === 'agregar' || accion === 'sí' || accion === 'si') {
        // Preguntar qué alimento desea agregar
        let alimento = prompt("¿Qué alimento deseas agregar?: ");
        
        // Preguntar en qué categoría encaja el alimento
        console.log("Elige una categoría:");
        console.log("1. Frutas");
        console.log("2. Lacteos");
        console.log("3. Congelados");
        console.log("4. Dulces");
        console.log("5. Otros");

        let categoria = prompt("Ingresa el número de la categoría: ");

        switch(categoria) {
            case '1':
                categorias.Frutas.push(alimento);
                break;
            case '2':
                categorias.Lacteos.push(alimento);
                break;
            case '3':
                categorias.Congelados.push(alimento);
                break;
            case '4':
                categorias.Dulces.push(alimento);
                break;
            case '5':
                categorias.Otros.push(alimento);
                break;
            default:
                console.log("Categoría no válida, el alimento se añadirá a 'Otros'.");
                categorias.Otros.push(alimento);
                break;
        }

    } else if (accion === 'eliminar' && hayElementos) {
        // Mostrar la lista de compras actual
        console.log("\nLista actual de compras:");
        for (let categoria in categorias) {
            if (categorias[categoria].length > 0) {
                console.log(`${categoria}: ${categorias[categoria].join(', ')}`);
            }
        }

        // Preguntar qué alimento desea eliminar
        let alimentoEliminar = prompt("\n¿Qué alimento deseas eliminar?: ");

        // Buscar y eliminar el alimento
        let eliminado = false;
        for (let categoria in categorias) {
            let indice = categorias[categoria].indexOf(alimentoEliminar);
            if (indice !== -1) {
                categorias[categoria].splice(indice, 1);
                console.log(`¡El elemento "${alimentoEliminar}" ha sido eliminado de la categoría "${categoria}"!`);
                eliminado = true;
                break;
            }
        }

        // Si no se encontró el alimento
        if (!eliminado) {
            console.log("¡No fue posible encontrar el elemento en la lista!");
        }

    } else if (accion === 'no') {
        agregarOtro = false;
    } else {
        console.log("Respuesta no válida. Por favor, responde 'agregar', 'eliminar' o 'no'.");
    }
}

// Mostrar la lista de compras agrupada
console.log("\nLista de compras final:");
for (let categoria in categorias) {
    if (categorias[categoria].length > 0) {
        console.log(`${categoria}: ${categorias[categoria].join(', ')}`);
    }
}