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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameLogic)\n/* harmony export */ });\n/** @format */\r\n\r\nclass GameLogic {\r\n  constructor(vehicles, player) {\r\n    this.vehicles = vehicles;\r\n    this.player = player;\r\n    this.pause = false;\r\n  }\r\n\r\n  playerHit() {\r\n    let hit = false;\r\n\r\n    for (let i = 0; i < this.vehicles.length; i++) {\r\n      if (\r\n        this.vehicles[i].direction === 1 &&\r\n        this.vehicles[i].posX + this.vehicles[i].vehicleWidth >=\r\n          this.player.playerLeft &&\r\n        this.vehicles[i].posX <= this.player.playerRight &&\r\n        this.vehicles[i].posBottom > this.player.playerHead &&\r\n        this.vehicles[i].posTop < this.player.playerTail\r\n      )\r\n        hit = true;\r\n\r\n      if (\r\n        this.vehicles[i].direction === -1 &&\r\n        this.vehicles[i].posX <= this.player.playerRight &&\r\n        this.vehicles[i].posX + this.vehicles[i].vehicleWidth >=\r\n          this.player.playerLeft &&\r\n        this.vehicles[i].posBottom > this.player.playerHead &&\r\n        this.vehicles[i].posTop < this.player.playerTail\r\n      )\r\n        hit = true;\r\n    }\r\n\r\n    return hit;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://moose-game/./src/GameLogic.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/** @format */\r\n\r\nclass Player {\r\n  constructor(lives, fieldWidth, fieldHeight) {\r\n    this.i = 0;\r\n\r\n    this.fieldWidth = fieldWidth;\r\n    this.fieldHeight = fieldHeight;\r\n\r\n    this.playerLeft = 0; //left side\r\n    this.playerRight = 0;\r\n    this.playerHead = 0; //top of the head\r\n    this.playerTail = 0; //the butt\r\n\r\n    this.mooseBody = new Image();\r\n    this.mooseFeet = new Image();\r\n\r\n    this.lives = 0; //number of lives given to the user, defined in the constructor\r\n    this.livesLeft = 0; //number of lives left. Counted during game play\r\n    ///////////////////////////////////////////////////////////////////////\r\n\r\n    this.livesLeft = lives;\r\n    this.lives = lives;\r\n\r\n    this.mooseBody.src = \"src/assets/moose.svg\";\r\n    //this.mooseBody.addEventListener('load', () => {}, false);\r\n\r\n    this.mooseFeet.src = \"src/assets/moose-legs.svg\";\r\n    //this.mooseFeet.addEventListener('load', () => {}, false);\r\n\r\n    this.playerHeight = this.fieldHeight * 0.15;\r\n    this.playerWidth = this.playerHeight * 0.42;\r\n\r\n    this.incX = fieldWidth / 2 - this.playerWidth / 2;\r\n    this.incY = fieldHeight - this.playerHeight;\r\n  }\r\n\r\n  resetPlayer() {\r\n    this.incX = this.fieldWidth / 2;\r\n    this.incY = 0;\r\n    this.i = 0;\r\n  }\r\n\r\n  drawPlayer(ctx) {\r\n    //player height and width in relation to field size.\r\n    //this.playerWidth = this.fieldWidth * 0.03;\r\n    //this.playerHeight = this.fieldHeight * 0.15;\r\n    //player foot size in relation to player width\r\n    const footSize = this.playerWidth * 0.4; //10\r\n\r\n    this.playerLeft = this.incX; //this.fieldWidth / 2 + this.incX - this.playerWidth / 2; //left side\r\n    this.playerRight = this.incX + this.playerWidth; //this.fieldWidth / 2 + (this.incX + this.playerWidth / 2);\r\n    this.playerHead = this.incY; //top of the head\r\n    this.playerTail = this.incY + this.playerHeight; //the butt\r\n\r\n    ctx.save(); //save the current canvas state\r\n\r\n    ctx.translate(this.incX, this.incY); //move canvas over to change player position.\r\n\r\n    //draw moose feet\r\n    ctx.drawImage(this.mooseFeet, -5, 25 + this.i, footSize, footSize); //feet x and y positions are relative to the width and height of\r\n    ctx.drawImage(this.mooseFeet, 0, 50 - this.i, footSize, footSize);\r\n\r\n    ctx.drawImage(this.mooseFeet, 24, 25 + this.i, footSize, footSize);\r\n    ctx.drawImage(this.mooseFeet, 19, 50 + this.i, footSize, footSize);\r\n\r\n    ctx.drawImage(this.mooseBody, 0, 0, this.playerWidth, this.playerHeight);\r\n\r\n    ctx.restore(); //restore saved canvas state. Ready for next draw.\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://moose-game/./src/Player.js?");

/***/ }),

