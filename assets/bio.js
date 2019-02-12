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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/_bio/bio.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_bio/bio.js":
/*!*************************!*\
  !*** ./src/_bio/bio.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bio_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bio.scss */ "./src/_bio/bio.scss");
/* harmony import */ var _bio_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bio_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_Game_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/Game.png */ "./src/img/Game.png");
/* harmony import */ var _img_Game_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_Game_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_age__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/age */ "./src/js/age.js");
/* harmony import */ var _js_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/init */ "./src/js/init.js");




Object(_js_init__WEBPACK_IMPORTED_MODULE_3__["default"])([_js_age__WEBPACK_IMPORTED_MODULE_2__["default"]]);

/***/ }),

/***/ "./src/_bio/bio.scss":
/*!***************************!*\
  !*** ./src/_bio/bio.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/img/Game.png":
/*!**************************!*\
  !*** ./src/img/Game.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Game.png";

/***/ }),

/***/ "./src/js/age.js":
/*!***********************!*\
  !*** ./src/js/age.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setAge; });
function setAge() {
  var ageDifMs = Date.now() - new Date(1985, 6, 26).getTime();
  var ageDate = new Date(ageDifMs); // milliseconds from epoch

  var ageDiv = document.querySelector('#age');

  if (ageDiv) {
    ageDiv.textContent = Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
;

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ "./src/js/scroll.js");

function init() {
  var onContentLoadedFuncs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var onLoadFuncs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // Add smooth scroll to all pages
  onContentLoadedFuncs.push(_scroll__WEBPACK_IMPORTED_MODULE_0__["ScrollToTopFade"]);
  onLoadFuncs.push(_scroll__WEBPACK_IMPORTED_MODULE_0__["smoothScroll"]);
  var todoCount = onContentLoadedFuncs.length + onLoadFuncs.length;
  var doneCount = 0; // The whole document (HTML) has been loaded.
  // Excluding images, js, and css

  document.addEventListener('DOMContentLoaded', function () {
    // init the progress bar.
    setProgress(0);
    onContentLoadedFuncs.forEach(function (f) {
      f();
      setProgress(++doneCount / todoCount * 100);
    });
  });

  window.onload = function () {
    // Just set the progress to 100%
    // if there is nothing to do.
    if (!onLoadFuncs.length) {
      setProgress(100, function () {
        return showContent();
      });
    }

    onLoadFuncs.forEach(function (f) {
      f();
      setProgress(++doneCount / todoCount * 100, function () {
        return showContent();
      });
    });
  };
}
;

function showContent() {
  document.querySelector(".content").style.visibility = "visible";
}

function setProgress(percent, onDone) {
  var bar = document.querySelector('.progress-bar');

  if (!bar) {
    return;
  }

  bar.style.minWidth = "".concat(percent, "%");

  if (percent === 100) {
    bar.classList.add("done");
    onDone();
  }
}

;

/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/*! exports provided: smoothScroll, ScrollToTopFade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScroll", function() { return smoothScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToTopFade", function() { return ScrollToTopFade; });
function smoothScroll() {
  // Add listener for all anchor links
  // for smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}
;
function ScrollToTopFade() {
  document.addEventListener('scroll', function () {
    var scrollButton = document.querySelector('.scroll-top');

    if (!scrollButton) {
      return;
    }

    if (window.scrollY >= 50) {
      scrollButton.style.opacity = 1;
    } else {
      scrollButton.style.opacity = 0;
    }
  });
}
;

/***/ })

/******/ });
//# sourceMappingURL=bio.js.map