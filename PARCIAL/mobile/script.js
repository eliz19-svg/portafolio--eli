document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita recargar la página
  
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (email && mensaje) {
    alert(`Gracias por contactarte, responderé pronto a tu correo: ${email}`);
  } else {
    alert('Por favor completa todos los campos.');
  }
});
