// Espera a que todo el contenido HTML se haya cargado
document.addEventListener('DOMContentLoaded', () => {

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
            
            // 3. Almacenar el valor (opcional, pero útil)
            // Usamos .querySelector('strong') para obtener el texto "Participante" u "Organizador"
            selectedUserType = button.querySelector('strong').textContent;
            console.log('Tipo de usuario seleccionado:', selectedUserType);
        });
    });

    // --- Lógica para el Formulario de Registro ---

    const registerForm = document.querySelector('.register-form');

    registerForm.addEventListener('submit', (event) => {
        // Evita que el formulario se envíe de la forma tradicional
        event.preventDefault();

        // 1. Obtener los valores de los campos
        const fullname = document.getElementById('fullname').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const birthdate = document.getElementById('birthdate').value;

        // 2. Validaciones básicas
        if (!fullname || !username || !email || !password || !confirmPassword) {
            alert('Por favor, completa todos los campos obligatorios (*).');
            return; // Detiene la ejecución
        }

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return; // Detiene la ejecución
        }

        // 3. Obtener el array de usuarios de localStorage
        // Si no existe, crea un array vacío
        const users = JSON.parse(localStorage.getItem('moveos_users')) || [];

        // 4. Comprobar si el usuario (por username o email) ya existe
        const userExists = users.find(user => user.username === username || user.email === email);

        if (userExists) {
            alert('El nombre de usuario o el correo electrónico ya están registrados.');
            return;
        }

        // 5. Crear el objeto del nuevo usuario
        const newUser = {
            fullname: fullname,
            username: username,
            email: email,
            password: password, // ¡Recuerda, esto no es seguro para producción!
            birthdate: birthdate,
            userType: selectedUserType // El tipo que seleccionamos antes
        };

        // 6. Añadir el nuevo usuario al array
        users.push(newUser);

        // 7. Guardar el array actualizado de vuelta en localStorage
        localStorage.setItem('moveos_users', JSON.stringify(users));

        // 8. Informar al usuario y redirigir
        alert('¡Registro exitoso! Serás redirigido a la página de inicio de sesión.');
        
        // Redirige al login (ajusta la ruta si es necesario)
        window.location.href = 'login.html'; 
    });
});