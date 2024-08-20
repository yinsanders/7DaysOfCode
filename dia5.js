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
    // Preguntar si desea agregar un alimento
    let agregar = prompt("¿Deseas agregar un alimento a tu lista de compras? (sí/no): ").toLowerCase();
    
    if (agregar === 'sí' || agregar === 'si') {
        // Preguntar qué alimento desea agregar
        let alimento = prompt("¿Qué alimento deseas agregar?: ");
        
        // Preguntar en qué categoría encaja el alimento
        console.log("Elige una categoría:");
        console.log("1. Frutas");
        console.log("2. Lácteos");
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

    } else if (agregar === 'no') {
        agregarOtro = false;
    } else {
        console.log("Respuesta no válida. Por favor, responde 'sí' o 'no'.");
    }
}

// Mostrar la lista de compras agrupada
console.log("\nLista de compras:");
for (let categoria in categorias) {
    if (categorias[categoria].length > 0) {
        console.log(`${categoria}: ${categorias[categoria].join(', ')}`);
    }
}