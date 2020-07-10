/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n// 0: empty\n// 1: wall\n// 2: coin\n// 3: big coin\n\nconst Board = [\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],\n    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],\n    [1, 3, 1, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 3, 2, 2, 1],\n    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],\n    [1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],\n    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],\n    [1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],\n    [1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],\n    [0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0],\n    [1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],\n    [1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],\n    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],\n    [1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1],\n    [1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1],\n    [1, 3, 1, 2, 1, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 3, 1, 2, 1],\n    [1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1],\n    [1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1],\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n];\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pacman; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n/* harmony import */ var _ghost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ghost */ \"./src/ghost.js\");\n\n\n\n\nclass Pacman {\n    constructor(canvas) {\n        this.ctx = canvas.getContext(\"2d\");\n        this.dimensions = { width: canvas.width, height: canvas.height };\n\n        window.addEventListener(\"keydown\", (e) => this.registerEvents(e));\n        this.score = document.getElementById(\"score\");\n        this.restart();\n    }\n\n    restart() {\n        this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n        this.main = new _main__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n        this.ghost = new _ghost__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.dimensions);\n\n        this.animate();\n    }\n\n    registerEvents(e) {\n        e.preventDefault();\n        if (e.keyCode === 39) {\n            this.main.move(\"right\")\n        } else if (e.keyCode === 37) {\n            this.main.move(\"left\")\n        } else if (e.keyCode === 38) {\n            this.main.move(\"up\")\n        } else if (e.keyCode === 40) {\n            this.main.move(\"down\")\n        }\n        // put on end because then there will be lag\n        this.animate();\n    }\n\n    animate() {\n        this.level.animate(this.ctx);\n        this.main.animate(this.ctx);\n        this.ghost.animate(this.ctx);\n        this.drawScore();\n    }\n\n    drawScore() {\n        this.score.innerHTML = this.main.score;\n    }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/ghost.js":
/*!**********************!*\
  !*** ./src/ghost.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ghost; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nclass Ghost {\n    constructor(dimensions) {\n        this.dimensions = dimensions;\n        this.redX = 300;\n        this.redY = 210;\n        this.pinkX = 270;\n        this.pinkY = 270;\n        this.orangeX = 300;\n        this.orangeY = 300;\n        this.blueX = 320;\n        this.blueY = 270;\n    }\n\n    animate(ctx) {\n        this.drawGhost(ctx);\n    }\n\n    drawGhost(ctx) {\n        // red\n        // eyes right\n        Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"loadImage\"])('../images/ghosts.png')\n            .then(image => {\n                ctx.drawImage(image, \n                    0, 0,\n                    180, 180,\n                    this.redX-13, this.redY-13,\n                    30, 30)\n            });\n\n        // pink\n        // eyes up\n        Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"loadImage\"])('../images/ghosts.png')\n            .then(image => {\n                ctx.drawImage(image,\n                    180, 360,\n                    180, 180,\n                    this.pinkX-13, this.pinkY-13,\n                    30, 30)\n            });\n\n        // orange\n        // eyes down\n        Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"loadImage\"])('../images/ghosts.png')\n            .then(image => {\n                ctx.drawImage(image,\n                    400, 560,\n                    180, 180,\n                    this.orangeX-13, this.orangeY-13,\n                    30, 30)\n            });\n        \n        \n        // blue\n        // eyes left\n        Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"loadImage\"])('../images/ghosts.png')\n            .then(image => {\n                ctx.drawImage(image,\n                    580, 160,\n                    180, 180,\n                    this.blueX, this.blueY,\n                    30, 30)\n            });\n\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ghost.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('pacman-game');\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nclass Level { \n    constructor(dimensions, board) {\n        this.dimensions = dimensions;\n        this.board = _board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"];\n    }\n\n    animate(ctx) {\n        this.drawBackground(ctx);\n    }\n\n    drawBackground(ctx) {\n        // Black background\n        ctx.fillStyle = \"black\";\n        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n\n        // Tiles\n        // Temporary just to see\n        var bw = this.dimensions.width-30;\n        var bh = this.dimensions.height-30;\n        var p = 15;\n        for (var x = 0; x <= bw; x += 30) {\n            ctx.moveTo(0.5 + x + p, p);\n            ctx.lineTo(0.5 + x + p, bh + p);\n        }\n\n        for (var x = 0; x <= bh; x += 30) {\n            ctx.moveTo(p, 0.5 + x + p);\n            ctx.lineTo(bw + p, 0.5 + x + p);\n        }\n        ctx.strokeStyle = \"white\";\n        ctx.stroke();\n        this.drawLines(ctx);\n        this.drawInside(ctx);\n        this.drawDots(ctx);\n    }\n\n    drawLines(ctx) {\n        // top line\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(30,30);\n        ctx.lineTo(570,30);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // inner\n        ctx.beginPath();\n        ctx.moveTo(40, 40);\n        ctx.lineTo(560, 40);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n        \n\n        // left line\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(30, 30);\n        ctx.lineTo(30, 240);\n        ctx.lineTo(120, 240);\n        ctx.lineTo(120, 270);\n        ctx.lineTo(20, 270);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(20, 330);\n        ctx.lineTo(120, 330);\n        ctx.lineTo(120, 360);\n        ctx.lineTo(30, 360);\n        ctx.lineTo(30, 570);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // inner\n        ctx.beginPath();\n        ctx.moveTo(40, 40);\n        ctx.lineTo(40, 230);\n        ctx.lineTo(130, 230);\n        ctx.lineTo(130, 280);\n        ctx.lineTo(20, 280);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(20, 320);\n        ctx.lineTo(130, 320);\n        ctx.lineTo(130, 370);\n        ctx.lineTo(40, 370);\n        ctx.lineTo(40, 560);\n        ctx.lineTo(560, 560);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(30, 570);\n        ctx.lineTo(570, 570);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // right\n        // inner\n        ctx.beginPath();\n        ctx.moveTo(560, 40);\n        ctx.lineTo(560, 230);\n        ctx.lineTo(470, 230);\n        ctx.lineTo(470, 280);\n        ctx.lineTo(580, 280);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(580, 320);\n        ctx.lineTo(470, 320);\n        ctx.lineTo(470, 370);\n        ctx.lineTo(560, 370);\n        ctx.lineTo(560, 560);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(570, 30);\n        ctx.lineTo(570, 240);\n        ctx.lineTo(480, 240);\n        ctx.lineTo(480, 270);\n        ctx.lineTo(580, 270);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(580, 330);\n        ctx.lineTo(480, 330);\n        ctx.lineTo(480, 360);\n        ctx.lineTo(570, 360);\n        ctx.lineTo(570, 570);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n    }   \n\n    drawInside(ctx) {\n        // letter n\n        ctx.beginPath();\n        ctx.moveTo(80, 80);\n        ctx.lineTo(160, 80);\n        ctx.moveTo(80, 80);\n        ctx.lineTo(80, 190);\n        ctx.lineTo(100, 190);\n        ctx.lineTo(100, 100);\n        ctx.lineTo(140, 100);\n        ctx.lineTo(140, 190);\n        ctx.lineTo(160, 190);\n        ctx.lineTo(160, 80);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // letter g\n        ctx.beginPath();\n        ctx.moveTo(200, 80);\n        ctx.lineTo(280, 80);\n        ctx.moveTo(200, 80);\n        ctx.lineTo(200, 190);\n        ctx.lineTo(280, 190);\n        ctx.lineTo(280, 140);\n        ctx.lineTo(260, 140);\n        ctx.lineTo(260, 170);\n        ctx.lineTo(220, 170);\n        ctx.lineTo(220, 100);\n        ctx.lineTo(280, 100);\n        ctx.lineTo(280, 80);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // letter O\n        ctx.beginPath();\n        ctx.moveTo(320, 80);\n        ctx.lineTo(400, 80);\n        ctx.lineTo(400, 190);\n        ctx.lineTo(320, 190);\n        ctx.lineTo(320, 80);\n        ctx.moveTo(350, 110);\n        ctx.lineTo(370, 110);\n        ctx.lineTo(370, 160);\n        ctx.lineTo(350, 160);\n        ctx.lineTo(350, 110);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // letter c\n        ctx.beginPath();\n        ctx.moveTo(440, 80);\n        ctx.lineTo(520, 80);\n        ctx.lineTo(520, 100);\n        ctx.lineTo(460, 100);\n        ctx.lineTo(460, 150);\n        ctx.lineTo(520, 150);\n        ctx.lineTo(520, 190);\n        ctx.lineTo(440, 190);\n        ctx.lineTo(440, 80);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // left line to rectangle\n        ctx.beginPath();\n        ctx.moveTo(170, 230);\n        ctx.lineTo(190, 230);\n        ctx.lineTo(190, 370);\n        ctx.lineTo(170, 370);\n        ctx.lineTo(170, 230);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // rectangle with ghosts insides\n        // top\n        // left\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(230, 230);\n        ctx.lineTo(280, 230);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // inner\n        ctx.beginPath();\n        ctx.moveTo(240, 240);\n        ctx.lineTo(280, 240);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // white part\n        ctx.fillStyle = \"lavender\";\n        ctx.fillRect(280, 230, 40, 10);\n\n        // right\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(320, 230);\n        ctx.lineTo(370, 230);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // inner\n        ctx.beginPath();\n        ctx.moveTo(320, 240);\n        ctx.lineTo(360, 240);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // rest\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(370, 230);\n        ctx.lineTo(370, 370);\n        ctx.lineTo(230, 370);\n        ctx.lineTo(230, 230);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // inner\n        ctx.beginPath();\n        ctx.moveTo(360, 240);\n        ctx.lineTo(360, 360);\n        ctx.lineTo(240, 360);\n        ctx.lineTo(240, 240);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // right rectangle\n        ctx.beginPath();\n        ctx.moveTo(410, 230);\n        ctx.lineTo(410, 370);\n        ctx.lineTo(430, 370);\n        ctx.lineTo(430, 230);\n        ctx.lineTo(410, 230);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // lower letters\n        // t\n        ctx.beginPath();\n        ctx.moveTo(140,410)\n        ctx.lineTo(160, 410);\n        ctx.lineTo(160, 440);\n        ctx.lineTo(190, 440);\n        ctx.lineTo(190, 460);\n        ctx.lineTo(160, 460);\n        ctx.lineTo(160, 500);\n        ctx.lineTo(190, 500);\n        ctx.lineTo(190, 520);\n        ctx.lineTo(140, 520);\n        ctx.lineTo(140, 460);\n        ctx.lineTo(110, 460);\n        ctx.lineTo(110, 440);\n        ctx.lineTo(140, 440);\n        ctx.lineTo(140, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // h\n        ctx.beginPath();\n        ctx.moveTo(250, 410);\n        ctx.lineTo(250, 470);\n        ctx.lineTo(310, 470);\n        ctx.lineTo(310, 520);\n        ctx.lineTo(290, 520);\n        ctx.lineTo(290, 490);\n        ctx.lineTo(250, 490);\n        ctx.lineTo(250, 520);\n        ctx.lineTo(250, 520);\n        ctx.lineTo(230, 520);\n        ctx.lineTo(230, 410);\n        ctx.lineTo(250, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // i \n        // dot of i\n        ctx.beginPath();\n        ctx.moveTo(350, 410);\n        ctx.lineTo(350, 430);\n        ctx.lineTo(370, 430);\n        ctx.lineTo(370, 410);\n        ctx.lineTo(350, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(350, 470);\n        ctx.lineTo(370, 470);\n        ctx.lineTo(370, 520);\n        ctx.lineTo(350, 520);\n        ctx.lineTo(350, 470);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // letter l\n        ctx.beginPath();\n        ctx.moveTo(410, 410);\n        ctx.lineTo(430, 410);\n        ctx.lineTo(430, 520);\n        ctx.lineTo(410, 520);\n        ctx.lineTo(410, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // letter y\n        ctx.beginPath();\n        ctx.moveTo(470, 410);\n        ctx.lineTo(490, 410);\n        ctx.lineTo(490, 440);\n        ctx.lineTo(500, 440);\n        ctx.lineTo(500, 410);\n        ctx.lineTo(520, 410);\n        ctx.lineTo(520, 520);\n        ctx.lineTo(470, 520);\n        ctx.lineTo(470, 500);\n        ctx.lineTo(500, 500);\n        ctx.lineTo(500, 460);\n        ctx.lineTo(470, 460);\n        ctx.lineTo(470, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // fill in spots so no more two squares next to one\n        // colon left to t\n        ctx.beginPath();\n        ctx.moveTo(80, 410)\n        ctx.lineTo(100, 410);\n        ctx.lineTo(100, 460);\n        ctx.lineTo(80, 460);\n        ctx.lineTo(80, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(80, 470)\n        ctx.lineTo(100, 470);\n        ctx.lineTo(100, 520);\n        ctx.lineTo(80, 520);\n        ctx.lineTo(80, 470);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(200, 410);\n        ctx.lineTo(220, 410);\n        ctx.lineTo(220, 430);\n        ctx.lineTo(200, 430);\n        ctx.lineTo(200, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(290, 410);\n        ctx.lineTo(310, 410);\n        ctx.lineTo(310, 430);\n        ctx.lineTo(290, 430);\n        ctx.lineTo(290, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n    }\n\n    drawDots(ctx) {\n        // big dots\n        for(let i=0; i< this.board[0].length; i++) {\n            for(let j=0; j< this.board.length; j++) {\n                if (this.board[i][j] === 3) {\n                    ctx.beginPath();\n                    ctx.arc((j+1)*30, (i+1)*30, 6, 0, 2 * Math.PI);\n                    ctx.fillStyle = \"lavender\";\n                    ctx.fill();\n                }\n            }\n        }\n\n        // tiny dots\n        for (let i = 0; i < this.board[0].length; i++) {\n            for (let j = 0; j <this.board.length; j++) {\n                if (this.board[i][j] === 2) {\n                    ctx.beginPath();\n                    ctx.arc((j + 1) * 30, (i + 1) * 30, 2, 0, 2 * Math.PI);\n                    ctx.fillStyle = \"white\";\n                    ctx.fill();\n                }\n            }\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nclass Main {\n    constructor(dimensions) {\n        this.dimensions = dimensions;\n\n        // starting position of pacman\n        this.x = 300;\n        this.y = 540;\n\n        // starts the mouth at the \"widest\"\n        // and closes mouth first before opening\n        this.mouth = 0;\n        this.backwards = false; \n\n        // sets right to true for its starting position\n        this.right = true;\n        this.left = false;\n        this.up = false;\n        this.down = false;\n\n        // to keep score\n        this.score = 0;\n        this.board = _board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"];\n    }\n\n    animate(ctx) {\n        this.drawCharacter(ctx);\n    }\n\n    drawCharacter(ctx) {\n        // mouth open pacman\n        // pacman has weird white outline because i added the stoke to white in level (TEMP)\n        let angleDiff = 0.05;\n        let sub = this.mouth * angleDiff;\n        ctx.beginPath();\n\n        if (this.right) {\n            ctx.arc(this.x, this.y, 15, (0.3 - sub) * Math.PI, (1.7 + sub) * Math.PI);\n            ctx.lineTo(this.x - 4, this.y);\n        } else if (this.left) {\n            ctx.arc(this.x, this.y, 15, (1.3 - sub) * Math.PI, (0.7 +sub) * Math.PI);\n            ctx.lineTo(this.x+4, this.y);\n        } else if (this.up) {\n            ctx.arc(this.x, this.y, 15, (1.8-sub) * Math.PI, (1.2+sub) * Math.PI);\n            ctx.lineTo(this.x, this.y+4);\n        } else if (this.down) {\n            ctx.arc(this.x, this.y, 15, (0.8-sub) * Math.PI, (0.2+sub) * Math.PI);\n            ctx.lineTo(this.x, this.y- 4);\n        }\n\n        ctx.closePath();\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n    }\n\n    move(way) {\n        if (this.mouth === 0) {\n            this.backwards = false;\n        } else if (this.mouth === 5) {\n            this.backwards = true;\n        }\n\n        if (this.backwards === true) {\n            this.mouth -= 1;\n        } else {\n            this.mouth += 1;\n        }\n\n        this.resetDirection();\n        this.switchSide();\n        this.collectCoin();\n\n        if (way === \"right\") {\n            if (this.board[Math.round(this.y / 30) - 1][Math.round(this.x  / 30)] !== 1\n                && this.board[Math.floor(this.y / 30) - 1][Math.floor(this.x / 30)] !== 1) {\n                this.x+=30;\n            }\n            this.right = true;\n        } else if (way === \"left\") {\n            if (this.board[Math.round(this.y / 30) - 1][Math.round(this.x / 30) - 2] !== 1\n                && this.board[Math.floor(this.y / 30) - 1][Math.floor(this.x / 30) - 2] !== 1) {\n                this.x-=30;\n            }\n            this.left = true;\n        } else if (way === \"up\") {\n            if (this.board[Math.round(this.y / 30) - 2][Math.round(this.x / 30) - 1] !== 1\n                && this.board[Math.floor(this.y / 30) - 2][Math.floor(this.x / 30) - 1] !== 1) {\n                this.y-=30;\n            }\n            this.up = true;\n        } else if (way === \"down\") {\n            if (this.board[Math.round(this.y / 30)][Math.round(this.x / 30) - 1] !== 1\n                && this.board[Math.floor(this.y / 30)][Math.floor(this.x / 30) - 1] !== 1) {\n                this.y+=30;\n            }\n            this.down = true;\n        }\n    }\n\n    resetDirection() {\n        this.right = false;\n        this.left = false;\n        this.up = false;\n        this.down = false;\n    }\n    \n    switchSide() {\n        if (this.x === 35 && 295 <= this.y && this.y <= 310) {\n            this.x = 565;\n        } else if (this.x === 565 && 295 <= this.y && this.y <= 310) {\n            this.x = 35;\n        }\n    }\n\n    collectCoin() {\n        let wholeNumX = (((this.x / 30) - 1) - Math.floor((this.x / 30) - 1)) === 0;\n        let wholeNumY = (((this.y / 30) - 1) - Math.floor((this.y / 30) - 1)) === 0;\n\n        if (wholeNumX && wholeNumY) {\n            if (this.board[(this.y/30)-1][(this.x/30)-1] === 2) {\n                this.board[(this.y / 30) - 1][(this.x / 30) - 1] = 0;\n                this.score += 10;\n                // small dots are worth 10 each\n            } else if (this.board[(this.y / 30) - 1][(this.x / 30) - 1] === 3) {\n                this.board[(this.y / 30) - 1][(this.x / 30) - 1] = 0;\n                this.score += 60;\n                // big dots are worth 50 each\n            }\n        }\n    }\n\n\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: loadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImage\", function() { return loadImage; });\nfunction loadImage(url) {\n    return new Promise (resolve => {\n        const img = new Image();\n        img.addEventListener('load', () => {\n            resolve(img);\n        });\n        img.src = url;\n    })\n}\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });