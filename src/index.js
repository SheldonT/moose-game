/** @format */

import road from "/src/assets/road.svg";

const canvas = document.getElementById("playField");
const ctx = canvas.getContext("2d");

const gameFieldWidth = canvas.clientWidth;
const gameFieldHeight = canvas.clientHeight;

const backgroundColor = "#1BCC0C";

const roadImg = new Image();
roadImg.src = road;

//console.log(roadImg);

let i = 0;

//console.log(vehiclePool);

function background() {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, gameFieldWidth, gameFieldHeight);
  /*ctx.drawImage(
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
  );*/
}

function gameLoop() {
  i = i + 1;
  const angle = (i * Math.PI) / 180;

  background();

  ctx.save();
  ctx.translate(gameFieldWidth / 2, gameFieldHeight / 2);

  ctx.rotate(angle);
  ctx.fillStyle = "#2700FF";
  ctx.fillRect(-50, -50, 100, 100);
  ctx.restore();

  //console.log(i);
  requestAnimationFrame(gameLoop);
}

gameLoop();
