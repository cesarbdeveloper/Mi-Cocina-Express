document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    // Credenciales de ejemplo (¡NUNCA hacer esto en producción!)
    const USUARIO_CORRECTO = 'admin';
    const PASSWORD_CORRECTA = '1234';

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Detiene el envío del formulario

        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        errorMessage.textContent = ''; // Limpia el mensaje de error anterior

        // Validación simple
        if (usernameInput === USUARIO_CORRECTO && passwordInput === PASSWORD_CORRECTA) {
            // Éxito: Simular redirección a la página de administración
            alert('¡Inicio de sesión exitoso! Redirigiendo a la Administración...');
            
            // En un proyecto real, aquí cargarías la página de administración o dashboard
            // Ejemplo: window.location.href = 'admin/dashboard.html';
            
        } else {
            // Fallo: Mostrar mensaje de error
            errorMessage.textContent = 'Usuario o contraseña incorrectos.';
        }
    });
});