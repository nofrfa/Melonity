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

/***/ "./src/Tinker_RockShiva.ts":
/*!*********************************!*\
  !*** ./src/Tinker_RockShiva.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

let tinker_RocketShiva = {};
var rockShiva;
(function (rockShiva) {
    rockShiva.needHero = 'npc_dota_hero_tinker';
    rockShiva.gameStart = false;
    rockShiva.menuWork = false;
    rockShiva.menuManaItemNeeded = true;
    rockShiva.itemMana = [
        ['item_arcane_ring', 75],
        ['item_soul_ring', 150],
        ['item_arcane_boots', 160],
        ['item_guardian_greaves', 200]
    ];
    rockShiva.itemManaBool = [true, true, true, true];
    let itemManaImage = new Array(rockShiva.itemMana.length);
    for (let index = 0; index < rockShiva.itemMana.length; index++) {
        itemManaImage[index] = `panorama/images/items/${rockShiva.itemMana[index][0].replace('item_', '')}_png.vtex_c`;
    }
    let menuWork_Lable = Menu.AddToggle(['Custom Scripts', 'Heroes', 'Intelligence', 'Tinker', 'RocketShiva'], 'Enabled', false).SetNameLocale("ru", "Включить");
    menuWork_Lable.SetTip('Спам ракетами(если враги есть в их радиусе) и дабл шивой', 'ru');
    menuWork_Lable.SetTip('SOON', 'en');
    menuWork_Lable.OnChange(state => { rockShiva.menuWork = state.newValue; });
    rockShiva.menuWork = menuWork_Lable.GetValue();
    rockShiva.menuKeyBind = Menu.AddKeyBind(['Custom Scripts', 'Heroes', 'Intelligence', 'Tinker', 'RocketShiva'], 'Activation Key', Enum.ButtonCode.KEY_NONE).SetNameLocale("ru", 'Клавиша активации');
    let menuListItems = Menu.AddMultiSelect(['Custom Scripts', 'Heroes', 'Intelligence', 'Tinker', 'RocketShiva'], 'Items For Mana', itemManaImage, rockShiva.itemManaBool).SetNameLocale("ru", 'Предметы для маны');
    menuListItems.OnChange(state => { rockShiva.itemManaBool = state.newValue; });
    rockShiva.itemManaBool = menuListItems.GetValue();
    let menuManaItemNeeded_Label = Menu.AddToggle(['Custom Scripts', 'Heroes', 'Intelligence', 'Tinker', 'RocketShiva'], 'Smart Use Items', true).SetNameLocale("ru", "Умное использование предметов");
    menuManaItemNeeded_Label.SetTip('Если включено, скрипт будет прожимать выбранные вами предметы только тогда, когда будет не хватать маны для использования предмета/способности\nЕсли выключено, скрипт будет прожимать предметы постоянно', 'ru');
    menuManaItemNeeded_Label.SetTip('SOON', 'en');
    menuManaItemNeeded_Label.OnChange(state => { rockShiva.menuManaItemNeeded = state.newValue; });
    rockShiva.menuManaItemNeeded = menuManaItemNeeded_Label.GetValue();
    Menu.SetImage(['Custom Scripts', 'Heroes'], "~/menu/40x40/heroes.png");
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Intelligence'], "~/menu/40x40/intelligence.png");
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Intelligence', 'Tinker'], "panorama/images/heroes/icons/npc_dota_hero_tinker_png.vtex_c");
    let Load;
    (function (Load) {
        function Init() {
            if (GameRules.IsActiveGame()) {
                rockShiva.gameStart = true;
                rockShiva.myHero = EntitySystem.GetLocalHero();
                rockShiva.myPlayer = EntitySystem.GetLocalPlayer();
            }
            if (!rockShiva.myHero || !rockShiva.myHero.IsExist() || rockShiva.myHero.GetUnitName() !== rockShiva.needHero) {
                rockShiva.gameStart = false;
                return;
            }
        }
        Load.Init = Init;
    })(Load = rockShiva.Load || (rockShiva.Load = {}));
})(rockShiva || (rockShiva = {}));
tinker_RocketShiva.OnUpdate = () => {
    if (rockShiva.gameStart && rockShiva.menuWork) {
        if (rockShiva.menuKeyBind.IsKeyDown()) {
            let timeWait = rockShiva.myHero.GetAbilityByIndex(5).GetLevelSpecialValueForFloat('AbilityChannelTime');
            if (Engine.OnceAt(timeWait + 0.33)) {
                let skill_rocket = rockShiva.myHero.GetAbilityByIndex(1);
                let skill_rearm = rockShiva.myHero.GetAbilityByIndex(5);
                let item_shiva, item_blink;
                let addRadius = 0;
                let myItems = rockShiva.myHero.GetItems(true);
                if (myItems != null) {
                    for (let item of myItems) {
                        if (item.GetName() === 'item_aether_lens' || item.GetName() === 'item_octarine_core')
                            addRadius = 225;
                        if (item.GetName() === 'item_shivas_guard')
                            item_shiva = item;
                        if (item.GetName() === 'item_blink')
                            item_blink = item;
                    }
                }
                let enemyInRadius = rockShiva.myHero.GetHeroesInRadius(2500 + addRadius, Enum.TeamType.TEAM_ENEMY).length;
                if (skill_rocket.CanCast() && enemyInRadius > 0)
                    skill_rocket.CastNoTarget();
                else if (CanCastCD(skill_rocket, rockShiva.myHero) && !CanCastMana(skill_rocket, rockShiva.myHero) && rockShiva.menuManaItemNeeded && enemyInRadius > 0)
                    UseObject(skill_rocket);
                if (skill_rearm.CanCast()) {
                    skill_rearm.CastNoTarget();
                    if (item_shiva) {
                        if (item_shiva.CanCast()) {
                            setTimeout(() => {
                                console.log(1000 * timeWait - 0.66);
                                item_shiva.CastNoTarget();
                            }, 1000 * timeWait - 100);
                            setTimeout(() => {
                                console.log(1000 * timeWait + 0.66);
                                item_shiva.CastNoTarget();
                            }, 1000 * timeWait + 66);
                        }
                        else if (CanCastCD(item_shiva, rockShiva.myHero) && !CanCastMana(item_shiva, rockShiva.myHero) && rockShiva.menuManaItemNeeded)
                            UseObject(item_shiva);
                    }
                }
                else if (CanCastCD(skill_rearm, rockShiva.myHero) && !CanCastMana(skill_rearm, rockShiva.myHero) && rockShiva.menuManaItemNeeded) {
                    UseObject(skill_rearm);
                }
                if (!rockShiva.menuManaItemNeeded) {
                    for (let index = 0; index < rockShiva.itemMana.length; index++) {
                        if (rockShiva.myHero.GetItem(rockShiva.itemMana[index][0], false)) {
                            if (rockShiva.itemManaBool[index]) {
                                if (index == 1) {
                                    if (rockShiva.myHero.GetHealth() - 135 >= 200)
                                        rockShiva.myHero.GetItem(rockShiva.itemMana[index][0], false).CastNoTarget();
                                }
                                else
                                    rockShiva.myHero.GetItem(rockShiva.itemMana[index][0], false).CastNoTarget();
                            }
                        }
                    }
                }
                if (item_blink && item_blink.CanCast()) {
                    item_blink.CastPosition(Input.GetWorldCursorPos());
                }
            }
        }
    }
};
tinker_RocketShiva.OnGameEnd = () => { rockShiva.gameStart = false; };
tinker_RocketShiva.OnScriptLoad = tinker_RocketShiva.OnGameStart = rockShiva.Load.Init;
function UseObject(object) {
    let nowMana = rockShiva.myHero.GetMana();
    for (let index = 0; index < rockShiva.itemMana.length; index++) {
        if (rockShiva.myHero.GetItem(rockShiva.itemMana[index][0], false)) {
            if (rockShiva.itemManaBool[index]) {
                if (index == 1) {
                    if (rockShiva.myHero.GetHealth() - 135 >= 200) {
                        rockShiva.myHero.GetItem(rockShiva.itemMana[index][0], false).CastNoTarget();
                        nowMana += rockShiva.itemMana[index][1];
                    }
                }
                else {
                    rockShiva.myHero.GetItem(rockShiva.itemMana[index][0], false).CastNoTarget();
                    nowMana += rockShiva.itemMana[index][1];
                }
            }
            if (nowMana >= object.GetManaCost()) {
                object.CastNoTarget();
                break;
            }
        }
    }
}
function CanCastMana(var0, hero) {
    return hero.GetMana() >= var0.GetManaCost() ? true : false;
}
function CanCastCD(var0, hero) {
    return var0.GetCooldown() == 0 ? true : false;
}
RegisterScript(tinker_RocketShiva);


/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./src/Tinker_RockShiva.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\Tinker_RockShiva.ts */"./src/Tinker_RockShiva.ts");


/***/ })

/******/ });