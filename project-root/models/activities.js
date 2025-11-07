// Lista de actividades 
document.addEventListener("DOMContentLoaded", () => {
    const actividades = [
        {
            titulo: "Ruta de Senderismo por la Sierra de Guadarrama",
            descripcion: "Descubre la naturaleza en esta impresionante ruta...",
            imagen: "../img/ruta.jpg",
            alt: "Ruta de Senderismo",
            etiqueta: "Recomendado",
            claseEtiqueta: "destacado",
            detalles: [
                '25 Nov 2025',
                'Madrid',
                '8/10 participantes'
            ],
            precio: "35€"
        },
        {
            titulo: "Clase de Yoga",
            descripcion: "Sesión de yoga para principiantes impartida por un instructor...",
            imagen: "../img/yoga.jpg",
            alt: "Clase de Yoga",
            etiqueta: "Nuevo",
            claseEtiqueta: "nuevo",
            detalles: [
                "Barcelona",
                "15€/persona",
                "5 horas"
            ],
            precio: "20€"
        }
    ];

    // Contenedor donde se insertarán las actividades
    const contenedor = document.getElementById("gridActividades");

    // Generar dinámicamente las tarjetas
    actividades.forEach(act => {
        const article = document.createElement("article");
        article.classList.add("actividad");

        article.innerHTML = `
    <div class="actividad-imagen">
      <img src="${act.imagen}" alt="${act.alt}">
      <span class="etiqueta ${act.claseEtiqueta}">${act.etiqueta}</span>
    </div>
    <div class="actividad-contenido">
      <h3>${act.titulo}</h3>
      <p>${act.descripcion}</p>
      <ul class="detalles">
        ${act.detalles.map(d => `<li>${d}</li>`).join("")}
      </ul>
      ${act.precio ? `<div class="precio">${act.precio}</div>` : ""}
      <div class="acciones">
        <button class="btn-detalle">Ver Detalles</button>
        <button class="btn-inscribirse">Inscribirse</button>
      </div>
    </div>
  `;
        contenedor.appendChild(article);
    });
});
