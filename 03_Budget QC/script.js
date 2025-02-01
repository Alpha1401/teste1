

const carouselContainer = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

// Atualiza a classe de destaque
function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('active');
    if (index === currentIndex) {
      item.classList.add('active');
    }
  });
  
  // Ajusta a posição do carrossel
  const offset = -currentIndex * 620; // Cada imagem tem 600px + gap
  carouselContainer.style.transform = `translateX(${offset}px)`;
}

// Avança no carrossel
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length; // Loop infinito
  updateCarousel();
});

// Volta no carrossel
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop infinito
  updateCarousel();
});

// Inicialização
updateCarousel();

// video 1

const video = document.getElementById("meuVideo");

video.addEventListener("ended", () => {
  // Aguarda um pequeno intervalo para garantir que o vídeo é pausado e resetado
  setTimeout(() => {
    video.currentTime = 0; // Volta ao início
    video.load();          // Recarrega o vídeo para exibir o poster novamente
  }, 100); // 100 ms de atraso para evitar comportamento inesperado
});
