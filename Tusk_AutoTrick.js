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

/***/ "./src/Tusk_AutoTrick.ts":
/*!*******************************!*\
  !*** ./src/Tusk_AutoTrick.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

let AutoIceShardsTusk = {};
Menu.AddLabel(['Custom Scripts', 'Heroes', 'Strength', 'Tusk', 'Trick'], 'Outdated')
    .SetNameLocale('ru', 'Устаревшее')
    .SetTip('Данный скрипт появился в официальной версии чита', 'ru')
    .SetTip('This script appeared in the official version of the cheat', 'en');
var TuskIceShards;
(function (TuskIceShards) {
    TuskIceShards.HIndex = 'npc_dota_hero_tusk';
    TuskIceShards.gameStart = false;
    TuskIceShards.menuFunc = false;
    TuskIceShards.menuCursPosUse = false;
    let menuLabel = Menu.AddToggle(['Custom Scripts', 'Heroes', 'Strength', 'Tusk', 'Trick'], 'Enable', false).SetNameLocale('ru', 'Включить');
    menuLabel.OnChange(state => {
        TuskIceShards.menuFunc = state.newValue;
    });
    TuskIceShards.menuFunc = menuLabel.GetValue();
    let menuCursPosUseLabel = Menu.AddToggle(['Custom Scripts', 'Heroes', 'Strength', 'Tusk', 'Trick'], 'Use in the direction of the cursor', false).SetNameLocale('ru', 'Использовать по направлению курсора');
    menuCursPosUseLabel.OnChange(state => {
        TuskIceShards.menuCursPosUse = state.newValue;
    });
    TuskIceShards.menuCursPosUse = menuCursPosUseLabel.GetValue();
    TuskIceShards.MenuKeyBind = Menu.AddKeyBind(['Custom Scripts', 'Heroes', 'Strength', 'Tusk', 'Trick'], 'Клавиша активации', Enum.ButtonCode.KEY_NONE);
    Menu.SetImage(['Custom Scripts', 'Heroes'], '~/menu/40x40/heroes.png');
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Strength'], '~/menu/40x40/strength.png');
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Strength', 'Tusk'], 'panorama/images/heroes/icons/npc_dota_hero_tusk_png.vtex_c');
    Menu.GetFolder(['Custom Scripts', 'Heroes', 'Strength', 'Tusk', 'Trick']).SetNameLocale('ru', 'Трюк');
    let Load;
    (function (Load) {
        function Init() {
            if (GameRules.IsActiveGame() && EntitySystem.GetLocalHero().GetUnitName() === TuskIceShards.HIndex) {
                TuskIceShards.myHero = EntitySystem.GetLocalHero();
                TuskIceShards.gameStart = true;
            }
            if (!TuskIceShards.myHero || !TuskIceShards.myHero.IsExist() || TuskIceShards.myHero.GetUnitName() == null) {
                TuskIceShards.gameStart = false;
                return;
            }
        }
        Load.Init = Init;
    })(Load = TuskIceShards.Load || (TuskIceShards.Load = {}));
})(TuskIceShards || (TuskIceShards = {}));
AutoIceShardsTusk.OnUpdate = () => {
    if (TuskIceShards.gameStart && TuskIceShards.menuFunc) {
        if (TuskIceShards.MenuKeyBind.IsKeyDownOnce()) {
            let iceShards = TuskIceShards.myHero.GetAbilityByIndex(0);
            if (iceShards.CanCast()) {
                if (TuskIceShards.menuCursPosUse)
                    iceShards.CastPosition(Convert(Input.GetWorldCursorPos().add(TuskIceShards.myHero.GetAbsRotation().GetForward().Scaled(50))));
                else
                    iceShards.CastPosition(TuskIceShards.myHero.GetAbsOrigin().add(TuskIceShards.myHero.GetAbsRotation().GetForward().Scaled(50)));
            }
        }
    }
};
AutoIceShardsTusk.OnGameEnd = () => {
    TuskIceShards.gameStart = false;
};
AutoIceShardsTusk.OnScriptLoad = AutoIceShardsTusk.OnGameStart = TuskIceShards.Load.Init;
function Convert(position, addEntity = EntitySystem.GetLocalHero()) {
    return addEntity.GetAbsOrigin().add(position.sub(addEntity.GetAbsOrigin()).Normalized().Scaled(1.3));
}
RegisterScript(AutoIceShardsTusk);


/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/Tusk_AutoTrick.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Melonity\scripts\src\Tusk_AutoTrick.ts */"./src/Tusk_AutoTrick.ts");


/***/ })

/******/ });