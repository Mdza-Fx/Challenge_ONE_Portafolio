//Haz tú validación en javascript acá

function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
  
    if (nombre === '') {
      alert('Por favor, ingresa tu nombre');
      return false;
    }
  
    if (email === '') {
      alert('Por favor, ingresa tu email');
      return false;
    }
  
    if (mensaje === '') {
      alert('Por favor, ingresa tu mensaje');
      return false;
    }
  
    return true;
  }
  
  // Evento para enviar el formulario
  document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente
  
    if (validarFormulario()) {
      // Aquí puedes realizar cualquier acción adicional, como enviar los datos a través de AJAX
      alert('Formulario enviado correctamente');
      // Restablecer el formulario después de enviarlo
      document.getElementById('formulario').reset();
    }
  });
  