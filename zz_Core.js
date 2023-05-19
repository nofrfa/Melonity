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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/zz_Core.ts");
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
Menu.AddButton(['Custom Scripts'], 'Open Telegram URL', () => {
    Engine.OpenURL('https://t.me/vevehife');
})
    .SetTip('If you are faced with incorrect operation of scripts\nor you have something to say, write to me in a telegram', 'en')
    .SetTip('Если вы столкнулись с неправильной работой скриптов\nили вам есть что сказать, напишите мне в телеграмме', 'ru')
    .SetOrdering(-200000);
const orderingAndImages = {
    'Player': { order: 10, image: '~/menu/40x40/player.png' },
    'Map': { order: 9, image: '~/menu/40x40/map.png' },
    'Esp': { order: 8, image: '~/menu/40x40/esp.png' },
    'Safeguard': { order: 7, image: '~/menu/40x40/safeguard.png' },
    'Information': { order: 6, image: '~/menu/40x40/info.png' },
    'Creeps': { order: 5, image: '~/menu/40x40/creeps.png' },
    'Griefing': { order: 4, image: '~/menu/40x40/grief.png' },
    'General': { order: 3, image: '~/menu/40x40/general.png' },
    'Abuse': { order: 2, image: '~/menu/40x40/abuse.png' },
    'Heroes': { order: 1, image: '~/menu/40x40/heroes.png' },
    'Other': { order: -1, image: '~/menu/40x40/common.png' }
};
Menu.GetFolderOptions([]).forEach(x => {
    if (x.GetName() == 'Custom Scripts') {
        Menu.GetFolder(['Custom Scripts']).SetImage('~/menu/40x40/scripts.png');
        Menu.GetFolderOptions(['Custom Scripts']).forEach(s => {
            let info = orderingAndImages[s.GetName()];
            if (info) {
                Menu.GetFolder(['Custom Scripts', s.GetName()])
                    .SetImage(info.image)
                    .SetOrdering(info.order);
            }
        });
    }
});
RegisterScript(zz_Core);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3p6X0NvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOENBQThDO0FBQzdELFlBQVksMENBQTBDO0FBQ3RELFlBQVksMENBQTBDO0FBQ3RELGtCQUFrQixnREFBZ0Q7QUFDbEUsb0JBQW9CLDJDQUEyQztBQUMvRCxlQUFlLDZDQUE2QztBQUM1RCxpQkFBaUIsNENBQTRDO0FBQzdELGdCQUFnQiw4Q0FBOEM7QUFDOUQsY0FBYyw0Q0FBNEM7QUFDMUQsZUFBZSw2Q0FBNkM7QUFDNUQsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoienpfQ29yZS5qcyIsInNvdXJjZVJvb3QiOiIifQ==