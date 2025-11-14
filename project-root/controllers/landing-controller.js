document.addEventListener("DOMContentLoaded", () => {
    const currentUser = sessionStorage.getItem('currentUser');

    if (currentUser) {
        const ul = document.getElementById("list");

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = 'home.html';
        a.textContent = 'Explorar Actividades';

        li.appendChild(a);
        ul.appendChild(li);
    }
});