let time = 3200,
  currentImageIndex = 0,
  images = document.querySelectorAll("#slider img");
max = images.length;

function nextImage() {
  images[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if (currentImageIndex >= max) currentImageIndex = 0;

  images[currentImageIndex].classList.add("selected");
}

function start() {
  setInterval(() => {
    // troca de image
    nextImage();
  }, time);
}

window.addEventListener("load", start);

const backtoTop = document.querySelector(".back-to-top");
const iconeSeta = document.querySelector(".arrow-up");
const iconeRato = document.querySelector(".icone-rato");

backtoTop.onmouseover = () => {
  iconeSeta.style.opacity = 0;
  iconeRato.style.opacity = 1;
};

backtoTop.onmouseout = () => {
  iconeRato.style.opacity = 0;
  iconeSeta.style.opacity = 1;
};

function backtoTopScrollReveal() {
  if (scrollY > 900) {
    backtoTop.classList.add("back-to-top");
  } else {
    backtoTop.classList.remove("back-to-top");
  }
}
