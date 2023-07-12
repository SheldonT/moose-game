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

const font = "Gasoek One";

const lane = [
  new Vehicle(1, gameFieldWidth, gameFieldHeight),
  new Vehicle(1, gameFieldWidth, gameFieldHeight),
  new Vehicle(-1, gameFieldWidth, gameFieldHeight),
  new Vehicle(-1, gameFieldWidth, gameFieldHeight),
];

const moose = new Player(3, gameFieldWidth, gameFieldHeight);

const logic = new GameLogic(lane, moose, gameLoop);

const scoreBoard = new ScoreBoard(font, 30, gameFieldWidth);

let frameCount = 0;

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

function gameEnd() {
  const gameOver = "Game Over";

  ctx.fillStyle = "#000000";
  ctx.font = `40px ${font}`;
  ctx.fillText(
    gameOver,
    gameFieldWidth / 2 - ctx.measureText(gameOver).width / 2,
    gameFieldHeight / 2 + 20
  );
}

function gameStart() {
  const startText = "Press Enter";

  frameCount++;

  if (frameCount <= 50) {
    ctx.fillStyle = "#000000";
    ctx.font = `40px ${font}`;
    ctx.fillText(
      startText,
      gameFieldWidth / 2 - ctx.measureText(startText).width / 2,
      gameFieldHeight / 2 + 20
    );
  }
  if (frameCount >= 100) frameCount = 0;
}

function gameLoop() {
  if (logic.start) frameCount = 0;

  background();

  ctx.save();

  if (logic.start) moose.drawPlayer(ctx);

  if (!logic.start) gameStart();

  lane[0].drawVehicle(ctx, gameFieldHeight * 0.21);
  lane[1].drawVehicle(ctx, gameFieldHeight * 0.3);

  lane[2].drawVehicle(ctx, gameFieldHeight * 0.61);
  lane[3].drawVehicle(ctx, gameFieldHeight * 0.7);

  ctx.restore();
  logic.movePlayer(logic.controlButton);

  logic.playerHit();
  logic.playerWin();
  logic.playerLoose();

  scoreBoard.drawScoreBoard(ctx, moose.lives, moose.score, logic.level);

  if (logic.loose) {
    gameEnd();
    return;
  }

  if (logic.pause) {
    return;
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();
