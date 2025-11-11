// Lista de actividades 
document.addEventListener("DOMContentLoaded", () => {
  const activities = [
    {
      title: "Ruta de Senderismo en la Sierra de Guadarrama",
      description: "Descubre la naturaleza en esta impresionante ruta...",
      image: "../img/ruta.jpg",
      alt: "Ruta de Senderismo",
      label: "Recomendado",
      labelClass: "destacado",
      details: [
        '25 Nov 2025',
        'Madrid',
        '8/10 participantes'
      ],
      price: "35€"
    },
    {
      title: "Clase de Yoga",
      description: "Sesión de yoga para principiantes impartida por un instructor...",
      image: "../img/yoga.jpg",
      alt: "Clase de Yoga",
      label: "Nuevo",
      labelClass: "nuevo",
      details: [
        "Barcelona",
        "15€/persona",
        "5 horas"
      ],
      price: "20€"
    }, {
      title: "Clase de Yoga",
      description: "Sesión de yoga para principiantes impartida por un instructor...",
      image: "../img/yoga.jpg",
      alt: "Clase de Yoga",
      label: "Nuevo",
      labelClass: "nuevo",
      details: [
        "Barcelona",
        "15€/persona",
        "5 horas"
      ],
      price: "20€"
    }, {
      title: "Clase de Yoga",
      description: "Sesión de yoga para principiantes impartida por un instructor...",
      image: "../img/yoga.jpg",
      alt: "Clase de Yoga",
      label: "Nuevo",
      labelClass: "nuevo",
      details: [
        "Barcelona",
        "15€/persona",
        "5 horas"
      ],
      price: "20€"
    }
  ];


  // Contenedor donde se insertarán las actividades
  const container = document.getElementById("gridActivities");

  // Generar dinámicamente las tarjetas
  activities.forEach(act => {
    const article = document.createElement("article");
    article.classList.add("activity");

    article.innerHTML = `
    <div class="activity-image">
      <img src="${act.image}" alt="${act.alt}">
      <span class="tag ${act.labelClass}">${act.label}</span>
    </div>
    <div class="activity-content">
      <h3>${act.title}</h3>
      <p>${act.description}</p>
      <ul class="details">
        ${act.details.map(d => `<li>${d}</li>`).join("")}
      </ul>
      ${act.price ? `<div class="price">${act.price}</div>` : ""}
      <div class="actions">
        <button class="btn-detail">Ver Detalles</button>
        <button class="btn-signup">Inscribirse</button>
      </div>
    </div>
  `;
    container.appendChild(article);
  });
});
