import { addUser, userExists } from "../models/user-model.js";
import { validateEmail, validatePassword, validatePasswordMatch, validateFullName, validateBirthdate } from "../models/validation.js";

document.addEventListener("DOMContentLoaded", () => {

     // --- Lógica para la selección de Tipo de Usuario ---
    const userTypeButtons = document.querySelectorAll('.user-type-btn');
    // Variable para guardar el tipo seleccionado
    let selectedUserType = 'Participante'; // Valor por defecto

    userTypeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Quitar la clase 'active' de todos los botones
            userTypeButtons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Añadir la clase 'active' solo al botón clickeado
            button.classList.add('active');
            
            // 3. Almacenar el valor
            // Usamos .querySelector('strong') para obtener el texto "Participante" u "Organizador"
            selectedUserType = button.querySelector('strong').textContent;
            console.log('Tipo de usuario seleccionado:', selectedUserType);
        });
    });

    const form = document.querySelector(".register-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío automático del formulario

        const fullname = document.getElementById("fullname").value.trim();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const birthdate = document.getElementById("birthdate").value;

        // Validaciones (si hay algún fallo muestra alertas)
        if (!validateFullName(fullname)) {
            alert("Por favor, introduce tu nombre completo (mínimo nombre y apellido).");
            return;
        }

        if (!validateEmail(email)) {
            alert("Introduce un correo electrónico válido.");
            return;
        }

        if (!validatePassword(password)) {
            alert("La contraseña debe tener al menos 8 caracteres.");
            return;
        }

        if (!validatePasswordMatch(password, confirmPassword)) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        if (userExists(email, username)) {
            alert("El usuario o correo ya está registrado.");
            return;
        }

        if (!validateBirthdate(birthdate)){
            alert("La fecha de nacimiento no es válida.");
            return;
        }

        // Si todo es válido, crea el objeto usuario
        const newUser = {
            fullname,
            username,
            email,
            password, // Debería ir cifrada para más seguridad
            birthdate,
            createdAt: new Date().toISOString(),
            userType: selectedUserType
        };

        // Añadir al modelo
        addUser(newUser);

        alert("¡Registro exitoso!");
        form.reset();

        // Redirigir
        window.location.href='home.html';
    });
});
