// Ejemplo de interacción: actualizar título de la página basado en la sección activa
document.querySelectorAll(".sidebar ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
        const sectionName = e.target.innerText;
        document.title = `Panel de Control - ${sectionName}`;
    });
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");
    
    // Alterna la clase "show" en la barra lateral
    sidebar.classList.toggle("show");

    // Alterna la clase "shifted" en el contenido para ajustarlo
    content.classList.toggle("shifted");
}

// Cerrar el menú cuando se selecciona una opción
document.querySelectorAll(".sidebar ul li a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("sidebar").classList.remove("show");
        document.querySelector(".content").classList.remove("shifted");
    });
});

// Mostrar/ocultar menú del perfil
function toggleProfileMenu() {
    const profileMenu = document.getElementById("profile-menu");
    profileMenu.classList.toggle("show");
}

// Cerrar el menú al hacer clic en una opción
document.querySelectorAll(".profile-menu ul li a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("profile-menu").classList.remove("show");
    });
});

function cerrarSesion() {
    // Redirige a la página de inicio (index.html)
    window.location.href = 'index.html';
}

function loadContent(page) {
    const contentArea = document.getElementById("content-area");
    
    // Limpiar el contenido anterior
    contentArea.innerHTML = "";

    // Crear una solicitud para cargar el contenido de la página seleccionada
    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error(`Error al cargar ${page}`);
            return response.text();
        })
        .then(data => {
            contentArea.innerHTML = data;
        })
        .catch(error => {
            console.error("Error al cargar el contenido:", error);
            contentArea.innerHTML = "<p>No se pudo cargar el contenido.</p>";
        });
}
