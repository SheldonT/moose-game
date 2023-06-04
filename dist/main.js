/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/road.svg":
/*!*****************************!*\
  !*** ./src/assets/road.svg ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = \"<svg version=\\\"1.1\\\" viewBox=\\\"0 0 1920 218.03\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#3f3432;}.cls-3,.cls-4{fill:none;stroke:#f8de25;stroke-miterlimit:10;stroke-width:6px;}.cls-4{stroke-dasharray:0 0 40 40;}</style></defs><rect class=\\\"cls-2\\\" y=\\\"9.29\\\" width=\\\"1920\\\" height=\\\"198.85\\\"></rect><rect class=\\\"cls-1\\\" width=\\\"1920\\\" height=\\\"10.03\\\"></rect><rect class=\\\"cls-1\\\" y=\\\"208\\\" width=\\\"1920\\\" height=\\\"10.03\\\"></rect><line class=\\\"cls-3\\\" x2=\\\"20\\\" y1=\\\"108.72\\\" y2=\\\"108.72\\\"></line><line class=\\\"cls-4\\\" x1=\\\"60\\\" x2=\\\"1880\\\" y1=\\\"108.72\\\" y2=\\\"108.72\\\"></line><line class=\\\"cls-3\\\" x1=\\\"1900\\\" x2=\\\"1920\\\" y1=\\\"108.72\\\" y2=\\\"108.72\\\"></line></svg>\"\n\n//# sourceURL=webpack://moose-game/./src/assets/road.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_road_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../src/assets/road.svg */ \"./src/assets/road.svg\");\n/* harmony import */ var _src_assets_road_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_assets_road_svg__WEBPACK_IMPORTED_MODULE_0__);\n/** @format */\r\n\r\n\r\n\r\nconst canvas = document.getElementById(\"playField\");\r\nconst ctx = canvas.getContext(\"2d\");\r\n\r\nconst gameFieldWidth = canvas.clientWidth;\r\nconst gameFieldHeight = canvas.clientHeight;\r\n\r\nconst backgroundColor = \"#1BCC0C\";\r\n\r\nconst roadImg = new Image();\r\nroadImg.src = (_src_assets_road_svg__WEBPACK_IMPORTED_MODULE_0___default());\r\n\r\n//console.log(roadImg);\r\n\r\nlet i = 0;\r\n\r\n//console.log(vehiclePool);\r\n\r\nfunction background() {\r\n  ctx.fillStyle = backgroundColor;\r\n  ctx.fillRect(0, 0, gameFieldWidth, gameFieldHeight);\r\n  /*ctx.drawImage(\r\n    roadImg,\r\n    0,\r\n    gameFieldHeight * 0.2,\r\n    gameFieldWidth,\r\n    gameFieldHeight * 0.2\r\n  );\r\n\r\n  ctx.drawImage(\r\n    roadImg,\r\n    0,\r\n    gameFieldHeight * 0.6,\r\n    gameFieldWidth,\r\n    gameFieldHeight * 0.2\r\n  );*/\r\n}\r\n\r\nfunction gameLoop() {\r\n  i = i + 1;\r\n  const angle = (i * Math.PI) / 180;\r\n\r\n  background();\r\n\r\n  ctx.save();\r\n  ctx.translate(gameFieldWidth / 2, gameFieldHeight / 2);\r\n\r\n  ctx.rotate(angle);\r\n  ctx.fillStyle = \"#2700FF\";\r\n  ctx.fillRect(-50, -50, 100, 100);\r\n  ctx.restore();\r\n\r\n  //console.log(i);\r\n  requestAnimationFrame(gameLoop);\r\n}\r\n\r\ngameLoop();\r\n\n\n//# sourceURL=webpack://moose-game/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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