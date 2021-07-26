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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/zz_Core.ts":
/*!************************!*\
  !*** ./src/zz_Core.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

let zz_Core = {};
let versions = [
    ['ArcWarden', 'MagneticFieldTimer', 'release-1.0.1'],
    ['ArcWarden', 'TempestTimer', 'release-1.1.2'],
    ['Information', 'GoldInfo', 'beta-1.3.6'],
    ['Tinker', 'RockShiva', 'beta-1.1.0'],
    ['Tusk', 'AutoTrick', 'release-1.0.1']
];
versions.sort((oldElement, newElement) => oldElement[0] > newElement[0] ? 1 : -1);
let drawReadMe = Menu.AddButton(['Custom Scripts', 'Other'], 'ReadMe', () => { drawRM(); });
let title = Renderer.LoadFont('Arial', 34, Enum.FontWeight.BOLD, Enum.FontFlags.ANTIALIAS);
let font = Renderer.LoadFont('Arial', 24, Enum.FontWeight.LIGHT, Enum.FontFlags.OUTLINE);
let screenSize = Renderer.GetScreenSize();
let distance = Renderer.GetTextSize(title, 'Script name')[0] + 50;
let time = 5;
function drawRM() {
    for (let index = 0; index < versions.length; index++) {
        if (Renderer.GetTextSize(font, versions[index][1])[0] > Renderer.GetTextSize(title, 'Script name')[0] + 50) {
            distance = Renderer.GetTextSize(font, versions[index][1])[0] + 50;
        }
    }
    //Renderer.SetDrawColor(43, 43, 58, 255)
    //Renderer.DrawFilledRect(screenSize[0]/2, screenSize[1]/2, 300, 300, time, Enum.ContentAlign.CenterXY)
    Renderer.SetDrawColor(244, 245, 246, 255);
    Renderer.DrawText(title, screenSize[0] / 2 - 150, screenSize[1] / 2 - 200, 'Category', time, Enum.ContentAlign.RightCenterY);
    Renderer.DrawText(title, screenSize[0] / 2 - 100, screenSize[1] / 2 - 200, 'Script name', time, Enum.ContentAlign.LeftCenterY);
    Renderer.DrawText(title, screenSize[0] / 2 - 100 + distance, screenSize[1] / 2 - 200, 'Version', time, Enum.ContentAlign.LeftCenterY);
    for (let index = 0; index < versions.length; index++) {
        Renderer.DrawText(font, screenSize[0] / 2 - 150, screenSize[1] / 2 - 166 + (24 * index), versions[index][0], time, Enum.ContentAlign.RightCenterY);
        Renderer.DrawText(font, screenSize[0] / 2 - 100, screenSize[1] / 2 - 166 + (24 * index), versions[index][1], time, Enum.ContentAlign.LeftCenterY);
        Renderer.DrawText(font, screenSize[0] / 2 - 100 + distance, screenSize[1] / 2 - 166 + (24 * index), versions[index][2], time, Enum.ContentAlign.LeftCenterY);
    }
}
Menu.SetOrdering(['Custom Scripts', 'Information'], 2);
Menu.SetOrdering(['Custom Scripts', 'Heroes'], 1);
Menu.SetOrdering(['Custom Scripts', 'Other'], 0);
Menu.SetOrdering(['Custom Scripts', 'Heroes', 'Strength'], 2);
Menu.SetOrdering(['Custom Scripts', 'Heroes', 'Agility'], 1);
Menu.SetOrdering(['Custom Scripts', 'Heroes', 'Intelligence'], 0);
RegisterScript(zz_Core);


/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/zz_Core.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\zz_Core.ts */"./src/zz_Core.ts");


/***/ })

/******/ });