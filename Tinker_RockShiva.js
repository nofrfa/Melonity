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

let T_spammer = {};
var Tinker_Spammer;
(function (Tinker_Spammer) {
    const path = ['Custom Scripts', 'Heroes', 'Intelligence', 'Tinker'];
    const item_Images = ['item_enchanted_mango', 'item_arcane_ring', 'item_arcane_boots', 'item_guardian_greaves', 'item_soul_ring'];
    let [myHero, myPlayer] = [null, null];
    let shivaUsed = 0;
    let gameStarted = false;
    let [rocketUsed] = [false];
    T_spammer.OnScriptLoad = T_spammer.OnGameStart = () => {
        if (GameRules.IsActiveGame()) {
            myHero = EntitySystem.GetLocalHero();
            myPlayer = EntitySystem.GetLocalPlayer();
            gameStarted = true;
        }
        if (!myHero || !myHero.IsExist() || myHero.GetUnitName() !== 'npc_dota_hero_tinker') {
            gameStarted = false;
            return;
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
    function IsntUndefined(value, withfalse) {
        return withfalse ? (value !== false) : value !== undefined && value !== null;
    }
    function GetAngleToPos(_e1, _e2, prefer = _e2, inrad) {
        let [a, b] = [IsntUndefined(_e1.x) ? _e1 : _e1.GetAbsOrigin(), IsntUndefined(_e2.x) ? _e2 : _e2.GetAbsOrigin()];
        if (prefer == _e1) {
            [a, b] = [b, a];
        }
        let atan2 = Math.atan2(b.y - a.y, b.x - a.x);
        return inrad ? atan2 : (atan2 * (180 / Math.PI));
    }
    function CreateMultiSelect(path, name, iconsArray, default_value = true, translate) {
        let icons = [];
        for (let q of iconsArray) {
            icons.push(GetImagesPath(q));
        }
        let a = Menu.AddMultiSelect(path, name, icons, default_value);
        if (translate) {
            if (typeof translate === 'string') {
                a.SetNameLocale('ru', translate);
            }
            else {
                for (let q of translate) {
                    // struct: array {"language", "translate"}
                    a.SetNameLocale(q.language, q['translate']);
                }
            }
        }
        return {
            GetOption: () => {
                return a;
            },
            IsEnabled: (name) => {
                let n = name;
                if (typeof name === 'object') {
                    if (name.GetEntityName()) {
                        n = name.GetEntityName();
                    }
                    if (name.GetName()) {
                        n = name.GetName();
                    }
                }
                return a.GetValue()[iconsArray.indexOf(n)];
            }
        };
    }
    let enableMenu = Menu.AddToggle(path, 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange((state) => {
        enableMenu = state.newValue;
    })
        .GetValue();
    let menu_ComboKey = Menu.AddKeyBind(path, 'Key', Enum.ButtonCode.KEY_NONE)
        .SetNameLocale('ru', 'Бинд комбо');
    let menu_CreepKey = Menu.AddKeyBind(path, 'Key Farm Creep', Enum.ButtonCode.KEY_NONE)
        .SetNameLocale('ru', 'Бинд фарма крипов')
        .SetTip('Will use shiva 3 times, not 4');
    let rocketFarm = Menu.AddToggle(path, 'Use Rockets with `Key Farm Creep`', false)
        .SetNameLocale('ru', 'Использовать ракеты с `Бинд фарма крипов`')
        .OnChange((state) => {
        rocketFarm = state.newValue;
    })
        .GetValue();
    let useDoubleShiva = Menu.AddToggle(path, 'Use Double Shiva', true)
        .SetNameLocale('ru', 'Использовать дабл шиву')
        .OnChange((state) => {
        useDoubleShiva = state.newValue;
    })
        .GetValue();
    let menu_ItemsList = CreateMultiSelect(path, 'Items', item_Images, true, [{ language: 'ru', translate: 'Предметы' }]);
    Menu.SetImage(['Custom Scripts', 'Heroes'], '~/menu/40x40/heroes.png');
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Intelligence'], '~/menu/40x40/intelligence.png');
    Menu.SetImage(path, 'panorama/images/heroes/icons/npc_dota_hero_tinker_png.vtex_c');
    function CustomCanCast(item) {
        let owner = item.GetOwner(), hasModf = owner.HasState(Enum.ModifierState.MODIFIER_STATE_MUTED)
            || owner.HasState(Enum.ModifierState.MODIFIER_STATE_STUNNED)
            || owner.HasState(Enum.ModifierState.MODIFIER_STATE_HEXED)
            || owner.HasState(Enum.ModifierState.MODIFIER_STATE_INVULNERABLE)
            || owner.HasState(Enum.ModifierState.MODIFIER_STATE_FROZEN)
            || owner.HasState(Enum.ModifierState.MODIFIER_STATE_FEARED)
            || owner.HasState(Enum.ModifierState.MODIFIER_STATE_TAUNTED);
        return item && !hasModf && owner.GetMana() >= item.GetManaCost() && item.IsCastable(owner.GetMana());
    }
    function Dist2D(vec1, vec2) {
        if (vec1 && vec2) {
            let pos1 = (vec1.x ? (vec1) : (vec1.GetAbsOrigin ? (vec1.GetAbsOrigin()) : (0)));
            let pos2 = (vec2.x ? (vec2) : (vec2.GetAbsOrigin ? (vec2.GetAbsOrigin()) : (0)));
            return pos1 && pos2 && pos1.sub(pos2).Length2D();
        }
        return -1;
    }
    function GetBlink() {
        return myHero.GetItem('item_blink', true) ||
            myHero.GetItem('item_overwhelming_blink', true) ||
            myHero.GetItem('item_arcane_blink', true) ||
            myHero.GetItem('item_swift_blink', true);
    }
    T_spammer.OnUpdate = () => {
        if (gameStarted && enableMenu) {
            if (Engine.OnceAt(0.2)) {
                let [rocket, rearm] = [
                    myHero.GetAbilityByIndex(1),
                    myHero.GetAbilityByIndex(5)
                ];
                if (menu_ComboKey.IsKeyDown() || menu_CreepKey.IsKeyDown()) {
                    for (let nItem of item_Images) {
                        let iItem = myHero.GetItem(nItem, false);
                        if (!iItem || !iItem.IsExist() || !menu_ItemsList.IsEnabled(iItem) || !CustomCanCast(iItem))
                            continue;
                        if (nItem === 'item_soul_ring') {
                            if (myHero.GetHealth() - 135 >= 200)
                                iItem.CastNoTarget();
                        }
                        else
                            iItem.CastNoTarget();
                    }
                    let blink = GetBlink();
                    let addRadius = 0;
                    let needItems = myHero.GetItem('item_aether_lens', true) || myHero.GetItem('item_octarine_core', true);
                    if (needItems && needItems.IsExist())
                        addRadius += needItems.GetLevelSpecialValueFor('cast_range_bonus');
                    let keen = myHero.GetItem('item_keen_optic', false);
                    if (keen && keen.IsExist())
                        addRadius += keen.GetLevelSpecialValueFor('cast_range_bonus');
                    let seer = myHero.GetItem('item_seer_stone', false);
                    if (seer && seer.IsExist()) {
                        addRadius += seer.GetLevelSpecialValueFor('cast_range_bonus');
                    }
                    if (blink && blink.IsExist() && CustomCanCast(blink) && !myHero.IsChannellingAbility()) {
                        let pos = Dist2D(myHero.GetAbsOrigin(), Input.GetWorldCursorPos());
                        if (pos <= 1200 + addRadius)
                            blink.CastPosition(Input.GetWorldCursorPos());
                        else {
                            let mh = Renderer.WorldToScreen(myHero.GetAbsOrigin());
                            if (mh[2]) {
                                blink.CastPosition(myHero.GetAbsOrigin().add(new Vector(1200 + addRadius - 1, 0, 0).Rotated(GetAngleToPos(myHero.GetAbsOrigin(), Input.GetWorldCursorPos()))));
                            }
                            else {
                                let dist = Dist2D(myHero.GetAbsOrigin(), Input.GetWorldCursorPos());
                                if (dist >= 1200 + addRadius) {
                                    blink.CastPosition(myHero.GetAbsOrigin().add(new Vector(1200 + addRadius - 7).Rotated(GetAngleToPos(myHero.GetAbsOrigin(), Input.GetWorldCursorPos()))));
                                }
                                else {
                                    blink.CastPosition(Input.GetWorldCursorPos());
                                }
                            }
                        }
                    }
                    let enemyInRadius = myHero.GetHeroesInRadius(2500 + addRadius, Enum.TeamType.TEAM_ENEMY).length;
                    if ((menu_ComboKey.IsKeyDown() || (menu_CreepKey.IsKeyDown() && rocketFarm))) {
                        if ((rocket && rocket.IsExist() && rocket.CanCast())) {
                            if (enemyInRadius) {
                                rocket.CastNoTarget();
                            }
                        }
                    }
                    if (!rocket || !rocket.IsExist() || !rocket.CanCast() || enemyInRadius == 0 || !rocketFarm) {
                        rocketUsed = true;
                    }
                    if (rocket.CanCast() && enemyInRadius > 0) {
                        rocketUsed = false;
                    }
                }
                if (menu_ComboKey.IsKeyDown()) {
                    let blink = GetBlink();
                    if (rearm && rearm.IsExist() && rearm.CanCast() && !rearm.IsChannelling() && rocketUsed && !(blink && blink.IsExist() && CustomCanCast(blink))) {
                        rearm.CastNoTarget();
                    }
                    if (rearm.IsChannelling()) {
                        let shiva = myHero.GetItem('item_shivas_guard', true);
                        if (shiva && shiva.IsExist() && shiva.CanCast()) {
                            if (useDoubleShiva) {
                                setTimeout(() => {
                                    if (shiva.CanCast())
                                        shiva.CastNoTarget();
                                }, 1000 * myHero.GetAbilityByIndex(5).GetLevelSpecialValueForFloat('AbilityChannelTime') - 300);
                                setTimeout(() => {
                                    if (shiva.CanCast())
                                        shiva.CastNoTarget();
                                }, 1000 * myHero.GetAbilityByIndex(5).GetLevelSpecialValueForFloat('AbilityChannelTime') + 300);
                            }
                            else {
                                shiva.CastNoTarget();
                            }
                        }
                    }
                }
                if (menu_CreepKey.IsKeyDown()) {
                    let shiva = myHero.GetItem('item_shivas_guard', true);
                    if (shiva && shiva.IsExist() && shiva.CanCast() && shivaUsed >= 2) {
                        if (shiva.CanCast())
                            shiva.CastNoTarget();
                        shivaUsed = 0;
                    }
                    if (rearm && rearm.IsExist() && rearm.CanCast() && !rearm.IsChannelling()) {
                        rearm.CastNoTarget();
                    }
                    if (rearm.IsChannelling()) {
                        if (shiva && shiva.IsExist() && shiva.CanCast()) {
                            if (useDoubleShiva) {
                                if (shivaUsed < 2) {
                                    setTimeout(() => {
                                        if (shiva.CanCast())
                                            shiva.CastNoTarget();
                                        ++shivaUsed;
                                    }, 1000 * myHero.GetAbilityByIndex(5).GetLevelSpecialValueForFloat('AbilityChannelTime') - 300);
                                }
                                if (shivaUsed < 2) {
                                    setTimeout(() => {
                                        if (shiva.CanCast())
                                            shiva.CastNoTarget();
                                        ++shivaUsed;
                                    }, 1000 * myHero.GetAbilityByIndex(5).GetLevelSpecialValueForFloat('AbilityChannelTime') + 300);
                                }
                            }
                            else {
                                shiva.CastNoTarget();
                            }
                        }
                    }
                }
            }
        }
    };
    T_spammer.OnGameEnd = () => {
        myHero = null;
        gameStarted = false;
    };
    RegisterScript(T_spammer);
})(Tinker_Spammer || (Tinker_Spammer = {}));


/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./src/Tinker_RockShiva.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Melonity\scripts\src\Tinker_RockShiva.ts */"./src/Tinker_RockShiva.ts");


/***/ })

/******/ });