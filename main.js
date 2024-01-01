/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/GameLogic.js":
/*!**************************!*\
  !*** ./src/GameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameLogic)\n/* harmony export */ });\n/** @format */\r\nclass GameLogic {\r\n  constructor(vehicles, player, gameLoop) {\r\n    this.vehicles = vehicles;\r\n    this.player = player;\r\n    this.start = false;\r\n    this.pause = false;\r\n    this.win = false;\r\n    this.loose = false;\r\n    this.level = 1;\r\n    this.changeDir = 2;\r\n    this.lives = player.lives;\r\n    this.playerFurthestPosition = player.incY;\r\n    this.controlButton = null;\r\n    this.stepHigh = new Audio(\"src/assets/sounds/StepHigh.mp3\");\r\n    this.stepLow = new Audio(\"src/assets/sounds/StepLow.mp3\");\r\n    this.gameLoop = () => gameLoop();\r\n\r\n    document.addEventListener(\"keydown\", (event) => {\r\n      this.controlButton = event.key;\r\n\r\n      if (this.controlButton === \"Enter\") {\r\n        this.resetGameBoard();\r\n      }\r\n    });\r\n\r\n    document.addEventListener(\"keyup\", (event) => {\r\n      this.controlButton = null;\r\n    });\r\n  }\r\n\r\n  resetGameBoard() {\r\n    if (!this.start) this.start = true;\r\n    if (this.pause) {\r\n      console.log(\"resetGameBoard\");\r\n      this.pause = !this.pause;\r\n      for (let i = 0; i < this.vehicles.length; i++) {\r\n        this.vehicles[i].posX = 0;\r\n        this.vehicles[i].frame = this.vehicles[i].frameReset;\r\n      }\r\n      this.player.resetPlayer();\r\n      this.playerFurthestPosition = this.player.incY;\r\n\r\n      this.loose = false;\r\n      this.pause = false;\r\n      this.gameLoop();\r\n    }\r\n  }\r\n\r\n  moveFeet() {\r\n    if (this.player.i === 8) {\r\n      this.changeDir = -1;\r\n      this.stepHigh.play();\r\n    }\r\n\r\n    if (this.player.i === -8) {\r\n      this.changeDir = 1;\r\n      this.stepLow.play();\r\n    }\r\n\r\n    this.player.i = this.player.i + this.changeDir;\r\n  }\r\n\r\n  movePlayer() {\r\n    switch (this.controlButton) {\r\n      case \"ArrowUp\": {\r\n        if (this.player.incY >= 0 && this.start) {\r\n          this.player.incY = this.player.incY - 1;\r\n\r\n          if (\r\n            this.player.incY <= this.playerFurthestPosition &&\r\n            !this.pause &&\r\n            this.start\r\n          ) {\r\n            this.playerFurthestPosition = this.player.incY;\r\n            this.player.score = this.player.score + 50;\r\n          }\r\n        }\r\n        this.moveFeet();\r\n        break;\r\n      }\r\n      case \"ArrowDown\": {\r\n        if (\r\n          this.player.incY <=\r\n            this.player.fieldHeight - this.player.playerHeight - 20 &&\r\n          this.start\r\n        ) {\r\n          this.player.incY = this.player.incY + 1;\r\n          if (!this.pause && this.start)\r\n            this.player.score = this.player.score - 20;\r\n        }\r\n        this.moveFeet();\r\n        break;\r\n      }\r\n      case \"ArrowLeft\": {\r\n        if (this.player.incX >= 0 && this.start)\r\n          this.player.incX = this.player.incX - 1;\r\n        this.moveFeet();\r\n        break;\r\n      }\r\n      case \"ArrowRight\": {\r\n        if (\r\n          this.player.incX <=\r\n            this.player.fieldWidth - this.player.playerWidth &&\r\n          this.start\r\n        )\r\n          this.player.incX = this.player.incX + 1;\r\n        this.moveFeet();\r\n        break;\r\n      }\r\n    }\r\n  }\r\n\r\n  playerWin() {\r\n    if (this.player.incY <= 10) {\r\n      console.log(\"You Won!\");\r\n      this.player.score = this.player.score + 1000;\r\n      this.level = this.level + 1;\r\n      for (let i = 0; i < this.vehicles.length; i++) {\r\n        if (this.level <= 2) this.vehicles[i].speedFactor = 2;\r\n        if (this.level > 2 && this.level <= 6) this.vehicles[i].speedFactor = 3;\r\n        if (this.level > 6 && this.level <= 10)\r\n          this.vehicles[i].speedFactor = 4;\r\n        if (this.level > 10) this.vehicles[i].speedFactor = 5;\r\n      }\r\n      this.win = true;\r\n      this.pause = true;\r\n    }\r\n  }\r\n\r\n  playerLoose() {\r\n    if (this.player.lives <= 0) {\r\n      console.log(\"You Lost\");\r\n      //this.player.score = this.player.score + 1000;\r\n\r\n      this.player.lives = this.lives;\r\n      this.player.score = 0;\r\n      this.level = 1;\r\n      this.vehicles.speedFactor = 1;\r\n\r\n      this.start = false;\r\n      this.loose = true;\r\n      this.pause = true;\r\n    }\r\n  }\r\n\r\n  playerHit() {\r\n    for (let i = 0; i < this.vehicles.length; i++) {\r\n      if (\r\n        this.vehicles[i].direction === 1 &&\r\n        this.vehicles[i].posX + this.vehicles[i].vehicleWidth >=\r\n          this.player.playerLeft &&\r\n        this.vehicles[i].posX <= this.player.playerRight &&\r\n        this.vehicles[i].posBottom > this.player.playerHead &&\r\n        this.vehicles[i].posTop < this.player.playerTail\r\n      ) {\r\n        this.player.lives--;\r\n        this.player.score = this.player.score - 100;\r\n        this.pause = true;\r\n        return;\r\n      } else if (\r\n        this.vehicles[i].direction === -1 &&\r\n        this.vehicles[i].posX <= this.player.playerRight &&\r\n        this.vehicles[i].posX + this.vehicles[i].vehicleWidth >=\r\n          this.player.playerLeft &&\r\n        this.vehicles[i].posBottom > this.player.playerHead &&\r\n        this.vehicles[i].posTop < this.player.playerTail\r\n      ) {\r\n        this.player.lives--;\r\n        this.player.score = this.player.score - 100;\r\n        this.pause = true;\r\n        return;\r\n      } else {\r\n        this.pause = false;\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://moose-game/./src/GameLogic.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/** @format */\r\n\r\nclass Player {\r\n  constructor(lives, fieldWidth, fieldHeight) {\r\n    this.i = 0;\r\n\r\n    this.fieldWidth = fieldWidth;\r\n    this.fieldHeight = fieldHeight;\r\n\r\n    this.playerLeft = 0; //left side\r\n    this.playerRight = 0;\r\n    this.playerHead = 0; //top of the head\r\n    this.playerTail = 0; //the butt\r\n\r\n    this.mooseBody = new Image();\r\n    this.mooseFeet = new Image();\r\n\r\n    this.mooseBody.src = \"src/assets/moose.svg\";\r\n    //this.mooseBody.addEventListener('load', () => {}, false);\r\n\r\n    this.mooseFeet.src = \"src/assets/moose-legs.svg\";\r\n    //this.mooseFeet.addEventListener('load', () => {}, false);\r\n\r\n    this.playerHeight = this.fieldHeight * 0.15;\r\n    this.playerWidth = this.playerHeight * 0.42;\r\n\r\n    this.incX = fieldWidth / 2 - this.playerWidth / 2;\r\n    this.incY = fieldHeight - this.playerHeight - 10;\r\n\r\n    this.lives = lives;\r\n    this.score = 0;\r\n  }\r\n\r\n  resetPlayer() {\r\n    this.incX = this.fieldWidth / 2;\r\n    this.incY = this.fieldHeight - this.playerHeight;\r\n    this.i = 0;\r\n  }\r\n\r\n  drawPlayer(ctx) {\r\n    const footSize = this.playerWidth * 0.4; //10\r\n\r\n    this.playerLeft = this.incX; //this.fieldWidth / 2 + this.incX - this.playerWidth / 2; //left side\r\n    this.playerRight = this.incX + this.playerWidth; //this.fieldWidth / 2 + (this.incX + this.playerWidth / 2);\r\n    this.playerHead = this.incY; //top of the head\r\n    this.playerTail = this.incY + this.playerHeight; //the butt\r\n\r\n    ctx.save(); //save the current canvas state\r\n\r\n    ctx.translate(this.incX, this.incY); //move canvas over to change player position.\r\n\r\n    //draw moose feet\r\n    ctx.drawImage(\r\n      this.mooseFeet,\r\n      (-1 * footSize) / 3,\r\n      this.playerHeight / 4 + this.i,\r\n      footSize,\r\n      footSize\r\n    ); //feet x and y positions are relative to the width and height of\r\n    ctx.drawImage(\r\n      this.mooseFeet,\r\n      0,\r\n      this.playerHeight - this.playerHeight / 3 - this.i,\r\n      footSize,\r\n      footSize\r\n    );\r\n\r\n    ctx.drawImage(\r\n      this.mooseFeet,\r\n      this.playerWidth - footSize / 1.4,\r\n      this.playerHeight / 4 - this.i,\r\n      footSize,\r\n      footSize\r\n    );\r\n    ctx.drawImage(\r\n      this.mooseFeet,\r\n      this.playerWidth - footSize,\r\n      this.playerHeight - this.playerHeight / 3 + this.i,\r\n      footSize,\r\n      footSize\r\n    );\r\n\r\n    ctx.drawImage(this.mooseBody, 0, 0, this.playerWidth, this.playerHeight);\r\n\r\n    ctx.restore(); //restore saved canvas state. Ready for next draw.\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://moose-game/./src/Player.js?");

/***/ }),

