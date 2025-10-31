// Espera a que todo el contenido HTML se haya cargado
document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', (event) => {
        // Evita que el formulario se envíe de la forma tradicional
        event.preventDefault();

        // 1. Obtener los valores de los campos
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // 2. Validaciones básicas
        if (!username || !password) {
            alert('Por favor, introduce tu nombre de usuario y contraseña.');
            return;
        }

        // 3. Obtener el array de usuarios de localStorage
        const users = JSON.parse(localStorage.getItem('moveos_users')) || [];

        // 4. Buscar al usuario en el array
        const userFound = users.find(user => 
            user.username === username && user.password === password
        );

        // 5. Comprobar el resultado
        if (userFound) {
            // ¡Éxito!
            alert(`¡Bienvenido de nuevo, ${userFound.fullname}!`);
            
            // Aquí es donde redirigirías a la página principal de la app
            // Por ejemplo: window.location.href = 'dashboard.html';
            console.log('Inicio de sesión exitoso:', userFound);
            
        } else {
            // Fracaso
            alert('Nombre de usuario o contraseña incorrectos.');
        }
    });
});