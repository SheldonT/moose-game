/** @format */

import Player from "./Player.js";
import Vehicle from "./Vehicle.js";
import GameLogic from "./GameLogic.js";
import ScoreBoard from "./ScoreBoard.js";

//const { Player } = require("./Player.js");
//const { Vehicle } = require("./Vehicle.js");
//const { GameLogic } = require("./GameLogic.js");
//const { ScoreBoard } = require("./ScoreBoard.js");

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
let frameSnapShot = 0;

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

function message(text, interval = 50, flash = true) {
  const textVisible = Math.ceil(frameCount / interval);

  if (flash && textVisible % 2 === 0) {
    ctx.fillStyle = "#000000";
    ctx.font = `40px ${font}`;
    ctx.fillText(
      text,
      gameFieldWidth / 2 - ctx.measureText(text).width / 2,
      gameFieldHeight / 2 + 20
    );
  }

  if (!flash) {
    ctx.fillStyle = "#000000";
    ctx.font = `40px ${font}`;
    ctx.fillText(
      text,
      gameFieldWidth / 2 - ctx.measureText(text).width / 2,
      gameFieldHeight / 2 + 20
    );
  }
}

function gameLoop() {
  frameCount++;
  background();

  ctx.save();

  if (logic.start) {
    if (frameCount - frameSnapShot <= 100) {
      message("Ready", 40, false);
    } else if (frameCount - frameSnapShot <= 300) {
      message("GO!", 30);
    } else {
      moose.drawPlayer(ctx);
    }
  } else {
    message("Press Enter", 50);
    frameSnapShot = frameCount;
  }

  lane[0].drawVehicle(ctx, gameFieldHeight * 0.21);
  lane[1].drawVehicle(ctx, gameFieldHeight * 0.3);

  lane[2].drawVehicle(ctx, gameFieldHeight * 0.61);
  lane[3].drawVehicle(ctx, gameFieldHeight * 0.7);

  ctx.restore();

  if (frameCount - frameSnapShot > 300) {
    logic.movePlayer();

    logic.playerHit();
    logic.playerWin();
    logic.playerLoose();
  }

  scoreBoard.drawScoreBoard(ctx, moose.lives, moose.score, logic.level);

  if (logic.loose) {
    message("Game Over", 50, false);
    return;
  }
  if (logic.pause) {
    frameSnapShot = frameCount;
    message("Press Enter", 50, false);
    return;
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();
