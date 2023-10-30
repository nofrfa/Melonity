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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Abuse_Muerta.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Abuse_Muerta.ts":
/*!*****************************!*\
  !*** ./src/Abuse_Muerta.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

let Abuse_Muerta = {};
function GetOptionInFolder(_path, optionName) {
    let menuHandler = Menu.GetFolderOptions(_path);
    if (menuHandler) {
        for (let opt of menuHandler) {
            if (opt.GetType() != 0 && opt.GetName() === optionName) {
                return opt;
            }
        }
    }
    return undefined;
}
var abuse_Muerta;
(function (abuse_Muerta) {
    const PATH = ['Custom Scripts', 'Abuse', 'Muerta'];
    let particle;
    let comboKey;
    let myHero, myPlayer;
    let ENABLE = Menu.AddToggle(PATH, 'Gunslinger Hack', false)
        .SetImage('panorama/images/spellicons/muerta_gunslinger_png.vtex_c')
        .OnChange(state => ENABLE = state.newValue)
        .GetValue();
    let WorkAfterLVL = Menu.AddSlider(PATH, 'Work after ... level up', 1, 4, 4, 1)
        .SetNameLocale('ru', 'Работать после ... уровня прокачки')
        .OnChange(state => WorkAfterLVL = state.newValue)
        .GetValue();
    let OnlyWithTalent = Menu.AddToggle(PATH, 'Only work with talent', true)
        .SetNameLocale('ru', 'Работать только с талантом')
        .SetImage('panorama/images/spellicons/muerta_gunslinger_png.vtex_c')
        .OnChange(state => OnlyWithTalent = state.newValue)
        .GetValue();
    let WorkStyle = Menu.AddComboBox(PATH, 'Work type', ['Hold RMB', 'Bind', 'In Combo'], 0)
        .SetNameLocale('ru', 'Тип активации')
        .SetComboBoxLocale('ru', ['Зажатие ПКМ', 'Бинд', 'В комбо'])
        .OnChange(state => {
        WorkStyle = state.newValue;
        if (state.newValue != 0)
            activeBind = false;
        GetOptionInFolder(PATH, 'Bind').SetHidden(WorkStyle != 1);
        GetOptionInFolder(PATH, 'Activation').SetHidden(WorkStyle != 1);
    })
        .GetValue();
    let Bind = Menu.AddKeyBind(PATH, 'Bind', Enum.ButtonCode.KEY_NONE)
        .SetNameLocale('ru', 'Бинд');
    let activeBind = false;
    let BindType = Menu.AddComboBox(PATH, 'Activation', ['Hold', 'One'], 0)
        .SetNameLocale('ru', 'Активация')
        .SetComboBoxLocale('ru', ['Зажимать', 'По одному нажатию'])
        .OnChange(state => {
        BindType = state.newValue;
        if (state.newValue == 0)
            activeBind = false;
    })
        .GetValue();
    GetOptionInFolder(PATH, 'Bind').SetHidden(WorkStyle != 1);
    GetOptionInFolder(PATH, 'Activation').SetHidden(WorkStyle != 1);
    Menu.GetFolder(PATH)
        .SetTip('Скрипт позволяет абузить двойные выстрелы\nДля работы необходимо просто зажать ПКМ юнита', 'ru')
        .SetTip('The script allows you to abuse double shots.\nTo work, simply hold down the right mouse button on the unit', 'en')
        .SetImage('panorama/images/heroes/icons/npc_dota_hero_muerta_png.vtex_c');
    Abuse_Muerta.OnGameStart = Abuse_Muerta.OnScriptLoad = () => {
        myHero = EntitySystem.GetLocalHero();
        if (myHero) {
            if (myHero.GetUnitName() != 'npc_dota_hero_muerta') {
                myHero = null;
                return;
            }
            myPlayer = EntitySystem.GetLocalPlayer();
            comboKey = GetOptionInFolder(['Heroes', 'Intelligence', 'Muerta'], 'Bind');
        }
    };
    Abuse_Muerta.OnGameEnd = () => {
        myHero = myPlayer = target = null;
        if (particle) {
            particle.Destroy();
            particle = null;
        }
    };
    function Dist2D(vec1, vec2) {
        if (vec1 && vec2) {
            let pos1 = (vec1.x ? (vec1) : (vec1.GetAbsOrigin ? (vec1.GetAbsOrigin()) : (0)));
            let pos2 = (vec2.x ? (vec2) : (vec2.GetAbsOrigin ? (vec2.GetAbsOrigin()) : (0)));
            return pos1 && pos2 && pos1.sub(pos2).Length2D();
        }
        return -1;
    }
    function GetTarget(centerPos) {
        let curPos = centerPos;
        return EntitySystem.GetEntitiesList()
            .filter(x => x && x.IsExist() && x.IsNPC() &&
            //@ts-ignore
            !x.HasState(Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) && x.IsAlive() && (x.GetTeamNum() == myHero.GetTeamNum() ? x.GetHealth() / x.GetMaxHealth() * 100 < 50 : true) &&
            !x.IsDormant() && Dist2D(x.GetAbsOrigin(), curPos) < 600)
            .sort((a, b) => {
            return Dist2D(a, curPos) - Dist2D(b, curPos);
        })[0];
    }
    let target;
    Abuse_Muerta.OnUpdate = () => {
        if (!ENABLE || !myHero || !myHero.IsAlive() || myHero.HasState(Enum.ModifierState.MODIFIER_STATE_PASSIVES_DISABLED))
            return;
        let lvl = myHero.GetAbilityByIndex(2).GetLevel();
        if (lvl == 0 || lvl < WorkAfterLVL)
            return;
        if (OnlyWithTalent) {
            let talent = myHero.GetAbility('special_bonus_unique_muerta_gunslinger_double_shot_chance').GetLevel();
            if (!talent)
                return;
        }
        if (WorkStyle == 1) {
            if (BindType == 1) {
                if (Bind.IsKeyDownOnce())
                    activeBind = !activeBind;
                if (!activeBind) {
                    target = null;
                    return;
                }
            }
            else {
                if (!Bind.IsKeyDown()) {
                    target = null;
                    return;
                }
            }
            if (target && (!target.IsExist() || !target.IsAlive()))
                target = null;
            if (!target) {
                target = GetTarget(activeBind ? myHero.GetAbsOrigin() : Input.GetWorldCursorPos());
            }
            if (!target) {
                if (Engine.OnceAt(0.15))
                    myHero.MoveTo(Input.GetWorldCursorPos());
                return;
            }
        }
        else if (WorkStyle == 2) {
            if (comboKey && !comboKey.IsKeyDown())
                return;
        }
        if (target && Engine.OnceAt(0.1)) {
            myPlayer.PrepareUnitOrdersStructed({
                entity: myHero,
                orderType: Enum.UnitOrder.DOTA_UNIT_ORDER_ATTACK_TARGET,
                orderIssuer: Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_HERO_ONLY,
                target: target
            });
        }
        let activity = myHero.GetActivity();
        if (activity == 1503 || activity == 1504) {
            myPlayer.PrepareUnitOrdersStructed({
                entity: myHero,
                orderType: Enum.UnitOrder.DOTA_UNIT_ORDER_STOP,
                orderIssuer: Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_HERO_ONLY
            });
        }
    };
    Abuse_Muerta.OnDraw = () => {
        if (!ENABLE || !myHero || !myHero.IsAlive())
            return;
        if (target) {
            if (!particle) {
                particle = Particle.Create('particles/ui_mouseactions/range_finder_tower_aoe.vpcf', Enum.ParticleAttachment.PATTACH_INVALID, target);
                particle.SetControl(2, EntitySystem.GetLocalHero().GetAbsOrigin());
                particle.SetControl(6, new Vector(1, 0, 0));
                particle.SetControl(7, target.GetAbsOrigin());
            }
            else {
                particle.SetControl(2, EntitySystem.GetLocalHero().GetAbsOrigin());
                particle.SetControl(7, target.GetAbsOrigin());
            }
        }
        else {
            if (particle) {
                particle.Destroy();
                particle = null;
            }
        }
    };
    RegisterScript(Abuse_Muerta);
})(abuse_Muerta || (abuse_Muerta = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FidXNlX011ZXJ0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQyIsImZpbGUiOiJBYnVzZV9NdWVydGEuanMiLCJzb3VyY2VSb290IjoiIn0=