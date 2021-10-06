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

/***/ "./src/Abuse_SF.ts":
/*!*************************!*\
  !*** ./src/Abuse_SF.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

let Abuse_SF = {};
var AUrsa;
(function (AUrsa) {
    const path = ['Custom Scripts', 'Abuse', 'Shadow Fiend'];
    const font = Renderer.LoadFont('monospace', 18, Enum.FontWeight.LIGHT, Enum.FontFlags.OUTLINE);
    let gameStarted = false;
    let bindPressed = false;
    let [myHero, myPlayer] = [null, null];
    let [enemies, enemiesToggle] = [['panorama/images/heroes/icons/npc_dota_hero_dazzle_png.vtex_c'], []];
    let enableMenu = Menu.AddToggle(path, 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange((state) => {
        enableMenu = state.newValue;
    })
        .GetValue();
    let bindKey = Menu.AddKeyBind(path, 'Bind', Enum.ButtonCode.BUTTON_CODE_NONE).SetNameLocale('ru', 'Бинд');
    let targetKey = Menu.AddKeyBind(path, 'Move/Rotate to Target', Enum.ButtonCode.BUTTON_CODE_NONE).SetNameLocale('ru', 'Идти/Повернутся к цели');
    //let targetSelect = Menu.AddMultiSelect(path, 'Target', enemies, enemiesToggle);
    let sliderMenu = Menu.AddSlider(path, 'Search Radius', 450, 2000, 600, 25)
        .SetNameLocale('ru', 'Радиус поиска')
        .OnChange(state => {
        sliderMenu = state.newValue;
    })
        .GetValue();
    let delaySliderMenu = Menu.AddSlider(path, 'Stop for .. seconds', 0.0, 2.0, 0.1, 0.1)
        .SetNameLocale('ru', 'Прекращать за ... сек')
        .OnChange(state => {
        delaySliderMenu = state.newValue;
    })
        .GetValue();
    Menu.GetFolder(['Custom Scripts', 'Abuse']).SetImage('~/menu/40x40/abuse.png');
    Menu.GetFolder(path).SetImage(GetImagesPath('npc_dota_hero_nevermore'));
    Abuse_SF.OnScriptLoad = Abuse_SF.OnGameStart = () => {
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
    Abuse_SF.OnGameEnd = () => {
        gameStarted = false;
        bindPressed = false;
        [myHero, myPlayer] = [null, null];
        enemies.splice(0);
        enemiesToggle.splice(0);
    };
    Abuse_SF.OnUpdate = () => {
        if (gameStarted && enableMenu) {
            if (bindKey.IsKeyDownOnce())
                bindPressed = !bindPressed;
            if (enemies.length < 5) {
                let heroes = EntitySystem.GetHeroesList();
                if (heroes) {
                    for (let hero of heroes) {
                        if (hero && !hero.IsIllusion() && !hero.IsMeepoClone() && hero.IsHero() && hero.IsAlive() &&
                            !hero.IsDormant() && !hero.IsSameTeam(myHero)) {
                            let state = true;
                            for (let enemy of enemies) {
                                if (GetImagesPath(hero.GetUnitName()) == enemy) {
                                    state = false;
                                    break;
                                }
                            }
                            if (state) {
                                enemies.push(GetImagesPath(hero.GetUnitName()));
                                enemiesToggle.push(false);
                            }
                        }
                    }
                }
            }
            if (bindPressed) {
                let [x, y] = [Renderer.GetScreenSize()[0] / 2 - 380, Renderer.GetScreenSize()[1] / 2 + 360];
                Renderer.DrawText(font, x, y, 'SF Abuse Work!', 0, Enum.ContentAlign.CenterXY);
                let enemyInRadius = myHero.GetHeroesInRadius(sliderMenu, Enum.TeamType.TEAM_ENEMY);
                for (let enemy of enemyInRadius) {
                    if ('npc_dota_hero_dazzle' === enemy.GetUnitName()) {
                        if (targetKey.IsKeyDown()) {
                            if (GetGoodNumber(Dist2D(enemy.GetAbsOrigin(), myHero.GetAbsOrigin())) !== 449) {
                                if (Engine.OnceAt(0.2)) {
                                    SendOrderMovePos(enemy.GetAbsOrigin().add(new Vector(Dist2D(enemy.GetAbsOrigin(), myHero.GetAbsOrigin()) + (450 - Dist2D(enemy.GetAbsOrigin(), myHero.GetAbsOrigin()))).Rotated(GetAngleToPos(enemy, myHero))), myHero, myPlayer);
                                }
                            }
                            else {
                                if (Engine.OnceAt(0.2)) {
                                    myPlayer.PrepareUnitOrdersOptional(Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_DIRECTION, null, myHero.GetAbsOrigin().add(new Vector(1, 0, 0).Rotated(GetAngleToPos(myHero, enemy))), null, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_HERO_ONLY, myHero, false, true);
                                }
                            }
                        }
                        if (enemy.HasModifier('modifier_dazzle_shallow_grave')) {
                            if (enemy.GetModifier('modifier_dazzle_shallow_grave').GetRemainingTime() > delaySliderMenu) {
                                let [koil, koil2, koil3] = [myHero.GetAbilityByIndex(0), myHero.GetAbilityByIndex(1), myHero.GetAbilityByIndex(2)];
                                if (koil.CanCast()) {
                                    setTimeout(() => {
                                        if (koil.CanCast())
                                            koil.CastNoTarget();
                                    }, 1);
                                }
                                else if (koil2.CanCast()) {
                                    setTimeout(() => {
                                        if (koil2.CanCast())
                                            koil2.CastNoTarget();
                                    }, 1000);
                                }
                                else if (koil3.CanCast()) {
                                    setTimeout(() => {
                                        if (koil3.CanCast())
                                            koil3.CastNoTarget();
                                    }, 1000);
                                }
                                else {
                                    let amulet = myHero.GetItem('item_shadow_amulet', true);
                                    if (amulet && amulet.IsExist() && amulet.CanCast() && !myHero.GetModifier('modifier_item_shadow_amulet_fade')) {
                                        amulet.CastTarget(myHero);
                                    }
                                    else {
                                        myPlayer.PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_STOP, null, null, null, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_HERO_ONLY, myHero, false, true);
                                    }
                                }
                            }
                            else {
                                myPlayer.PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_STOP, null, null, null, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_HERO_ONLY, myHero, false, true);
                            }
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
    function GetGoodNumber(number, convertToString = false) {
        let ret = Number(number.toString().split('.', 1)[0]);
        return convertToString ? ret.toString() : ret;
    }
    function IsntUndefined(value, withfalse) {
        return withfalse ? (value !== false) : value !== undefined && value !== null;
    }
    function Dist2D(vec1, vec2) {
        if (vec1 && vec2) {
            let pos1 = (vec1.x ? (vec1) : (vec1.GetAbsOrigin ? (vec1.GetAbsOrigin()) : (0)));
            let pos2 = (vec2.x ? (vec2) : (vec2.GetAbsOrigin ? (vec2.GetAbsOrigin()) : (0)));
            return pos1 && pos2 && pos1.sub(pos2).Length2D();
        }
        return -1;
    }
    function GetAngleToPos(_e1, _e2, prefer = _e2, inrad) {
        let [a, b] = [IsntUndefined(_e1.x) ? _e1 : _e1.GetAbsOrigin(), IsntUndefined(_e2.x) ? _e2 : _e2.GetAbsOrigin()];
        if (prefer == _e1) {
            [a, b] = [b, a];
        }
        let atan2 = Math.atan2(b.y - a.y, b.x - a.x);
        return inrad ? atan2 : (atan2 * (180 / Math.PI));
    }
    function SendOrderMovePos(vector, myHero, myPlayer) {
        myPlayer.PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION, null, vector, null, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_HERO_ONLY, myHero, false, true);
    }
    RegisterScript(Abuse_SF);
})(AUrsa || (AUrsa = {}));


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/Abuse_SF.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\Abuse_SF.ts */"./src/Abuse_SF.ts");


/***/ })

/******/ });