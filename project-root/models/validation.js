/**
 * Valida formato de email
 */
export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Valida longitud mínima de la contraseña
 */
export function validatePassword(password) {
    return password.length >= 8;
}

/**
 * Valida que las contraseñas coincidan
 */
export function validatePasswordMatch(password, confirmPassword) {
    return password === confirmPassword;
}

/**
 * Valida que el nombre completo tenga al menos 2 palabras
 */
export function validateFullName(name) {
    return name.trim().split(" ").length >= 2;
}

/**
 * Valida que la fecha de nacimiento sea anterior a la fecha actual
 * @param {string} birthdate - Fecha en formato "YYYY-MM-DD"
 * @returns {boolean} true si es válida, false si es futura o inválida
 */
export function validateBirthdate(birthdate) {
    if (!birthdate) return false; // No se ingresó fecha

    const inputDate = new Date(birthdate);
    const today = new Date();

    // Elimina la parte de horas para comparar solo fechas
    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    // La fecha de nacimiento debe ser anterior a hoy
    return inputDate < today;
}

