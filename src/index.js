/** @format */

import Player from "./Player.js";
import Vehicle from "./Vehicle.js";
import GameLogic from "./GameLogic.js";
import ScoreBoard from "./ScoreBoard.js";

const canvas = document.getElementById("playField");

const ctx = canvas.getContext("2d");

const gameFieldWidth = canvas.clientWidth;
const gameFieldHeight = canvas.clientHeight;

const backgroundColor = "#1BCC0C";

const roadImg = new Image();
roadImg.src = "src/assets/road.svg";

const font = "Arial";

let i = 0;

const lane = [
  new Vehicle(1, gameFieldWidth, gameFieldHeight),
  new Vehicle(1, gameFieldWidth, gameFieldHeight),
  new Vehicle(-1, gameFieldWidth, gameFieldHeight),
  new Vehicle(-1, gameFieldWidth, gameFieldHeight),
];

const moose = new Player(3, gameFieldWidth, gameFieldHeight);
document.addEventListener("keydown", (event) => {
  console.log(event.keyCode);
  movePlayer(event.key);
});

const logic = new GameLogic(lane, moose);

const scoreBoard = new ScoreBoard(font, 30, gameFieldWidth);

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

function resetGameBoard() {
  console.log(moose.lives);
  if (logic.pause) {
    moose.resetPlayer();
    gameLoop();
  }
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
    case "Enter": {
      resetGameBoard();
      break;
    }
    case "Space": {
      console.log("Space");
      logic.pause = !logic.pause;
      break;
    }
  }

  if (moose.i === 8) changeDir = -2;
  if (moose.i === -8) changeDir = 2;

  moose.i = moose.i + changeDir;
}

function gameLoop() {
  background();
  scoreBoard.drawScoreBoard(ctx, moose.lives);

  ctx.save();

  moose.drawPlayer(ctx);

  lane[0].drawVehicle(ctx, gameFieldHeight * 0.21);
  lane[1].drawVehicle(ctx, gameFieldHeight * 0.3);

  lane[2].drawVehicle(ctx, gameFieldHeight * 0.61);
  lane[3].drawVehicle(ctx, gameFieldHeight * 0.7);

  ctx.restore();
  logic.playerHit();

  if (logic.pause) return;

  requestAnimationFrame(gameLoop);
}

gameLoop();
