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

/***/ "./src/TinkerCumSpam.ts":
/*!******************************!*\
  !*** ./src/TinkerCumSpam.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __webpack_require__(/*! ./libs/lib */ "./src/libs/lib.ts");
let T_spammer = {};
var Tinker_Spammer;
(function (Tinker_Spammer) {
    const path = ['Custom Scripts', 'Heroes', 'Intelligence', 'Tinker'];
    const item_Images = ['item_enchanted_mango', 'item_arcane_ring', 'item_arcane_boots', 'item_guardian_greaves', 'item_soul_ring'];
    let [myHero, myPlayer] = [null, null];
    let gameStarted = false;
    let rocketUsed = false;
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
    let menu_ComboKey = Menu.AddKeyBind(path, 'Key', Enum.ButtonCode.KEY_NONE)
        .SetNameLocale('ru', 'Бинд комбо');
    let menu_ItemsList = lib_1.CreateMultiSelect(path, 'Items', item_Images, true, [{ language: 'ru', translate: 'Предметы' }]);
    Menu.SetImage(['Custom Scripts', 'Heroes'], '~/menu/40x40/heroes.png');
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Intelligence'], '~/menu/40x40/intelligence.png');
    Menu.SetImage(path, 'panorama/images/heroes/icons/npc_dota_hero_tinker_png.vtex_c');
    T_spammer.OnUpdate = () => {
        if (gameStarted && menu_ComboKey.IsKeyDown() && Engine.OnceAt(0.2)) {
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
            let blink;
            for (let i = 0; i < 6; i++) {
                let q = myHero.GetItemByIndex(+i);
                if (q && q.IsExist() && q.GetName().endsWith('_blink')) {
                    blink = q;
                }
            }
            let addRadius = 0;
            let needItems = myHero.GetItem('item_aether_lens', true) || myHero.GetItem('item_octarine_core', true);
            if (needItems && needItems.IsExist())
                addRadius = 225;
            let [rocket, rearm] = [
                myHero.GetAbilityByIndex(1),
                myHero.GetAbilityByIndex(5)
            ];
            if (blink && blink.IsExist() && CustomCanCast(blink)) {
                let pos = Dist2D(myHero.GetAbsOrigin(), Input.GetWorldCursorPos());
                if (pos <= 1200 + addRadius)
                    blink.CastPosition(Input.GetWorldCursorPos());
                else {
                    blink.CastPosition(myHero.GetAbsOrigin().add(new Vector(1199, 0, 0).Rotated(lib_1.GetAngleToPos(myHero, Input.GetWorldCursorPos()))));
                }
            }
            if (rocket && rocket.IsExist() && rocket.CanCast()) {
                let enemyInRadius = myHero.GetHeroesInRadius(2500 + addRadius, Enum.TeamType.TEAM_ENEMY).length;
                if (enemyInRadius) {
                    rocket.CastNoTarget();
                    rocketUsed = true;
                }
                else
                    rocketUsed = true;
            }
            if (rearm && rearm.IsExist() && rearm.CanCast() && !rearm.IsChannelling() && rocketUsed) {
                rearm.CastNoTarget();
            }
            if (rearm.IsChannelling()) {
                let shiva = myHero.GetItem('item_shivas_guard', true);
                if (shiva && shiva.IsExist() && shiva.CanCast()) {
                    setTimeout(() => {
                        if (shiva.CanCast())
                            shiva.CastNoTarget();
                    }, 1000 * myHero.GetAbilityByIndex(5).GetLevelSpecialValueForFloat('AbilityChannelTime') - 200);
                    setTimeout(() => {
                        if (shiva.CanCast())
                            shiva.CastNoTarget();
                    }, 1000 * myHero.GetAbilityByIndex(5).GetLevelSpecialValueForFloat('AbilityChannelTime') + 200);
                }
            }
        }
    };
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
    Tinker_Spammer.Dist2D = Dist2D;
    RegisterScript(T_spammer);
})(Tinker_Spammer || (Tinker_Spammer = {}));


/***/ }),