/***/ "./src/ScoreBoard.js":
/*!***************************!*\
  !*** ./src/ScoreBoard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScoreBoard)\n/* harmony export */ });\n/** @format */\r\n\r\nclass ScoreBoard {\r\n  constructor(font, fontSize, gameFieldWidth) {\r\n    this.font = font;\r\n    this.gameFieldWidth = gameFieldWidth;\r\n    this.fontSize = fontSize;\r\n\r\n    this.mooseIcon = new Image();\r\n    this.mooseIcon.src = \"src/assets/Moose-icon-blk.svg\";\r\n  }\r\n\r\n  drawScoreBoard(ctx, playerLives, score, level) {\r\n    ctx.font = `${this.fontSize}px ${this.font}`;\r\n    ctx.fillStyle = \"#000000\";\r\n\r\n    ctx.fillText(`Level ${level}`, 50, this.fontSize + 10);\r\n    ctx.fillText(score, 300, this.fontSize + 10);\r\n    ctx.fillText(\r\n      ` x ${playerLives}`,\r\n      this.gameFieldWidth - ctx.measureText(` x ${playerLives}`).width - 50,\r\n      this.fontSize + 10\r\n    );\r\n\r\n    ctx.drawImage(\r\n      this.mooseIcon,\r\n      this.gameFieldWidth - ctx.measureText(` x ${playerLives}`).width - 95,\r\n      10,\r\n      45,\r\n      30\r\n    );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://moose-game/./src/ScoreBoard.js?");

/***/ }),

