document.getElementById('form-avisos').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario
    
    // Obtener los valores del formulario
    const avisoText = document.getElementById('avisos').value;
    const usuario = document.getElementById('usuario').value;
    const fecha = document.getElementById('fecha').value;
    
    // Crear el nuevo aviso
    const nuevoAviso = document.createElement('div');
    nuevoAviso.classList.add('avisos-item');
    
    nuevoAviso.innerHTML = `
        <p>${avisoText}</p>
        <span>Subido por: ${usuario} | Fecha: ${fecha}</span>
    `;
    
    // Agregar el nuevo aviso a la lista de avisos pendientes
    document.getElementById('avisos-pendientes').appendChild(nuevoAviso);
    
    // Limpiar el formulario
    document.getElementById('avisos').value = '';
    document.getElementById('usuario').value = '';
    document.getElementById('fecha').value = '';
});
