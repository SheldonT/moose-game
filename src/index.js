/** @format */

import Player from "./Player.js";
import Vehicle from "./Vehicle.js";

const canvas = document.getElementById("playField");

const ctx = canvas.getContext("2d");

const gameFieldWidth = canvas.clientWidth;
const gameFieldHeight = canvas.clientHeight;

const backgroundColor = "#1BCC0C";

const roadImg = new Image();
roadImg.src = "src/assets/road.svg";

let i = 0;

const lane = [
  new Vehicle(1, gameFieldWidth, gameFieldHeight),
  new Vehicle(1, gameFieldWidth, gameFieldHeight),
  new Vehicle(-1, gameFieldWidth, gameFieldHeight),
  new Vehicle(-1, gameFieldWidth, gameFieldHeight),
];

const moose = new Player(5, gameFieldWidth, gameFieldHeight);
document.addEventListener("keydown", (event) => movePlayer(event.key));

let changeDir = 1;

function background() {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, gameFieldWidth, gameFieldHeight);
  ctx.drawImage(
    roadImg,
    0,
    gameFieldHeight * 0.2,
    gameFieldWidth,
    gameFieldHeight * 0.2
  );

  ctx.drawImage(
    roadImg,
    0,
    gameFieldHeight * 0.6,
    gameFieldWidth,
    gameFieldHeight * 0.2
  );
}

function movePlayer(k) {
  switch (k) {
    case "ArrowUp": {
      moose.incY = moose.incY - 10;
      break;
    }
    case "ArrowDown": {
      moose.incY = moose.incY + 10;
      break;
    }
    case "ArrowLeft": {
      moose.incX = moose.incX - 10;
      break;
    }
    case "ArrowRight": {
      moose.incX = moose.incX + 10;
      break;
    }
  }

  if (moose.i === 8) changeDir = -2;
  if (moose.i === -8) changeDir = 2;

  moose.i = moose.i + changeDir;
  console.log(moose.i);
}

function gameLoop() {
  i = i + 1;
  const angle = (i * Math.PI) / 180;

  background();

  ctx.save();

  moose.drawPlayer(ctx);

  lane[0].drawVehicle(ctx, gameFieldHeight * 0.21);
  lane[1].drawVehicle(ctx, gameFieldHeight * 0.3);

  lane[2].drawVehicle(ctx, gameFieldHeight * 0.61);
  lane[3].drawVehicle(ctx, gameFieldHeight * 0.7);

  ctx.restore();

  requestAnimationFrame(gameLoop);
}

gameLoop();