/***/ "./src/Vehicle.js":
/*!************************!*\
  !*** ./src/Vehicle.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Vehicle)\n/* harmony export */ });\n/* harmony import */ var _vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehiclePool.js */ \"./src/vehiclePool.js\");\n/** @format */\r\n\r\n\r\n//const { vehiclePool } = require(\"./vehiclePool.js\");\r\n\r\nclass Vehicle {\r\n  constructor(d, gfWidth, gfHeight) {\r\n    this.frameReset = 0;\r\n    this.speedFactor = 1;\r\n    this.speed = 0;\r\n    this.frame = gfWidth; //current frame count\r\n    this.vehicleRange = gfWidth;\r\n    this.screenX = gfWidth;\r\n    this.screenY = gfHeight;\r\n    this.posX = 0; //define the X position of the front of the vehicle\r\n    this.posTop = 0;\r\n    this.posBottom = 0;\r\n    this.vehicleID = 0;\r\n    this.vehicleImg = new Image();\r\n\r\n    let id = this.getRandomID();\r\n\r\n    this.direction = d;\r\n\r\n    this.vehicleImg.src = _vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].vehicle;\r\n\r\n    this.vehicleWidth = _vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].width;\r\n    this.vehicleHeight = _vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].height;\r\n  }\r\n\r\n  getRandomID() {\r\n    const len = _vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; //get the length of the array holding the pool of fortune messages\r\n    let id = Math.floor(Math.random() * len);\r\n\r\n    return id;\r\n  }\r\n\r\n  vehicleStartPosition() {\r\n    if (this.direction === 1) {\r\n      this.posX = this.frame;\r\n    }\r\n\r\n    if (this.direction === -1) {\r\n      this.posX = this.screenX - 2 * this.vehicleWidth - this.frame;\r\n    }\r\n  }\r\n\r\n  drawVehicle(c, startY) {\r\n    this.posTop = startY;\r\n    this.posBottom = startY + this.vehicleHeight;\r\n\r\n    this.vehicleStartPosition();\r\n    c.fillStyle = \"#000000\";\r\n\r\n    c.save();\r\n\r\n    if (this.direction === 1) {\r\n      c.translate(this.posX, startY);\r\n      //making the height and width of the vehicle proportional to screen size.\r\n      c.drawImage(this.vehicleImg, 0, 0, this.vehicleWidth, this.vehicleHeight);\r\n    }\r\n\r\n    if (this.direction === -1) {\r\n      c.translate(\r\n        this.screenX - this.vehicleWidth - this.frame,\r\n        startY + this.vehicleHeight\r\n      );\r\n\r\n      c.rotate(Math.PI);\r\n\r\n      c.drawImage(this.vehicleImg, 0, 0, this.vehicleWidth, this.vehicleHeight);\r\n    }\r\n    c.restore();\r\n\r\n    if (this.frame >= this.frameReset + this.vehicleRange) {\r\n      //reset frame count every \"vehicleRange\" frames\r\n      let id = this.getRandomID();\r\n\r\n      this.vehicleWidth = (_vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].width / 1500) * this.screenX;\r\n      this.vehicleHeight = (_vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].height / 800) * this.screenY;\r\n\r\n      this.vehicleRange = this.screenX + this.vehicleWidth;\r\n\r\n      this.frameReset = this.frame - this.vehicleRange;\r\n      this.speed = Math.floor(Math.random() * 5) + this.speedFactor; //change the speed of the vehicle\r\n      this.frame = (this.vehicleWidth + 100) * -1;\r\n\r\n      this.vehicleImg.src = _vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].vehicle;\r\n    } else {\r\n      this.frame = this.frame + this.speed; //increment frame by carSpeed.\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://moose-game/./src/Vehicle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n/* harmony import */ var _Vehicle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vehicle.js */ \"./src/Vehicle.js\");\n/* harmony import */ var _GameLogic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameLogic.js */ \"./src/GameLogic.js\");\n/* harmony import */ var _ScoreBoard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScoreBoard.js */ \"./src/ScoreBoard.js\");\n/** @format */\r\n\r\n\r\n\r\n\r\n\r\n\r\n//const { Player } = require(\"./Player.js\");\r\n//const { Vehicle } = require(\"./Vehicle.js\");\r\n//const { GameLogic } = require(\"./GameLogic.js\");\r\n//const { ScoreBoard } = require(\"./ScoreBoard.js\");\r\n\r\nconst canvas = document.getElementById(\"playField\");\r\n\r\nconst ctx = canvas.getContext(\"2d\");\r\n\r\nconst gameFieldWidth = canvas.clientWidth;\r\nconst gameFieldHeight = canvas.clientHeight;\r\n\r\nconst backgroundColor = \"#1BCC0C\";\r\n\r\nconst roadImg = new Image();\r\nroadImg.src = \"src/assets/road.svg\";\r\n\r\nconst font = \"Gasoek One\";\r\n\r\nconst lane = [\r\n  new _Vehicle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1, gameFieldWidth, gameFieldHeight),\r\n  new _Vehicle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1, gameFieldWidth, gameFieldHeight),\r\n  new _Vehicle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](-1, gameFieldWidth, gameFieldHeight),\r\n  new _Vehicle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](-1, gameFieldWidth, gameFieldHeight),\r\n];\r\n\r\nconst moose = new _Player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, gameFieldWidth, gameFieldHeight);\r\n\r\nconst logic = new _GameLogic_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](lane, moose, gameLoop);\r\n\r\nconst scoreBoard = new _ScoreBoard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](font, 30, gameFieldWidth);\r\n\r\nlet frameCount = 0;\r\nlet frameSnapShot = 0;\r\n\r\nfunction background() {\r\n  ctx.fillStyle = backgroundColor;\r\n  ctx.fillRect(0, 0, gameFieldWidth, gameFieldHeight);\r\n\r\n  ctx.drawImage(\r\n    roadImg,\r\n    0,\r\n    gameFieldHeight * 0.2,\r\n    gameFieldWidth,\r\n    gameFieldHeight * 0.2\r\n  );\r\n\r\n  ctx.drawImage(\r\n    roadImg,\r\n    0,\r\n    gameFieldHeight * 0.6,\r\n    gameFieldWidth,\r\n    gameFieldHeight * 0.2\r\n  );\r\n}\r\n\r\nfunction message(text, interval = 50, flash = true) {\r\n  const textVisible = Math.ceil(frameCount / interval);\r\n\r\n  if (flash && textVisible % 2 === 0) {\r\n    ctx.fillStyle = \"#000000\";\r\n    ctx.font = `40px ${font}`;\r\n    ctx.fillText(\r\n      text,\r\n      gameFieldWidth / 2 - ctx.measureText(text).width / 2,\r\n      gameFieldHeight / 2 + 20\r\n    );\r\n  }\r\n\r\n  if (!flash) {\r\n    ctx.fillStyle = \"#000000\";\r\n    ctx.font = `40px ${font}`;\r\n    ctx.fillText(\r\n      text,\r\n      gameFieldWidth / 2 - ctx.measureText(text).width / 2,\r\n      gameFieldHeight / 2 + 20\r\n    );\r\n  }\r\n}\r\n\r\nfunction gameLoop() {\r\n  frameCount++;\r\n  background();\r\n\r\n  ctx.save();\r\n\r\n  if (logic.start) {\r\n    if (frameCount - frameSnapShot <= 100) {\r\n      message(\"Ready\", 40, false);\r\n    } else if (frameCount - frameSnapShot <= 300) {\r\n      message(\"GO!\", 30);\r\n    } else {\r\n      moose.drawPlayer(ctx);\r\n    }\r\n  } else {\r\n    message(\"Press Enter\", 50);\r\n    frameSnapShot = frameCount;\r\n  }\r\n\r\n  lane[0].drawVehicle(ctx, gameFieldHeight * 0.21);\r\n  lane[1].drawVehicle(ctx, gameFieldHeight * 0.3);\r\n\r\n  lane[2].drawVehicle(ctx, gameFieldHeight * 0.61);\r\n  lane[3].drawVehicle(ctx, gameFieldHeight * 0.7);\r\n\r\n  ctx.restore();\r\n\r\n  if (frameCount - frameSnapShot > 300) {\r\n    logic.movePlayer();\r\n\r\n    logic.playerHit();\r\n    logic.playerWin();\r\n    logic.playerLoose();\r\n  }\r\n\r\n  scoreBoard.drawScoreBoard(ctx, moose.lives, moose.score, logic.level);\r\n\r\n  if (logic.loose) {\r\n    message(\"Game Over\", 50, false);\r\n    return;\r\n  }\r\n  if (logic.pause) {\r\n    frameSnapShot = frameCount;\r\n    message(\"Press Enter\", 50, false);\r\n    return;\r\n  }\r\n\r\n  requestAnimationFrame(gameLoop);\r\n}\r\n\r\ngameLoop();\r\n\n\n//# sourceURL=webpack://moose-game/./src/index.js?");

