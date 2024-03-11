document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const galleryContainer = document.querySelector('.gallery-container');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const totalImages = galleryItems.length;

  // Calcula el ancho total del contenedor de la galería
  const containerWidth = galleryItems[0].getBoundingClientRect().width * totalImages;

  // Calcula el ancho de cada elemento de la galería
  const itemWidth = galleryItems[0].getBoundingClientRect().width;

  document.querySelector('.prev-button').addEventListener('click', () => {
     navigate(-1);
  });

  document.querySelector('.next-button').addEventListener('click', () => {
     navigate(1);
  });

  function navigate(direction) {
     currentIndex = (currentIndex + direction + totalImages) % totalImages;
     const offset = -currentIndex * itemWidth * 1; // Ajusta el factor multiplicador según sea necesario

     galleryContainer.style.transform = `translateX(${offset}px)`;
  }
});
