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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pacman; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n\nclass Pacman {\n    constructor(canvas) {\n        this.ctx = canvas.getContext(\"2d\");\n        this.dimensions = { width: canvas.width, height: canvas.height };\n        this.restart();\n    }\n\n    restart() {\n        this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n\n        this.animate();\n    }\n\n    animate() {\n        this.level.animate(this.ctx);\n    }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('pacman');\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nclass Level { \n    constructor(dimensions) {\n        this.dimensions = dimensions;\n    }\n\n    animate(ctx) {\n        this.drawBackground(ctx);\n    }\n\n    drawBackground(ctx) {\n        // Black background\n        ctx.fillStyle = \"black\";\n        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n\n        // Tiles\n        // Temporary just to see\n        var bw = this.dimensions.width-30;\n        var bh = this.dimensions.height-30;\n        var p = 15;\n        for (var x = 0; x <= bw; x += 30) {\n            ctx.moveTo(0.5 + x + p, p);\n            ctx.lineTo(0.5 + x + p, bh + p);\n        }\n\n        for (var x = 0; x <= bh; x += 30) {\n            ctx.moveTo(p, 0.5 + x + p);\n            ctx.lineTo(bw + p, 0.5 + x + p);\n        }\n        ctx.strokeStyle = \"white\";\n        ctx.stroke();\n        this.drawLines(ctx);\n        this.drawInside(ctx);\n        this.drawDots(ctx);\n    }\n\n    drawLines(ctx) {\n        // top line\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(30,30);\n        ctx.lineTo(570,30);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // inner\n        ctx.beginPath();\n        ctx.moveTo(40, 40);\n        ctx.lineTo(560, 40);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n        \n\n        // left line\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(30, 30);\n        ctx.lineTo(30, 240);\n        ctx.lineTo(120, 240);\n        ctx.lineTo(120, 270);\n        ctx.lineTo(20, 270);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(20, 330);\n        ctx.lineTo(120, 330);\n        ctx.lineTo(120, 360);\n        ctx.lineTo(30, 360);\n        ctx.lineTo(30, 570);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // inner\n        ctx.beginPath();\n        ctx.moveTo(40, 40);\n        ctx.lineTo(40, 230);\n        ctx.lineTo(130, 230);\n        ctx.lineTo(130, 280);\n        ctx.lineTo(20, 280);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(20, 320);\n        ctx.lineTo(130, 320);\n        ctx.lineTo(130, 370);\n        ctx.lineTo(40, 370);\n        ctx.lineTo(40, 560);\n        ctx.lineTo(560, 560);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(30, 570);\n        ctx.lineTo(570, 570);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // right\n        // inner\n        ctx.beginPath();\n        ctx.moveTo(560, 40);\n        ctx.lineTo(560, 230);\n        ctx.lineTo(470, 230);\n        ctx.lineTo(470, 280);\n        ctx.lineTo(580, 280);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(580, 320);\n        ctx.lineTo(470, 320);\n        ctx.lineTo(470, 370);\n        ctx.lineTo(560, 370);\n        ctx.lineTo(560, 560);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(570, 30);\n        ctx.lineTo(570, 240);\n        ctx.lineTo(480, 240);\n        ctx.lineTo(480, 270);\n        ctx.lineTo(580, 270);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(580, 330);\n        ctx.lineTo(480, 330);\n        ctx.lineTo(480, 360);\n        ctx.lineTo(570, 360);\n        ctx.lineTo(570, 570);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n    }   \n\n    drawInside(ctx) {\n        // letter n\n        ctx.beginPath();\n        ctx.moveTo(80, 80);\n        ctx.lineTo(160, 80);\n        ctx.moveTo(80, 80);\n        ctx.lineTo(80, 190);\n        ctx.lineTo(100, 190);\n        ctx.lineTo(100, 100);\n        ctx.lineTo(140, 100);\n        ctx.lineTo(140, 190);\n        ctx.lineTo(160, 190);\n        ctx.lineTo(160, 80);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // letter g\n        ctx.beginPath();\n        ctx.moveTo(200, 80);\n        ctx.lineTo(280, 80);\n        ctx.moveTo(200, 80);\n        ctx.lineTo(200, 190);\n        ctx.lineTo(280, 190);\n        ctx.lineTo(280, 140);\n        ctx.lineTo(260, 140);\n        ctx.lineTo(260, 170);\n        ctx.lineTo(220, 170);\n        ctx.lineTo(220, 100);\n        ctx.lineTo(280, 100);\n        ctx.lineTo(280, 80);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // letter O\n        ctx.beginPath();\n        ctx.moveTo(320, 80);\n        ctx.lineTo(400, 80);\n        ctx.lineTo(400, 190);\n        ctx.lineTo(320, 190);\n        ctx.lineTo(320, 80);\n        ctx.moveTo(350, 110);\n        ctx.lineTo(370, 110);\n        ctx.lineTo(370, 160);\n        ctx.lineTo(350, 160);\n        ctx.lineTo(350, 110);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // letter c\n        ctx.beginPath();\n        ctx.moveTo(440, 80);\n        ctx.lineTo(520, 80);\n        ctx.lineTo(520, 100);\n        ctx.lineTo(460, 100);\n        ctx.lineTo(460, 150);\n        ctx.lineTo(520, 150);\n        ctx.lineTo(520, 190);\n        ctx.lineTo(440, 190);\n        ctx.lineTo(440, 80);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // left line to rectangle\n        ctx.beginPath();\n        ctx.moveTo(170, 230);\n        ctx.lineTo(190, 230);\n        ctx.lineTo(190, 370);\n        ctx.lineTo(170, 370);\n        ctx.lineTo(170, 230);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // rectangle with ghosts insides\n        // top\n        // left\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(230, 230);\n        ctx.lineTo(280, 230);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // inner\n        ctx.beginPath();\n        ctx.moveTo(240, 240);\n        ctx.lineTo(280, 240);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // white part\n        ctx.fillStyle = \"lavender\";\n        ctx.fillRect(280, 230, 40, 10);\n\n        // right\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(320, 230);\n        ctx.lineTo(370, 230);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // inner\n        ctx.beginPath();\n        ctx.moveTo(320, 240);\n        ctx.lineTo(360, 240);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // rest\n        // outer\n        ctx.beginPath();\n        ctx.moveTo(370, 230);\n        ctx.lineTo(370, 370);\n        ctx.lineTo(230, 370);\n        ctx.lineTo(230, 230);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // inner\n        ctx.beginPath();\n        ctx.moveTo(360, 240);\n        ctx.lineTo(360, 360);\n        ctx.lineTo(240, 360);\n        ctx.lineTo(240, 240);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // right rectangle\n        ctx.beginPath();\n        ctx.moveTo(410, 230);\n        ctx.lineTo(410, 370);\n        ctx.lineTo(430, 370);\n        ctx.lineTo(430, 230);\n        ctx.lineTo(410, 230);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // lower letters\n        // t\n        ctx.beginPath();\n        ctx.moveTo(140,410)\n        ctx.lineTo(160, 410);\n        ctx.lineTo(160, 440);\n        ctx.lineTo(190, 440);\n        ctx.lineTo(190, 460);\n        ctx.lineTo(160, 460);\n        ctx.lineTo(160, 500);\n        ctx.lineTo(190, 500);\n        ctx.lineTo(190, 520);\n        ctx.lineTo(140, 520);\n        ctx.lineTo(140, 460);\n        ctx.lineTo(110, 460);\n        ctx.lineTo(110, 440);\n        ctx.lineTo(140, 440);\n        ctx.lineTo(140, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // h\n        ctx.beginPath();\n        ctx.moveTo(250, 410);\n        ctx.lineTo(250, 470);\n        ctx.lineTo(310, 470);\n        ctx.lineTo(310, 520);\n        ctx.lineTo(290, 520);\n        ctx.lineTo(290, 490);\n        ctx.lineTo(250, 490);\n        ctx.lineTo(250, 520);\n        ctx.lineTo(250, 520);\n        ctx.lineTo(230, 520);\n        ctx.lineTo(230, 410);\n        ctx.lineTo(250, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // i \n        // dot of i\n        ctx.beginPath();\n        ctx.moveTo(350, 410);\n        ctx.lineTo(350, 430);\n        ctx.lineTo(370, 430);\n        ctx.lineTo(370, 410);\n        ctx.lineTo(350, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(350, 470);\n        ctx.lineTo(370, 470);\n        ctx.lineTo(370, 520);\n        ctx.lineTo(350, 520);\n        ctx.lineTo(350, 470);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // letter l\n        ctx.beginPath();\n        ctx.moveTo(410, 410);\n        ctx.lineTo(430, 410);\n        ctx.lineTo(430, 520);\n        ctx.lineTo(410, 520);\n        ctx.lineTo(410, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // letter y\n        ctx.beginPath();\n        ctx.moveTo(470, 410);\n        ctx.lineTo(490, 410);\n        ctx.lineTo(490, 440);\n        ctx.lineTo(500, 440);\n        ctx.lineTo(500, 410);\n        ctx.lineTo(520, 410);\n        ctx.lineTo(520, 520);\n        ctx.lineTo(470, 520);\n        ctx.lineTo(470, 500);\n        ctx.lineTo(500, 500);\n        ctx.lineTo(500, 460);\n        ctx.lineTo(470, 460);\n        ctx.lineTo(470, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        // fill in spots so no more two squares next to one\n        // colon left to t\n        ctx.beginPath();\n        ctx.moveTo(80, 410)\n        ctx.lineTo(100, 410);\n        ctx.lineTo(100, 460);\n        ctx.lineTo(80, 460);\n        ctx.lineTo(80, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(80, 470)\n        ctx.lineTo(100, 470);\n        ctx.lineTo(100, 520);\n        ctx.lineTo(80, 520);\n        ctx.lineTo(80, 470);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(200, 410);\n        ctx.lineTo(220, 410);\n        ctx.lineTo(220, 430);\n        ctx.lineTo(200, 430);\n        ctx.lineTo(200, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.moveTo(290, 410);\n        ctx.lineTo(310, 410);\n        ctx.lineTo(310, 430);\n        ctx.lineTo(290, 430);\n        ctx.lineTo(290, 410);\n        ctx.strokeStyle = \"#bc13fe\";\n        ctx.stroke();\n    }\n\n    drawDots(ctx) {\n        // big dots\n        ctx.beginPath();\n        ctx.arc(60, 120, 8, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(480, 120, 8, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(60, 480, 8, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(480, 480, 8, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        // little circles\n        // horizontal lines straight thru\n        const jHArr=[60,210,390,540];\n        for (let j = 0; j < jHArr.length; j++) {\n            for(let i=60; i<=540;i+=30) {\n                ctx.beginPath();\n                ctx.arc(i, jHArr[j], 3, 0, 2 * Math.PI);\n                ctx.fillStyle = \"yellow\";\n                ctx.fill();\n            }\n        }\n\n        // vertical lines\n        const j1VArr = [180,300,420,540];\n        for(let i=0;i<j1VArr.length;i++) {\n            for(let j=90;j<=180;j+=30) {\n                ctx.beginPath();\n                ctx.arc(j1VArr[i], j, 3, 0, 2 * Math.PI);\n                ctx.fillStyle = \"yellow\";\n                ctx.fill();\n            }\n        }\n\n        const j2VArr = [150,210,390,450];\n        for(let i=0;i<j2VArr.length;i++) {\n            for(let j=240;j<=360;j+=30) {\n                ctx.beginPath();\n                ctx.arc(j2VArr[i], j, 3, 0, 2 * Math.PI);\n                ctx.fillStyle = \"yellow\";\n                ctx.fill();\n            }\n        }\n\n        const j3VArr = [330,390,450,540];\n        for (let i=0;i<j3VArr.length;i++) {\n            for (let j = 420; j <= 510; j += 30) {\n                ctx.beginPath();\n                ctx.arc(j3VArr[i], j, 3, 0, 2 * Math.PI);\n                ctx.fillStyle = \"yellow\";\n                ctx.fill();\n            }\n        }\n\n        // the rest of the dots\n        ctx.beginPath();\n        ctx.arc(60, 90, 3, 0, 2 * Math.PI);\n        ctx.arc(60, 150, 3, 0, 2 * Math.PI);\n        ctx.arc(60, 180, 3, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(120, 120, 3, 0, 2 * Math.PI);\n        ctx.arc(120, 150, 3, 0, 2 * Math.PI);\n        ctx.arc(120, 180, 3, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(240, 120, 3, 0, 2 * Math.PI);\n        ctx.arc(240, 150, 3, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(270, 120, 3, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(510, 120, 3, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(60, 420, 3, 0, 2 * Math.PI);\n        ctx.arc(60, 450, 3, 0, 2 * Math.PI);\n        ctx.arc(60, 510, 3, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(120, 420, 3, 0, 2 * Math.PI);\n        ctx.arc(120, 480, 3, 0, 2 * Math.PI);\n        ctx.arc(120, 510, 3, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(180, 420, 3, 0, 2 * Math.PI);\n        ctx.arc(180, 480, 3, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(210, 450, 3, 0, 2 * Math.PI);\n        ctx.arc(210, 480, 3, 0, 2 * Math.PI);\n        ctx.arc(210, 510, 3, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(270, 420, 3, 0, 2 * Math.PI);\n        ctx.arc(270, 450, 3, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(300, 450, 3, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(270, 510, 3, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n\n        ctx.beginPath();\n        ctx.arc(360, 450, 3, 0, 2 * Math.PI);\n        ctx.fillStyle = \"yellow\";\n        ctx.fill();\n    }\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ });