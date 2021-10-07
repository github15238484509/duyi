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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/event.js */ \"./src/module/event.js\");\n\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/module/createele.js":
/*!*********************************!*\
  !*** ./src/module/createele.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"duration\": () => (/* binding */ duration)\n/* harmony export */ });\nclass duration {\r\n    constructor(duration = 1000) {\r\n        this.num = 1\r\n        this.time = duration\r\n        this.timer = null\r\n        this.callbakc = null\r\n    }\r\n    start() {\r\n        this.timer = setInterval(() => {\r\n            this.callbakc && this.callbakc(this.num)\r\n            this.num++\r\n        }, this.time);\r\n    }\r\n    stop() {\r\n        clearInterval(this.timer)\r\n        this.timer = null\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/module/createele.js?");

/***/ }),

/***/ "./src/module/event.js":
/*!*****************************!*\
  !*** ./src/module/event.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/module/util.js\");\n/* harmony import */ var _createele__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createele */ \"./src/module/createele.js\");\n\r\n\r\nconst box = document.getElementById('box')\r\nconst center = document.getElementById('center')\r\nconst body = document.body\r\n\r\nfunction createspan(num, color) {\r\n    const span = document.createElement(\"span\")\r\n    span.innerHTML = num\r\n    if (_util__WEBPACK_IMPORTED_MODULE_0__.isprime(num)) {\r\n        span.style.color = color\r\n    }\r\n    box.appendChild(span)\r\n}\r\n\r\nfunction createcenter(num, color) {\r\n    center.innerHTML = num\r\n    if (_util__WEBPACK_IMPORTED_MODULE_0__.isprime(num)) {\r\n        const div = document.createElement(\"div\")\r\n        div.innerHTML = num\r\n        div.className = \"center\"\r\n        div.style.color = color\r\n        body.appendChild(div)\r\n        div.addEventListener(\"transitionend\", function() {\r\n            this.remove()\r\n        })\r\n        div.offsetHeight\r\n        div.style.transform = ` translate(${_util__WEBPACK_IMPORTED_MODULE_0__.random(-200,200)}px,${_util__WEBPACK_IMPORTED_MODULE_0__.random(-200,200)}px)`\r\n        div.style.opacity = 0\r\n    }\r\n}\r\nconst itme = new _createele__WEBPACK_IMPORTED_MODULE_1__.duration(100)\r\nitme.callbakc = function(num) {\r\n    const color = _util__WEBPACK_IMPORTED_MODULE_0__.getColor();\r\n    createspan(num, color)\r\n    createcenter(num, color)\r\n    body.scrollIntoView(false, {\r\n        behavior: 'smooth'\r\n    })\r\n}\r\nlet flage = true\r\nitme.start()\r\nwindow.onclick = function() {\r\n    if (flage) {\r\n        itme.stop()\r\n        flage = false\r\n    } else {\r\n        itme.start()\r\n        flage = true\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/module/event.js?");

/***/ }),

/***/ "./src/module/util.js":
/*!****************************!*\
  !*** ./src/module/util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"random\": () => (/* binding */ random),\n/* harmony export */   \"getColor\": () => (/* binding */ getColor),\n/* harmony export */   \"isprime\": () => (/* binding */ isprime)\n/* harmony export */ });\nfunction random(min, max) {\r\n    return Math.floor(Math.random() * (max - min) + min)\r\n}\r\nconst colors = [\"#123456\",\r\n    \"#abcdefg\",\r\n    \"#515125\",\r\n    \"#abcabc\",\r\n    \"#fgedcba\",\r\n    \"pink\",\r\n    \"greend\",\r\n    \"yellow\",\r\n]\r\n\r\nfunction getColor() {\r\n    return colors[random(0, colors.length)]\r\n}\r\nfunction isprime(num) {\r\n    if (num < 2) {\r\n        return true\r\n    }\r\n    for (let i = 1; i < num - 2; i++) {\r\n        if (num % 2 == 0) {\r\n            return false\r\n        }\r\n    }\r\n    return true\r\n}\n\n//# sourceURL=webpack://test/./src/module/util.js?");

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