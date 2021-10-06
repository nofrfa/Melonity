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

/***/ "./src/Abuse_Ursa.ts":
/*!***************************!*\
  !*** ./src/Abuse_Ursa.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

let Abuse_Ursa = {};
var AUrsa;
(function (AUrsa) {
    const path = ['Custom Scripts', 'Abuse', 'Ursa'];
    const font = Renderer.LoadFont('monospace', 18, Enum.FontWeight.LIGHT, Enum.FontFlags.OUTLINE);
    let gameStarted = false;
    let bindPressed = false;
    let [myHero, myPlayer] = [null, null];
    let enableMenu = Menu.AddToggle(path, 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange((state) => {
        enableMenu = state.newValue;
    })
        .GetValue();
    let overpowerUseMenu = Menu.AddToggle(path, 'Use OverPower', false)
        .SetNameLocale('ru', 'Использовать OverPower')
        .SetImage(GetImagesPath('ursa_overpower'))
        .OnChange((state) => {
        overpowerUseMenu = state.newValue;
    })
        .GetValue();
    let bindKey = Menu.AddKeyBind(path, 'Bind', Enum.ButtonCode.BUTTON_CODE_NONE).SetNameLocale('ru', 'Бинд');
    let sliderMenu = Menu.AddSlider(path, 'Search Radius', 0, 2000, 600, 25)
        .SetNameLocale('ru', 'Радиус поиска')
        .OnChange(state => {
        sliderMenu = state.newValue;
    })
        .GetValue();
    let delaySliderMenu = Menu.AddSlider(path, 'Stop the attack for .. seconds', 0.0, 1.0, 0.1, 0.1)
        .SetNameLocale('ru', 'Прекращать атаку за .. секунд')
        .SetTip('За сколько секунд до окончания креста будет прекращена атака', 'ru')
        .SetTip('How many seconds before the end of the cross will the attack be stopped', 'en')
        .OnChange(state => {
        delaySliderMenu = state.newValue;
    })
        .GetValue();
    Menu.GetFolder(['Custom Scripts', 'Abuse']).SetImage('~/menu/40x40/abuse.png');
    Menu.GetFolder(path).SetImage(GetImagesPath('npc_dota_hero_ursa'));
    Abuse_Ursa.OnScriptLoad = Abuse_Ursa.OnGameStart = () => {
        if (GameRules.IsActiveGame()) {
            gameStarted = true;
            myHero = EntitySystem.GetLocalHero();
            myPlayer = EntitySystem.GetLocalPlayer();
        }
        if (!myHero || !myHero.IsExist() || !myHero.GetUnitName() === null) {
            gameStarted = false;
            bindPressed = false;
            [myHero, myPlayer] = [null, null];
        }
    };
    Abuse_Ursa.OnGameEnd = () => {
        gameStarted = false;
        bindPressed = false;
        [myHero, myPlayer] = [null, null];
    };
    Abuse_Ursa.OnUpdate = () => {
        if (gameStarted && enableMenu) {
            if (bindKey.IsKeyDownOnce())
                bindPressed = !bindPressed;
            if (bindPressed) {
                let [x, y] = [Renderer.GetScreenSize()[0] / 2 - 330, Renderer.GetScreenSize()[1] / 2 + 360];
                Renderer.DrawText(font, x, y, 'Ursa Abuse Work!', 0, Enum.ContentAlign.CenterXY);
                let enemyInRadius = myHero.GetHeroesInRadius(sliderMenu, Enum.TeamType.TEAM_ENEMY);
                for (let enemy of enemyInRadius) { // modifier_templar_assassin_refraction_absorb
                    if (enemy.GetUnitName() === 'npc_dota_hero_templar_assassin') {
                        if (enemy.HasModifier('modifier_templar_assassin_refraction_absorb')) {
                            if (enemy.GetModifier('modifier_templar_assassin_refraction_absorb').GetStackCount() > 1) {
                                if (overpowerUseMenu && myHero.GetAbilityByIndex(1).CanCast())
                                    myHero.GetAbilityByIndex(1).CastNoTarget();
                                if (Engine.OnceAt(2)) {
                                    myPlayer.PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_ATTACK_TARGET, enemy, null, null, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_HERO_ONLY, myHero, false, true);
                                }
                            }
                        }
                        else if (!enemy.HasModifier('modifier_dazzle_shallow_grave')) {
                            myPlayer.PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_STOP, null, null, null, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_HERO_ONLY, myHero, false, true);
                        }
                    }
                    if (enemy.HasModifier('modifier_dazzle_shallow_grave')) {
                        if (enemy.GetModifier('modifier_dazzle_shallow_grave').GetRemainingTime() > delaySliderMenu) {
                            if (overpowerUseMenu && myHero.GetAbilityByIndex(1).CanCast())
                                myHero.GetAbilityByIndex(1).CastNoTarget();
                            if (Engine.OnceAt(2)) {
                                myPlayer.PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_ATTACK_TARGET, enemy, null, null, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_HERO_ONLY, myHero, false, true);
                            }
                        }
                        else {
                            myPlayer.PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_STOP, null, null, null, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_HERO_ONLY, myHero, false, true);
                        }
                    }
                }
            }
        }
    };
    function GetImagesPath(name, full) {
        if (name.startsWith('item_')) {
            return `panorama/images/items/${name.slice(5)}_png.vtex_c`;
        }
        else if (name.startsWith('npc_dota_hero')) {
            if (full) {
                return `panorama/images/heroes/${name}_png.vtex_c`;
            }
            else {
                return `panorama/images/heroes/icons/${name}_png.vtex_c`;
            }
        }
        else if (name.startsWith('npc_dota_neutral')) {
            return `panorama/images/heroes/${name}_png.vtex_c`;
        }
        else {
            return `panorama/images/spellicons/${name}_png.vtex_c`;
        }
    }
    RegisterScript(Abuse_Ursa);
})(AUrsa || (AUrsa = {}));


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/Abuse_Ursa.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\Abuse_Ursa.ts */"./src/Abuse_Ursa.ts");


/***/ })

/******/ });