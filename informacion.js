document.addEventListener('DOMContentLoaded', function () {
    const uploadForm = document.getElementById('upload-form');
    const postsList = document.getElementById('posts-list');
  
    // Función para crear y mostrar una nueva publicación
    function createPost(title, description, fileURL = null, userName) {
      const post = document.createElement('div');
      post.classList.add('post');
      
      let postContent = `
        <h4>${title}</h4>
        <p>${description}</p>
      `;
      
      // Si hay un archivo, se crea el enlace
      if (fileURL) {
        postContent += `<a href="${fileURL}" target="_blank">Ver archivo</a>`;
      }
  
      postContent += `<div class="uploaded-by">Subido por: ${userName}</div>`;
  
      post.innerHTML = postContent;
      postsList.appendChild(post);
    }
  
    // Manejar el envío del formulario
    uploadForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const fileInput = document.getElementById('file');
      const file = fileInput.files[0];
  
      const userName = 'Juan Pérez'; // Esto se puede cambiar dinámicamente o recuperar desde la sesión de usuario.
  
      if (title && description) {
        let fileURL = null;
  
        // Si se seleccionó un archivo, se crea un URL para mostrarlo
        if (file) {
          fileURL = URL.createObjectURL(file);
        }
  
        // Crear el post con el archivo (si lo hay)
        createPost(title, description, fileURL, userName);
  
        // Limpiar el formulario
        uploadForm.reset();
      } else {
        alert('Por favor, completa todos los campos obligatorios.');
      }
    });
  });