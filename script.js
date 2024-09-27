const pokemon = document.getElementById("pokemon");
let posX = 0;
let posY = 0;
const step = 10;

function updatePosition() {
  pokemon.style.transform = `translate(${posX}px, ${posY}px)`;
}

function handleKeyDown(e) {
  switch (e.key) {
    case "ArrowUp":
      if (posY > 0) posY -= step;
      break;
    case "ArrowDown":
      if (posY < window.innerHeight - 50) posY += step;
      break;
    case "ArrowLeft":
      if (posX > 0) posX -= step;
      break;
    case "ArrowRight":
      if (posX < window.innerWidth - 50) posX += step;
      break;
  }
  updatePosition();
}

document.addEventListener("keydown", handleKeyDown);

// Soporte para pantallas táctiles
let touchStartX, touchStartY;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

document.addEventListener("touchmove", (e) => {
  e.preventDefault(); // Previene el scrolling
  const touchEndX = e.touches[0].clientX;
  const touchEndY = e.touches[0].clientY;
  const dx = touchEndX - touchStartX;
  const dy = touchEndY - touchStartY;

  if (Math.abs(dx) > Math.abs(dy)) {
    // Movimiento horizontal
    if (dx > 0 && posX < window.innerWidth - 50) {
      posX += step;
    } else if (dx < 0 && posX > 0) {
      posX -= step;
    }
  } else {
    // Movimiento vertical
    if (dy > 0 && posY < window.innerHeight - 50) {
      posY += step;
    } else if (dy < 0 && posY > 0) {
      posY -= step;
    }
  }

  updatePosition();
  touchStartX = touchEndX;
  touchStartY = touchEndY;
});
