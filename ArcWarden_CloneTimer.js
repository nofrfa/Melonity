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

/***/ "./src/ArcWarden_CloneTimer.ts":
/*!*************************************!*\
  !*** ./src/ArcWarden_CloneTimer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let arcWarden_CloneTimer = {};
var CloneTimer;
(function (CloneTimer) {
    let myHero, clone, durationClone;
    let font = Renderer.LoadFont('Arial', 24, Enum.FontWeight.BOLD, Enum.FontFlags.OUTLINE);
    const PATH = ['Custom Scripts', 'Heroes', 'Agility', 'Arc Warden', 'Show Duration Clone'];
    let toggle = Menu.AddToggle(PATH, 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange(state => {
        toggle = state.newValue;
    })
        .GetValue();
    Menu.GetFolder(PATH).SetImage('panorama/images/spellicons/arc_warden_tempest_double_png.vtex_c');
    let color = Menu.AddColorPickerBlock([...PATH, 'Color'], 255, 255, 255, 255)
        .OnChange(state => {
        color = state.newValue;
    })
        .GetValue();
    Menu.GetFolder([...PATH, 'Color']).SetNameLocale('ru', 'Цвет');
    let size = Menu.AddSlider(PATH, 'Text Size', 8, 48, 24, 1)
        .SetNameLocale('ru', 'Размер текста')
        .OnChange(state => {
        size = state.newValue;
        font = Renderer.LoadFont('Arial', state.newValue, Enum.FontWeight.BOLD, Enum.FontFlags.OUTLINE);
    })
        .GetValue();
    arcWarden_CloneTimer.OnGameStart = arcWarden_CloneTimer.OnScriptLoad = () => {
        myHero = EntitySystem.GetLocalHero();
    };
    arcWarden_CloneTimer.OnGameEnd = () => {
        myHero = null;
    };
    function findClone() {
        let spell = myHero.GetAbility('arc_warden_tempest_double');
        if (!spell)
            return;
        let archand = spell.GetProperty('C_DOTA_Ability_ArcWarden_TempestDouble', 'm_hDoubles');
        if (archand > 1) {
            if (!clone || !clone.IsExist() || clone.GetHandle() != archand) {
                clone = EntitySystem.GetHeroesList().find(x => x.GetHandle() == archand);
            }
        }
    }
    arcWarden_CloneTimer.OnUpdate = () => {
        if (!toggle || !myHero)
            return;
        findClone();
        if (clone && clone.IsExist() && clone.IsAlive() && clone.HasModifier('modifier_kill'))
            durationClone = clone.GetModifier('modifier_kill').GetRemainingTime();
    };
    function GetXY() {
        let screen = Renderer.GetScreenSize();
        switch (screen[0]) {
            case 2560:
                return [110, 240];
            case 1920:
                return [110, 240];
            case 1600:
                return [90, 195];
            case 1366:
                return [75, 165];
            case 1360:
                return [75, 165];
            case 1280:
                return [75, 155];
            case 1176:
                return [70, 140];
            default:
                return [screen[0] / 15, screen[1] / 4.5];
        }
    }
    arcWarden_CloneTimer.OnDraw = () => {
        if (!toggle || !myHero || !(clone && clone.IsExist() && clone.IsAlive()))
            return;
        Renderer.SetDrawColor(color[0], color[1], color[2], color[3]);
        let [x, y, isOnScreen] = Renderer.WorldToScreen(clone.GetAbsOrigin().add(new Vector(0, 0, clone.GetHealthBarOffset())));
        if (isOnScreen) {
            Renderer.PushDrawCentered();
            Renderer.DrawText(font, x, y, `${durationClone.toFixed(1)}${Menu.GetLocale() == 'ru' ? 'сек' : 'sec'}`);
            Renderer.PopDrawOptions();
        }
        let [_x, _y] = GetXY();
        Renderer.DrawText(font, _x, _y, `${durationClone.toFixed(1)}${Menu.GetLocale() == 'ru' ? 'сек' : 'sec'}`);
    };
    RegisterScript(arcWarden_CloneTimer);
})(CloneTimer || (CloneTimer = {}));


/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./src/ArcWarden_CloneTimer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Melonity\scripts\src\ArcWarden_CloneTimer.ts */"./src/ArcWarden_CloneTimer.ts");


/***/ })

/******/ });