/***/ "./src/Vehicle.js":
/*!************************!*\
  !*** ./src/Vehicle.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Vehicle)\n/* harmony export */ });\n/* harmony import */ var _vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehiclePool.js */ \"./src/vehiclePool.js\");\n/** @format */\r\n\r\n\r\n\r\nclass Vehicle {\r\n  constructor(d, gfWidth, gfHeight) {\r\n    this.frameReset = 0;\r\n    this.speed = Math.floor(Math.random() * 5) + 2; //starting speed\r\n    this.frame = gfWidth; //current frame count\r\n    this.vehicleRange = gfWidth;\r\n    this.screenX = gfWidth;\r\n    this.screenY = gfHeight;\r\n    this.posX = 0; //define the X position of the front of the vehicle\r\n    this.posTop = 0;\r\n    this.posBottom = 0;\r\n    this.vehicleID = 0;\r\n    this.vehicleImg = new Image();\r\n\r\n    let id = this.getRandomID();\r\n\r\n    this.direction = d;\r\n\r\n    this.vehicleImg.src = _vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].vehicle;\r\n\r\n    this.vehicleWidth = _vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].width;\r\n    this.vehicleHeight = _vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].height;\r\n  }\r\n\r\n  getRandomID() {\r\n    const len = _vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; //get the length of the array holding the pool of fortune messages\r\n    let id = Math.floor(Math.random() * len);\r\n\r\n    return id;\r\n  }\r\n\r\n  drawVehicle(c, startY) {\r\n    this.posTop = startY;\r\n    this.posBottom = startY + this.vehicleHeight;\r\n\r\n    if (this.direction === 1) {\r\n      this.posX = this.frame;\r\n    }\r\n\r\n    if (this.direction === -1) {\r\n      this.posX = this.screenX - 2 * this.vehicleWidth - this.frame;\r\n    }\r\n    c.fillStyle = \"#000000\";\r\n\r\n    c.save();\r\n\r\n    if (this.direction === 1) {\r\n      c.translate(this.posX, startY);\r\n      //making the height and width of the vehicle proportional to screen size.\r\n      c.drawImage(this.vehicleImg, 0, 0, this.vehicleWidth, this.vehicleHeight);\r\n    }\r\n\r\n    if (this.direction === -1) {\r\n      c.translate(\r\n        this.screenX - this.vehicleWidth - this.frame,\r\n        startY + this.vehicleHeight\r\n      );\r\n\r\n      c.rotate(Math.PI);\r\n\r\n      c.drawImage(this.vehicleImg, 0, 0, this.vehicleWidth, this.vehicleHeight);\r\n    }\r\n    c.restore();\r\n\r\n    if (this.frame >= this.frameReset + this.vehicleRange) {\r\n      //reset frame count every \"vehicleRange\" frames\r\n      let id = this.getRandomID();\r\n\r\n      this.vehicleWidth = (_vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].width / 1500) * this.screenX;\r\n      this.vehicleHeight = (_vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].height / 800) * this.screenY;\r\n\r\n      this.vehicleRange = this.screenX + this.vehicleWidth;\r\n\r\n      this.frameReset = this.frame - this.vehicleRange;\r\n      this.speed = Math.floor(Math.random() * 5) + 2; //change the speed of the vehicle\r\n      this.frame = (this.vehicleWidth + 100) * -1;\r\n\r\n      this.vehicleImg.src = _vehiclePool_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].vehicle;\r\n      //this.vehicleWidth = vehiclePool[id].width;\r\n      //this.vehicleHeight = vehiclePool[id].height;\r\n    } else {\r\n      this.frame = this.frame + this.speed; //increment frame by carSpeed.\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://moose-game/./src/Vehicle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n/* harmony import */ var _Vehicle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vehicle.js */ \"./src/Vehicle.js\");\n/* harmony import */ var _GameLogic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameLogic.js */ \"./src/GameLogic.js\");\n/** @format */\r\n\r\n\r\n\r\n\r\n\r\nconst canvas = document.getElementById(\"playField\");\r\n\r\nconst ctx = canvas.getContext(\"2d\");\r\n\r\nconst gameFieldWidth = canvas.clientWidth;\r\nconst gameFieldHeight = canvas.clientHeight;\r\n\r\nconst backgroundColor = \"#1BCC0C\";\r\n\r\nconst roadImg = new Image();\r\nroadImg.src = \"src/assets/road.svg\";\r\n\r\nlet i = 0;\r\n\r\nconst lane = [\r\n  new _Vehicle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1, gameFieldWidth, gameFieldHeight),\r\n  new _Vehicle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1, gameFieldWidth, gameFieldHeight),\r\n  new _Vehicle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](-1, gameFieldWidth, gameFieldHeight),\r\n  new _Vehicle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](-1, gameFieldWidth, gameFieldHeight),\r\n];\r\n\r\nconst moose = new _Player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, gameFieldWidth, gameFieldHeight);\r\ndocument.addEventListener(\"keydown\", (event) => movePlayer(event.key));\r\n\r\nconst logic = new _GameLogic_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](lane, moose);\r\n\r\nlet changeDir = 1;\r\n\r\nfunction background() {\r\n  ctx.fillStyle = backgroundColor;\r\n  ctx.fillRect(0, 0, gameFieldWidth, gameFieldHeight);\r\n  ctx.drawImage(\r\n    roadImg,\r\n    0,\r\n    gameFieldHeight * 0.2,\r\n    gameFieldWidth,\r\n    gameFieldHeight * 0.2\r\n  );\r\n\r\n  ctx.drawImage(\r\n    roadImg,\r\n    0,\r\n    gameFieldHeight * 0.6,\r\n    gameFieldWidth,\r\n    gameFieldHeight * 0.2\r\n  );\r\n}\r\n\r\nfunction movePlayer(k) {\r\n  switch (k) {\r\n    case \"ArrowUp\": {\r\n      moose.incY = moose.incY - 10;\r\n      break;\r\n    }\r\n    case \"ArrowDown\": {\r\n      moose.incY = moose.incY + 10;\r\n      break;\r\n    }\r\n    case \"ArrowLeft\": {\r\n      moose.incX = moose.incX - 10;\r\n      break;\r\n    }\r\n    case \"ArrowRight\": {\r\n      moose.incX = moose.incX + 10;\r\n      break;\r\n    }\r\n  }\r\n\r\n  console.log(`${moose.playerRight}  ${lane[3].posX}`);\r\n\r\n  if (moose.i === 8) changeDir = -2;\r\n  if (moose.i === -8) changeDir = 2;\r\n\r\n  moose.i = moose.i + changeDir;\r\n}\r\n\r\nfunction gameLoop() {\r\n  if (logic.pause === true) console.log(\"Hit from left\");\r\n\r\n  background();\r\n\r\n  ctx.save();\r\n\r\n  moose.drawPlayer(ctx);\r\n\r\n  lane[0].drawVehicle(ctx, gameFieldHeight * 0.21);\r\n  lane[1].drawVehicle(ctx, gameFieldHeight * 0.3);\r\n\r\n  lane[2].drawVehicle(ctx, gameFieldHeight * 0.61);\r\n  lane[3].drawVehicle(ctx, gameFieldHeight * 0.7);\r\n\r\n  ctx.restore();\r\n\r\n  if (logic.playerHit()) return;\r\n\r\n  requestAnimationFrame(gameLoop);\r\n}\r\n\r\ngameLoop();\r\n\n\n//# sourceURL=webpack://moose-game/./src/index.js?");

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