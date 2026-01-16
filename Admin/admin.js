const tabla = document.getElementById('tabla-productos');
const form = document.getElementById('form-producto');
const API_URL = 'http://localhost:3000/api/productos';

// 1. Obtener y mostrar productos
async function obtenerProductos() {
    const res = await fetch(API_URL);
    const productos = await res.json();
    tabla.innerHTML = '';
    
    productos.forEach(p => {
        tabla.innerHTML += `
            <tr>
                <td><img src="${p.imagen}" width="50"></td>
                <td>${p.nombre}</td>
                <td>$${p.precio}</td>
                <td><button class="btn-delete" onclick="eliminarProducto('${p._id}')">Eliminar</button></td>
            </tr>
        `;
    });
}

// 2. Agregar producto
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nuevo = {
        nombre: document.getElementById('nombre').value,
        precio: document.getElementById('precio').value,
        imagen: document.getElementById('imagen').value
    };

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevo)
    });

    form.reset();
    obtenerProductos(); // Recargar tabla
});

// 3. Eliminar producto
async function eliminarProducto(id) {
    if(confirm('¿Estás seguro de eliminar este artículo?')) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        obtenerProductos(); // Recargar tabla
    }
}

obtenerProductos();