const slideArea = document.querySelector('div.slides');
const images = slideArea.querySelectorAll('img');

let currentSlide = 0;
let z = 1;

// Slide event listener
slideArea.addEventListener('click', () => {
  currentSlide += 1;

  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  z += 1;

  //   Removes animation from other images
  images.forEach((image) => {
    image.style.animation = '';
  });

  //   z index and animation
  images[currentSlide].style.zIndex = z;
  images[currentSlide].style.animation = 'fade 0.5s';
});

slideArea.addEventListener('mouseover', () => {
  images.forEach((image) => {
    const x = 25 * Math.floor(Math.random() * 5) - 50;
    const y = 25 * Math.floor(Math.random() * 5) - 50;

    image.style.transform = `translate(${x}px,${y}px)`;
  });
});

slideArea.addEventListener('mouseout', () => {
  images.forEach((image) => {
    image.style.transform = '';
  });
});
