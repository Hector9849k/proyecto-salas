document.addEventListener('DOMContentLoaded', function () {
    const addJuntaForm = document.getElementById('add-junta-form');
    const juntasList = document.getElementById('juntas-list');
  
    // Función para crear y mostrar una nueva junta
    function createJunta(concepto, fecha, hora, lugar, asistentes) {
      const junta = document.createElement('div');
      junta.classList.add('junta');
      
      const juntaContent = `
        <h4>${concepto}</h4>
        <p><strong>Fecha:</strong> ${fecha} <strong>Hora:</strong> ${hora}</p>
        <p><strong>Lugar:</strong> ${lugar}</p>
        <p class="asistentes"><strong>Asistentes:</strong> ${asistentes}</p>
        <button onclick="confirmarAsistencia(this)">Confirmar Asistencia</button>
      `;
  
      junta.innerHTML = juntaContent;
      juntasList.appendChild(junta);
    }
  
    // Función para confirmar asistencia
    window.confirmarAsistencia = function(button) {
      const junta = button.closest('.junta');
      const asistentes = junta.querySelector('.asistentes');
      asistentes.innerHTML = "<strong>Asistentes:</strong> Confirmado por ti";
      button.disabled = true;
      button.style.backgroundColor = "#6c757d";
    };
  
    // Manejar el envío del formulario
    addJuntaForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const concepto = document.getElementById('concepto').value;
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;
      const lugar = document.getElementById('lugar').value;
      const asistentes = document.getElementById('asistentes').value;
  
      if (concepto && fecha && hora && lugar && asistentes) {
        createJunta(concepto, fecha, hora, lugar, asistentes);
  
        // Limpiar el formulario
        addJuntaForm.reset();
      } else {
        alert('Por favor, completa todos los campos.');
      }
    });
  });
  