/***/ }),

/***/ "./src/vehiclePool.js":
/*!****************************!*\
  !*** ./src/vehiclePool.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/** @format */\r\n\r\nconst vehiclePool = [\r\n  { id: 0, vehicle: \"src/assets/car-blue.svg\", width: 142, height: 70 },\r\n  { id: 1, vehicle: \"src/assets/car-green.svg\", width: 142, height: 70 },\r\n  { id: 2, vehicle: \"src/assets/car-orange.svg\", width: 142, height: 70 },\r\n  { id: 3, vehicle: \"src/assets/car-pink.svg\", width: 142, height: 70 },\r\n  { id: 4, vehicle: \"src/assets/bus-school.svg\", width: 242, height: 70 },\r\n  { id: 5, vehicle: \"src/assets/bus.svg\", width: 242, height: 70 },\r\n  { id: 6, vehicle: \"src/assets/transport.svg\", width: 308, height: 70 },\r\n  { id: 7, vehicle: \"src/assets/truck-blue.svg\", width: 163, height: 70 },\r\n  { id: 8, vehicle: \"src/assets/truck-grey.svg\", width: 163, height: 70 },\r\n  { id: 9, vehicle: \"src/assets/truck-olive.svg\", width: 163, height: 70 },\r\n  { id: 10, vehicle: \"src/assets/truck-purple.svg\", width: 163, height: 70 },\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vehiclePool);\r\n\n\n//# sourceURL=webpack://moose-game/./src/vehiclePool.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;