/*
    Arreglo de objetos que representan productos para intercambiar.
    Cada objeto contiene información sobre el producto, su imagen, título, descripción,
    y detalles del usuario que lo ofrece.
 */

const products = [
    {
        img: '<img src="img/QCYH2PRO.png" alt="QCYH2PRO">', // Etiqueta de imagen para el producto con su ruta de la imagen y una alterantiva por si no se encuentra la imagen
        title: "Auriculares QCY H2 PRO", // Nombre del producto
        description: "Auriculares inalámbricos de alta calidad con cancelación de ruido y sonido estéreo premium.", // Descripción del producto
        user: { initials: "MG", name: "María González", rating: 4.8, stars: 5 } // Información del usuario que ofrece el producto, incluyendo sus iniciales, nombre, calificación y estrellas
    },
    {
        img: '',
        title: "Smartphone Android",
        description: "Teléfono en excelente estado, 128GB de almacenamiento, cámara de 48MP y batería de larga duración.",
        user: { initials: "CR", name: "Carlos Rodriguez", rating: 2.8, stars: 3 }
    },
    {
        img: '',
        title: "Laptop Gaming",
        description: "Laptop para gaming con tarjeta gráfica dedicada, 16GB RAM y procesador de última generación.",
        user: { initials: "AM", name: "Ana Martínez", rating: 4.0, stars: 4 }
    },
    {
        img: '',
        title: "Smartwatch Deportivo",
        description: "Reloj inteligente con GPS, monitor de ritmo cardíaco y resistencia al agua para deportes acuáticos.",
        user: { initials: "LF", name: "Luis Fernández", rating: 5.0, stars: 5 }
    },
    {
        img: '',
        title: "Consola de Videojuegos",
        description: "Consola de última generación con 5 juegos incluidos, dos controles y todos los cables necesarios.",
        user: { initials: "PJ", name: "Pedro Jiménez", rating: 3.0, stars: 3 }
    },
    {
        img: '',
        title: "Bicicleta de Montaña",
        description: "Bicicleta con suspensión delantera, frenos de disco y cuadro de aluminio, ideal para rutas exigentes.",
        user: { initials: "SV", name: "Sofía Vargas", rating: 4.2, stars: 4 }
    },
    {
        img: '',
        title: "Cámara Réflex",
        description: "Cámara profesional con lente intercambiable, perfecta para fotografía y video en alta resolución.",
        user: { initials: "JM", name: "Javier Muñoz", rating: 4.9, stars: 5 }
    },
    {
        img: '',
        title: "Patín Eléctrico",
        description: "Patín eléctrico plegable, batería de larga duración y velocidad máxima de 25 km/h.",
        user: { initials: "LR", name: "Laura Ruiz", rating: 3.1, stars: 3 }
    },
    {
        img: '',
        title: "Guitarra Eléctrica",
        description: "Guitarra eléctrica con amplificador incluido, ideal para principiantes y músicos avanzados.",
        user: { initials: "DP", name: "Diego Pérez", rating: 4.0, stars: 4 }
    },
    {
        img: '',
        title: "Colección de Libros",
        description: "Colección de novelas clásicas y contemporáneas en perfecto estado, ideal para amantes de la lectura.",
        user: { initials: "EC", name: "Elena Castro", rating: 4.3, stars: 4 }
    }
];

/*
    Función para generar el HTML de las estrellas de calificación.
    Recibe el número de estrellas y la calificación del usuario.
    Devuelve una cadena de texto con el HTML correspondiente.
    Utiliza un bucle para crear un span por cada estrella, marcando las que están llenas o vacías.
        - Recive stars y rating de cada usuario
        - Inicializa una cadena vacía para almacenar el HTML de las estrellas
        - Bucle que itera desde 1 hasta 5 para crear 5 estrellas
        - Agrega un span por cada estrella, si el índice es menor o igual a stars, la estrella está llena, de lo contrario está vacía
            - "?" significa que si la condición es verdadera, se agrega una clase vacía
            - ":" significa que si la condición es falsa, no se agrega la clase vacía
        - Devuelve el HTML de las estrellas con la calificación del usuario
 */

function getStarsHTML(stars, rating) {  
    let html = ''; 
    for (let i = 1; i <= 5; i++) { 
        html += `<span class="star${i <= stars ? '' : ' empty'}">★</span>`; 
    }
    return `<span class="stars">${html}</span><span>(${rating})</span>`;
}

/*
    Función para renderizar los productos en el contenedor de productos. 
    Renderizar = mostrar los productos en la página web.
    - Selecciona el contenedor de productos en el DOM.
    - Inicializa una cadena vacía para almacenar el HTML de los productos.
    - Utiliza un bucle para iterar sobre el arreglo de productos.
    - Por cada producto, crea un bloque de HTML que incluye:
        - Imagen del producto
        - Título del producto
        - Descripción del producto
        - Información del usuario que ofrece el producto (iniciales, nombre, calificación y estrellas)
        - Botón para proponer un intercambio
    - Asigna el HTML generado al contenedor de productos.

*/

function renderProducts() {
    const productsContainer = document.querySelector('.products');
    let html = '';
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        html += `
        <div class="product">
            <div class="img-container">
                <div style="font-size: 64px;">
                    ${product.img}
                </div>
            </div>
            <div class="product-info">
                <h3>${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-owner">
                    <div class="user-avatar">${product.user.initials}</div>
                    <div class="user-info">
                        <div class="user-name">${product.user.name}</div>
                        <div class="user-rating">
                            ${getStarsHTML(product.user.stars, product.user.rating)}
                        </div>
                    </div>
                </div>
                <p class="trade-btn">💱 Proponer Intercambio</p>
            </div>
        </div>
        `;
    }
    productsContainer.innerHTML = html;
}

// Llamada a la función para renderizar los productos al cargar la página
renderProducts();