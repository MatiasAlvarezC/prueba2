document.addEventListener('DOMContentLoaded', function () {
    const whatsappButton = document.querySelector('.whatsapp-btn-float');
  
    // Cuando el botón se hace clic
    whatsappButton.addEventListener('click', function() {
      // Restauramos el color original del botón después de hacer clic
      whatsappButton.style.backgroundColor = '#25D366'; // Color original
    });
  
    // Cuando el botón recibe el foco (se hace clic o se navega por teclado)
    whatsappButton.addEventListener('focus', function() {
      whatsappButton.style.backgroundColor = '#25D366'; // Asegura que el color no cambie
    });
  
    // Cuando el mouse pasa por encima (hover)
    whatsappButton.addEventListener('mouseenter', function() {
      // Cambiar el color a verde más oscuro cuando el mouse está sobre el botón
      whatsappButton.style.backgroundColor = '#128C7E'; // Color hover
    });
  
    // Cuando el mouse deja de estar sobre el botón
    whatsappButton.addEventListener('mouseleave', function() {
      // Restauramos el color original cuando el mouse se aleja
      whatsappButton.style.backgroundColor = '#25D366'; // Color original
    });
  });
  