/***/ "./src/libs/lib.ts":
/*!*************************!*\
  !*** ./src/libs/lib.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RADIAN_TO_PI_KOEFF = 180 / Math.PI;
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
exports.GetImagesPath = GetImagesPath;
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
exports.CreateMultiSelect = CreateMultiSelect;
function CreatePrioritySelect(path, name, iconsArray, default_value = true, translate) {
    let icons = [];
    for (let q of iconsArray) {
        icons.push(GetImagesPath(q));
    }
    let a = Menu.AddPrioritySelect(path, name, icons, default_value);
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
        GetValue: () => {
            let t = [];
            for (let e of a.GetValue()) {
                t.push(iconsArray[e]);
            }
            return t;
        }
    };
}
exports.CreatePrioritySelect = CreatePrioritySelect;
function IsntUndefined(value, withfalse) {
    return withfalse ? (value !== false) : value !== undefined && value !== null;
}
function IsUndefined(value, withfalse) {
    return withfalse ? (value === false || !value) : (value !== false && !value);
}
exports.IsUndefined = IsUndefined;
function Dist2D(vec1, vec2) {
    if (vec1 && vec2) {
        let pos1 = (vec1.x ? (vec1) : (vec1.GetAbsOrigin ? (vec1.GetAbsOrigin()) : (0)));
        let pos2 = (vec2.x ? (vec2) : (vec2.GetAbsOrigin ? (vec2.GetAbsOrigin()) : (0)));
        return pos1 && pos2 && pos1.sub(pos2).Length2D();
    }
    return -1;
}
exports.Dist2D = Dist2D;
function GetAngleToPos(_e1, _e2, prefer = _e2, inrad) {
    let [a, b] = [IsntUndefined(_e1.x) ? _e1 : _e1.GetAbsOrigin(), IsntUndefined(_e2.x) ? _e2 : _e2.GetAbsOrigin()];
    if (prefer == _e1) {
        [a, b] = [b, a];
    }
    let atan2 = Math.atan2(b.y - a.y, b.x - a.x);
    return inrad ? atan2 : (atan2 * exports.RADIAN_TO_PI_KOEFF);
}
exports.GetAngleToPos = GetAngleToPos;
function GetBestPosition(units, MainEntity, range) {
    if (!units || !range) {
        return;
    }
    if (!(units.length > 0)) {
        return;
    }
    let enemyNum = units.length;
    if (enemyNum == 1) {
        return units[0].GetAbsOrigin();
    }
    let maxNum = 1;
    let bestPos = units[0].GetAbsOrigin();
    for (let i = 0; i < (enemyNum - 1); i++) {
        for (let j = i + 1; j < (enemyNum); j++) {
            if (units[i] && units[j]) {
                let pos1 = units[i].GetAbsOrigin();
                let pos2 = units[j].GetAbsOrigin();
                let mid = pos1.add(pos2).Scaled(0.5);
                let heroesNum = 0;
                for (let k = 0; k < enemyNum; k++) {
                    if (units[k].IsPositionInRange(mid, range, 0) && units[k].IsEntityInRange(MainEntity, range) && !units[k].IsDormant()) {
                        heroesNum = heroesNum + 1;
                    }
                }
                if (heroesNum > maxNum) {
                    maxNum = heroesNum;
                    bestPos = mid;
                }
            }
        }
    }
    return bestPos;
}
exports.GetBestPosition = GetBestPosition;
function GetHeroInRadiusWithPosition(Position, range, myHero, IsEnemy = true) {
    let hero_list = EntitySystem.GetHeroesList();
    let returnheroes = [];
    if (hero_list) {
        for (let i of hero_list) {
            if (i && !i.IsIllusion() && !i.IsMeepoClone() && i.IsHero() && i.IsAlive() && !i.IsDormant() && ((!i.IsSameTeam(myHero) && IsEnemy) || (IsEnemy === false && i.IsSameTeam(myHero))) && i.IsPositionInRange(Position, range, 0)) {
                returnheroes.push(i);
            }
        }
        return returnheroes;
    }
    return [];
}
exports.GetHeroInRadiusWithPosition = GetHeroInRadiusWithPosition;
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
exports.CustomCanCast = CustomCanCast;


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/TinkerCumSpam.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\TinkerCumSpam.ts */"./src/TinkerCumSpam.ts");


/***/ })

/******/ });