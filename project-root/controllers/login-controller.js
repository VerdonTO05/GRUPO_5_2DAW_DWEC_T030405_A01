import { getUsers  } from "../models/user-model.js";   

// Espera a que todo el contenido HTML se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', (event) => {
        // Evita que el formulario se envíe de la forma tradicional
        event.preventDefault();

        // 1. Obtener los valores de los campos
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // 2. Validaciones básicas
        if (!username || !password) {
            alert('Por favor, introduce tu nombre de usuario y contraseña.');
            return;
        }

        // 3. Obtenemos los usuarios registrados desde el modelo
        const users = getUsers();

        // 4. Buscamos coincidencia
        const userFound = users.find(
            (u) => u.username === username && u.password === password
        );

        if (userFound) {
            alert(`¡Bienvenido de nuevo, ${userFound.fullname}!`);
            console.log("Inicio de sesión exitoso:", userFound);
            window.location.href = "home.html";
        } else {
            alert("Usuario o contraseña incorrectos.");
        }

    });
});
