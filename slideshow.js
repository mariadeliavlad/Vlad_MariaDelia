let currentIndex = 0;
const slides = document.querySelectorAll('.container .slide');

function showSlide(index) {
  // Ascundem toate imaginile
  slides.forEach(slide => slide.classList.remove('active'));

  // Afișăm doar imaginea corespunzătoare
  slides[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}
