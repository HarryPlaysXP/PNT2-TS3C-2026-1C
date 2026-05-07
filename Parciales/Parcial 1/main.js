console.log(`Parcial 1 PNT2 7/5/26 Matias Corrales
Objetivo: Evaluar la capacidad de conectar con servicios externos
gestionar el asincronismo y transformar datos para una interfaz administrativa.`);
async function obtenerProductosPorCategoria() {
    try {
        const categoria = await fetch('https://fakestoreapi.com/products/categories');
        if (!categoria.ok) {
            throw new Error('Error en la solicitud: ' + categoria.status);
        }
        // 1. Consulta de Categorías:
        const data = await categoria.json();
        console.log(`Categorias:", ${data.join(', ')}`);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
    try {
        
        const productosEspcificos = await fetch('https://fakestoreapi.com/products/category/electronics');
        if (!productosEspcificos.ok) {
            throw new Error('Error en la solicitud: ' + productosEspcificos.status);
        }
        // 2. Consulta Específica:
        const dataProductos = await productosEspcificos.json();
        //console.log("Productos de la categoría 'electronics':", dataProductos);
        //lo use para ver como devolvia los datos.
        // 3. Transformación de Datos:
        const productosTransformados = dataProductos.map(producto => ({
            nombre: producto.title,
            price: producto.price,
            category: producto.category,
            puntaje: producto.rating.rate
        }));
        
        console.log("4. Visualización:");
        console.log("Productos de la categoría 'electronics':", productosTransformados.sort((a, b) => b.price - a.price)
    .map(producto => `producto ${producto.nombre}
        precio $${producto.price} 
        categoria ${producto.category}
        calificación de ${producto.puntaje}`));
        console.log("5. Validación de Precios:");
        console.log(`Hay algun producto que cueste mas de 500$? : ${productosTransformados.some(precio => precio.price > 500)}`);
        console.log("6. Filtro por Calificación:");
        console.log("Productos con Calificación mayor a 4:", productosTransformados.filter(rating => rating.puntaje > 4)
        .map(producto => `El producto ${producto.nombre} cuesta $${producto.price} y tiene una calificación de ${producto.puntaje}`));

    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}
obtenerProductosPorCategoria();