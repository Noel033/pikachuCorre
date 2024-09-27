const pokemon = document.getElementById("pokemon");

let posX = 200;
let posY = 200;
const step = 10;

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (posY > 0) posY -= step;
      break;
    case "ArrowDown":
      if (posY < gameArea.clientHeight - pokemon.clientHeight) posY += step;
      break;
    case "ArrowLeft":
      if (posX > 0) posX -= step;
      break;
    case "ArrowRight":
      if (posX < gameArea.clientWidth - pokemon.clientWidth) posX += step;
      break;
  }
  updatePosition();
});

function updatePosition() {
  pokemon.style.left = posX + "px";
  pokemon.style.top = posY + "px";
}

updatePosition();
