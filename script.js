document.addEventListener('DOMContentLoaded', () => {
    let carrito = []; // Array para almacenar los productos en el carrito

    // Elementos del DOM
    const contadorCarrito = document.getElementById('contador-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const productosContainer = document.getElementById('productos-container');
    const verCarritoBtn = document.getElementById('ver-carrito');
    const carritoModal = document.getElementById('carrito-modal');
    const cerrarModalBtn = document.querySelector('.cerrar-modal');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

    // ** 1. AGREGAR PRODUCTO AL CARRITO **
    productosContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('agregar-carrito')) {
            const productoElemento = e.target.closest('.producto');
            const productoId = productoElemento.dataset.id;
            const productoNombre = productoElemento.dataset.nombre;
            const productoPrecio = parseFloat(productoElemento.dataset.precio);

            const productoExistente = carrito.find(item => item.id === productoId);

            if (productoExistente) {
                productoExistente.cantidad++;
            } else {
                carrito.push({
                    id: productoId,
                    nombre: productoNombre,
                    precio: productoPrecio,
                    cantidad: 1,
                });
            }
            actualizarCarritoDOM();
        }
    });

    // ** 2. ACTUALIZAR EL CARRITO EN EL DOM **
    function actualizarCarritoDOM() {
        listaCarrito.innerHTML = ''; // Limpiar la lista
        let total = 0;

        carrito.forEach(item => {
            const li = document.createElement('li');
            const subtotal = item.precio * item.cantidad;
            li.innerHTML = `${item.nombre} - $${item.precio.toFixed(2)} x ${item.cantidad} = $${subtotal.toFixed(2)}`;
            listaCarrito.appendChild(li);
            total += subtotal;
        });

        // Actualizar contador y total
        contadorCarrito.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        totalCarrito.textContent = total.toFixed(2);
    }

    // ** 3. FUNCIONALIDAD DEL MODAL **
    verCarritoBtn.addEventListener('click', () => {
        carritoModal.style.display = 'block';
    });

    cerrarModalBtn.addEventListener('click', () => {
        carritoModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === carritoModal) {
            carritoModal.style.display = 'none';
        }
    });

    // ** 4. VACIAR CARRITO **
    vaciarCarritoBtn.addEventListener('click', () => {
        carrito = [];
        actualizarCarritoDOM();
        alert('Carrito vaciado.');
        carritoModal.style.display = 'none';
    });

    // ** 5. FINALIZAR COMPRA (Ejemplo simple) **
    document.getElementById('finalizar-compra').addEventListener('click', () => {
        if (carrito.length > 0) {
             // Aquí iría la lógica real de pago y envío
            alert(`¡Compra finalizada! Total a pagar: $${totalCarrito.textContent}`);
            carrito = []; // Vaciar después de "comprar"
            actualizarCarritoDOM();
            carritoModal.style.display = 'none';
        } else {
            alert('El carrito está vacío.');
        }
    });
});