let productos = [
    {
    id: "1",
    objeto: "Laptop",
    descripcion: "Laptop de 15 pulgadas con 16GB de RAM y 512GB SSD",
    ofertante: "Juan Perez",
    },
    {
    id: "2",
    objeto: "Smartphone",
    descripcion: "Smartphone de última generación con cámara de 108MP",
    ofertante: "Maria Lopez",
    },
];

mostrarProductos();
function mostrarProductos() {
    let listaProductos = document.getElementById("lista-productos");
    listaProductos.innerHTML = ""; // Limpiar la lista antes de agregar nuevos productos

    productos.forEach(producto => {
        let li = document.createElement("li");
        li.textContent = `${producto.objeto} - ${producto.descripcion} (Ofertado por: ${producto.ofertante})`;
        listaProductos.appendChild(li);
    });
}