document.addEventListener('DOMContentLoaded', function () {
    const addPendingForm = document.getElementById('add-pending-form');
    const pendientesList = document.getElementById('pendientes-list');
  
    // Función para crear y mostrar un nuevo pendiente
    function createPending(descripcion, fecha, urgencia) {
      const pendingItem = document.createElement('div');
      pendingItem.classList.add('pending-item');
      
      // Asignar clase según la urgencia
      if (urgencia === 'rojo') {
        pendingItem.classList.add('urgente');
      } else if (urgencia === 'amarillo') {
        pendingItem.classList.add('medio');
      } else if (urgencia === 'verde') {
        pendingItem.classList.add('bajo');
      }
  
      const pendingContent = `
        <h4>${descripcion}</h4>
        <p><strong>Fecha de vencimiento:</strong> ${fecha}</p>
        <p><strong>Urgencia:</strong> ${urgencia.charAt(0).toUpperCase() + urgencia.slice(1)}</p>
        <label for="estado">Estado:</label>
        <select class="estado">
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button onclick="markAsCompleted(this)">Marcar como Completado</button>
      `;
      
      pendingItem.innerHTML = pendingContent;
      pendientesList.appendChild(pendingItem);
  
      // Agregar evento para cambiar el estado desde el selector
      const estadoSelector = pendingItem.querySelector('.estado');
      estadoSelector.addEventListener('change', function () {
        const estado = estadoSelector.value;
        if (estado === 'completado') {
          pendingItem.classList.add('completado');
          pendingItem.querySelector('button').textContent = 'Completado';
          pendingItem.querySelector('button').disabled = true;
          pendingItem.querySelector('button').style.backgroundColor = '#6c757d';
        } else {
          pendingItem.classList.remove('completado');
        }
      });
    }
  
    // Función para marcar un pendiente como completado
    window.markAsCompleted = function(button) {
      const pendingItem = button.closest('.pending-item');
      pendingItem.style.backgroundColor = "#d4edda"; // Cambio de color a verde claro
      button.textContent = "Completado";
      button.disabled = true;
      button.style.backgroundColor = "#6c757d";
    };
  
    // Manejar el envío del formulario
    addPendingForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const descripcion = document.getElementById('descripcion').value;
      const fecha = document.getElementById('fecha').value;
      const urgencia = document.getElementById('urgencia').value;
  
      if (descripcion && fecha && urgencia) {
        createPending(descripcion, fecha, urgencia);
  
        // Limpiar el formulario
        addPendingForm.reset();
      } else {
        alert('Por favor, completa todos los campos.');
      }
    });
  });