document.addEventListener("DOMContentLoaded", () => {  
  const form = document.querySelector(".register-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío automático del formulario

    const fullname = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Validaciones (si hay algún fallo muestra alertas)
    if (!validateFullName(fullname)) {
      alert(
        "Por favor, introduce tu nombre completo (mínimo nombre y apellido)."
      );
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

    if (userExists(email, username)) {
      alert("El usuario o correo ya está registrado.");
      return;
    }

    // Si todo es válido, crea el objeto usuario
    const newUser = {
      fullname,
      username,
      email,
      password, // Debería ir cifrada para más seguridad
    };

    // Añadir al modelo
    addUser(newUser);

    alert("¡Registro exitoso!");
    form.reset();

    // Redirigir
    window.location.href = "home.html";
  });
});
