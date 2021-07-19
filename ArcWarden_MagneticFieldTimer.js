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

/***/ "./src/ArcWarden_MagneticFieldTimer.ts":
/*!*********************************************!*\
  !*** ./src/ArcWarden_MagneticFieldTimer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let arcWarden_magneticField = {};
var magneticFieldTimer;
(function (magneticFieldTimer) {
    magneticFieldTimer.needHero = 'npc_dota_hero_arc_warden';
    magneticFieldTimer.gameStart = false;
    magneticFieldTimer.menuWork = false;
    magneticFieldTimer.magneticCreate = false;
    magneticFieldTimer.magneticCreateClone = false;
    magneticFieldTimer.particleIndex = -1;
    magneticFieldTimer.particleIndexClone = -1;
    magneticFieldTimer.durationSkill = -1;
    magneticFieldTimer.durationSkillClone = -1;
    magneticFieldTimer.font = Renderer.LoadFont('Arial', 16, Enum.FontWeight.LIGHT, Enum.FontFlags.OUTLINE);
    let menuWork_Lable = Menu.AddToggle(['Custom Scripts', 'Heroes', 'Agility', 'Arc Warden', 'MagneticField', 'Timer'], 'Enabled', false).SetNameLocale("ru", "Включить");
    menuWork_Lable.SetTip('Показывает таймер до исчезновения Magnetic Field', 'ru');
    menuWork_Lable.SetTip('SOON', 'en');
    menuWork_Lable.OnChange(state => { magneticFieldTimer.menuWork = state.newValue; });
    magneticFieldTimer.menuWork = menuWork_Lable.GetValue();
    let menuTextSize_Label = Menu.AddSlider(['Custom Scripts', 'Heroes', 'Agility', 'Arc Warden', 'MagneticField', 'Timer'], `Text Size`, 1, 32, 16, 1);
    menuTextSize_Label.OnChange(state => { magneticFieldTimer.font = Renderer.LoadFont('Arial', state.newValue, Enum.FontWeight.LIGHT, Enum.FontFlags.OUTLINE); });
    Menu.SetImage(['Custom Scripts', 'Heroes'], "~/menu/40x40/heroes.png");
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Agility'], "~/menu/40x40/agillity.png");
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Agility', 'Arc Warden'], "panorama/images/heroes/icons/npc_dota_hero_arc_warden_png.vtex_c");
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Agility', 'Arc Warden', 'MagneticField'], 'panorama/images/spellicons/arc_warden_magnetic_field_png.vtex_c');
    let Load;
    (function (Load) {
        function Init() {
            if (GameRules.IsActiveGame()) {
                magneticFieldTimer.gameStart = true;
                magneticFieldTimer.myHero = EntitySystem.GetLocalHero();
                magneticFieldTimer.myPlayer = EntitySystem.GetLocalPlayer();
            }
            if (!magneticFieldTimer.myHero || !magneticFieldTimer.myHero.IsExist() || magneticFieldTimer.myHero.GetUnitName() !== magneticFieldTimer.needHero) {
                magneticFieldTimer.gameStart = false;
                return;
            }
        }
        Load.Init = Init;
    })(Load = magneticFieldTimer.Load || (magneticFieldTimer.Load = {}));
})(magneticFieldTimer || (magneticFieldTimer = {}));
arcWarden_magneticField.OnDraw = () => {
    if (!magneticFieldTimer.gameStart || !magneticFieldTimer.menuWork)
        return;
    if (magneticFieldTimer.magneticCreate && Renderer.WorldToScreen(magneticFieldTimer.particlePos)[2]) {
        Renderer.SetDrawColor(255, 255, 255, 255);
        Renderer.DrawWorldText(magneticFieldTimer.font, magneticFieldTimer.particlePos, `${magneticFieldTimer.durationSkill.toFixed(1)}сек`, 0, Enum.ContentAlign.CenterXY);
    }
    if (magneticFieldTimer.magneticCreateClone && Renderer.WorldToScreen(magneticFieldTimer.particlePosClone)[2]) {
        Renderer.SetDrawColor(255, 255, 255, 255);
        Renderer.DrawWorldText(magneticFieldTimer.font, magneticFieldTimer.particlePosClone, `${magneticFieldTimer.durationSkillClone.toFixed(1)}сек`, 0, Enum.ContentAlign.CenterXY);
    }
};
arcWarden_magneticField.OnParticleCreate = (particle) => {
    if (particle.name === 'arc_warden_magnetic') {
        if (magneticFieldTimer.magneticCreate) {
            magneticFieldTimer.particleIndexClone = particle.index;
            magneticFieldTimer.durationSkillClone = magneticFieldTimer.myHero.GetAbilityByIndex(1).GetLevelSpecialValueForFloat("duration");
            magneticFieldTimer.timerClone = setInterval(() => {
                magneticFieldTimer.durationSkillClone -= 0.1;
            }, 100);
            return;
        }
        magneticFieldTimer.particleIndex = particle.index;
        magneticFieldTimer.durationSkill = magneticFieldTimer.myHero.GetAbilityByIndex(1).GetLevelSpecialValueForFloat("duration");
        magneticFieldTimer.timer = setInterval(() => {
            magneticFieldTimer.durationSkill -= 0.1;
        }, 100);
    }
};
arcWarden_magneticField.OnParticleUpdate = (particle) => {
    if (particle.index == magneticFieldTimer.particleIndex && particle.controlPoint == 0) {
        magneticFieldTimer.particlePos = particle.position;
        magneticFieldTimer.magneticCreate = true;
    }
    if (magneticFieldTimer.magneticCreate && particle.index == magneticFieldTimer.particleIndexClone && particle.controlPoint == 0) {
        magneticFieldTimer.particlePosClone = particle.position;
        magneticFieldTimer.magneticCreateClone = true;
    }
};
arcWarden_magneticField.OnParticleDestroy = (particle) => {
    if (particle.index == magneticFieldTimer.particleIndex) {
        magneticFieldTimer.magneticCreate = false;
        magneticFieldTimer.particleIndex = -1;
        magneticFieldTimer.particlePos.Set(0, 0, 0);
        clearInterval(magneticFieldTimer.timer);
    }
    if (particle.index == magneticFieldTimer.particleIndexClone) {
        magneticFieldTimer.magneticCreateClone = false;
        magneticFieldTimer.particleIndexClone = -1;
        magneticFieldTimer.particlePosClone.Set(0, 0, 0);
        clearInterval(magneticFieldTimer.timerClone);
    }
};
arcWarden_magneticField.OnGameEnd = () => {
    magneticFieldTimer.gameStart = false;
};
arcWarden_magneticField.OnScriptLoad = arcWarden_magneticField.OnGameStart = magneticFieldTimer.Load.Init;
RegisterScript(arcWarden_magneticField);


/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/ArcWarden_MagneticFieldTimer.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\ArcWarden_MagneticFieldTimer.ts */"./src/ArcWarden_MagneticFieldTimer.ts");


/***/ })

/******/ });