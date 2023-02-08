
let sliderIndex = 0;
function hola() {
  
  const fileSelector = document.querySelector("#bus");
  const selectedFile = fileSelector.files[0];
  const imagenUrl = URL.createObjectURL(selectedFile);

  const image = document.createElement('img');
  image.src = imagenUrl;
  image.style.display = 'none';

  image.setAttribute('data-index', sliderIndex);
  image.setAttribute("width", "700px");
  image.setAttribute("height", "380px");
  document.querySelector('.slider').appendChild(image);

  showSlide(sliderIndex);
  sliderIndex++;
}

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slides = slider.querySelectorAll('img');

  for (const slide of slides) {
    slide.style.display = 'none';
  }

  const currentSlide = slider.querySelector(`img[data-index="${index}"]`);
  currentSlide.style.display = 'block';
}
function showPrevSlide() {
  if (document.querySelectorAll('img').length === 0) {
    return;
  }
  
  sliderIndex--;
  if (sliderIndex < 0) {
    sliderIndex = document.querySelectorAll('img').length - 1;
  }
  if (!document.querySelector(`img[data-index="${sliderIndex}"]`)) {
    showPrevSlide();
  } else {
    showSlide(sliderIndex);
  }
}

function showNextSlide() {
  if (document.querySelectorAll('img').length === 0) {
    return;
  }
  
  sliderIndex++;
  if (sliderIndex >= document.querySelectorAll('img').length) {
    sliderIndex = 0;
  }
  if (!document.querySelector(`img[data-index="${sliderIndex}"]`)) {
    showNextSlide();
  } else {
    showSlide(sliderIndex);
  }
}
var boton1 = document.querySelector("#boton1"); 
boton1.onclick = hola;

var boton2 = document.querySelector("#boton2"); 
boton2.onclick = showPrevSlide;

var boton3 = document.querySelector("#boton3"); 
boton3.onclick = showNextSlide;
