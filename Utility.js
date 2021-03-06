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

/***/ "./src/Utility.ts":
/*!************************!*\
  !*** ./src/Utility.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

let CustomUtility = {};
function GetTipStringImage(imagePath) {
    return '{{' + imagePath + ':false}}';
}
function GetImagePath(abilityname) {
    return 'panorama/images/' + abilityname + '_png.vtex_c';
}
var customUtil;
(function (customUtil) {
    let myHero, myPlayer, gameStarted;
    const path = ['Custom Scripts', 'Other'];
    //Roshan FuckPos
    const Poses = [
        new Vector(-2246, 2215, 13),
        new Vector(-2404, 2033, 28),
        new Vector(-2528, 1888, 26)
    ];
    const image = Renderer.LoadImage(`panorama/images/hud/reborn/roshan_timer_roshan_psd.vtex_c`);
    let roshENABLE = Menu.AddToggle([...path, 'Roshan InvisPos'], 'Enable', false)
        .SetNameLocale('ru', '????????????????')
        .SetTip(`Adds buttons: ${GetTipStringImage('panorama/images/hud/reborn/roshan_timer_roshan_psd.vtex_c')}, at the entrance to Roshan pit buttons, clicking on which, your hero will stand in a position where he can be seen only when he is nearby`, 'en')
        .SetTip(`?????????????????? ????????????: ${GetTipStringImage('panorama/images/hud/reborn/roshan_timer_roshan_psd.vtex_c')}, ?? ?????????? ?? ???????????? ???????????? ????????????, ?????????? ???? ??????????????, ?????? ?????????? ?????????????? ?? ??????????????, ?????????? ?????? ?????????? ?????????? ?????????????? ???????????? ???????????????????? ??????????`, 'ru')
        .OnChange(state => {
        roshENABLE = state.newValue;
    })
        .GetValue();
    Menu.GetFolder([...path, 'Roshan InvisPos']).SetImage('panorama/images/hud/reborn/roshan_timer_roshan_psd.vtex_c');
    //Courier
    const shopPos = new Vector(4893, -1193, 128);
    const bestPos = new Vector(5253, -1083, 256);
    let cour;
    let courierENABLE = Menu.AddToggle([...path, 'Courier'], 'Safe Pos', false)
        .SetNameLocale('ru', '???????????????????? ??????????????')
        .SetTip('If the courier is sent to a secret shop on the side of the forces of dire\nThe courier will get into a safer position', 'en')
        .SetTip('???????? ???????????? ?????????? ?????????????????? ?? ???????????????? ?????????? ???? ?????????????? ?????? ????????\n???????????? ?????????????? ?? ?????????? ???????????????????? ??????????????', 'ru')
        .OnChange(state => {
        courierENABLE = state.newValue;
    })
        .GetValue();
    Menu.GetFolder([...path, 'Courier']).SetImage(GetImagePath('items/courier'));
    //Spinner
    let spinnerENABLE = Menu.AddToggle([...path, 'Spinner'], 'Enable', false)
        .SetNameLocale('ru', '????????????????')
        .OnChange(state => {
        spinnerENABLE = state.newValue;
    })
        .GetValue();
    let spinnerBind = Menu.AddKeyBind([...path, 'Spinner'], 'Bind', Enum.ButtonCode.KEY_NONE)
        .SetNameLocale('ru', '????????');
    Menu.GetFolder([...path, 'Spinner'])
        .SetTip('?????? ?????????????? ?????????? ?????? ???????????????? ?????????? ?????????? ?????????????????? ???? ??????????', 'ru')
        .SetTip('When the bind is clamped, your main hero will spin on the spot', 'en')
        .SetImage('panorama/images/control_icons/refresh_psd.vtex_c');
    CustomUtility.OnScriptLoad = CustomUtility.OnGameStart = () => {
        if (GameRules.IsActiveGame()) {
            myHero = EntitySystem.GetLocalHero();
            myPlayer = EntitySystem.GetLocalPlayer();
            gameStarted = true;
        }
        if (!myHero || !myHero.IsExist() || myHero.GetUnitName() == null) {
            myHero = null;
            myPlayer = null;
            gameStarted = false;
            cour = null;
        }
    };
    CustomUtility.OnGameEnd = () => {
        myHero = null;
        myPlayer = null;
        gameStarted = false;
        cour = null;
    };
    CustomUtility.OnDraw = () => {
        if (gameStarted) {
            if (roshENABLE && !Engine.IsShopOpen()) {
                for (let pos of Poses) {
                    let [x, y, OnScreen] = Renderer.WorldToScreen(pos);
                    if (!OnScreen)
                        continue;
                    Renderer.PushDrawCentered();
                    Renderer.SetDrawColor(0, 0, 0, 122);
                    Renderer.DrawFilledRect(x, y, 32, 32, 30);
                    Renderer.SetDrawColor(255, 255, 255, 122);
                    Renderer.DrawImage(image, x, y - 1, 24, 24);
                    if (Input.IsCursorInRect(x, y, 32, 32, Enum.ContentAlign.CenterXY)) {
                        Renderer.SetDrawColor(0, 255, 0, 122);
                        Renderer.DrawOutlineRect(x, y, 32, 32, 30);
                    }
                    else {
                        Renderer.SetDrawColor(255, 255, 255, 122);
                        Renderer.DrawOutlineRect(x, y, 32, 32, 30);
                    }
                    Renderer.PopDrawOptions();
                }
            }
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
    function IsControllable(self, target) {
        return self.GetProperty('C_DOTA_BaseNPC', 'm_iIsControllableByPlayer64') ==
            target.GetProperty('C_DOTA_BaseNPC', 'm_iIsControllableByPlayer64');
    }
    function FindCour() {
        if (!myHero)
            return;
        let couriers_list = EntitySystem.GetCouriersList();
        for (let entCour of couriers_list) {
            if (IsControllable(myHero, entCour)) {
                cour = entCour;
                break;
            }
        }
    }
    function GetRotateTime(unit) {
        let time = 0.5;
        let turnRate = Number(unit.GetTurnRate().toString().substr(0, 4));
        if (turnRate == 0.6) {
            return 0.54;
        }
        else if (turnRate == 0.65 || turnRate == 0.7 || turnRate == 0.8) {
            return 0.5;
        }
        else if (turnRate == 0.89) {
            return 0.49;
        }
        return time;
    }
    CustomUtility.OnUpdate = () => {
        if (gameStarted) {
            if (roshENABLE && !Engine.IsShopOpen()) {
                for (let pos of Poses) {
                    let [x, y, OnScreen] = Renderer.WorldToScreen(pos);
                    if (!OnScreen)
                        continue;
                    if (Input.IsCursorInRect(x, y, 32, 32, Enum.ContentAlign.CenterXY) && Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT)) {
                        myPlayer.PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION, null, pos, null, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_CURRENT_UNIT_ONLY, myHero, false, true);
                    }
                }
            }
            if (courierENABLE && myHero.GetTeamNum() == 3) {
                if (Engine.OnceAt(1)) {
                    if (!cour || !cour.IsExist()) {
                        FindCour();
                        return;
                    }
                    if (cour.IsAlive()) {
                        let cour_state = cour.GetCourierState();
                        if (cour_state == 0 && Dist2D(shopPos, cour) <= 700 && Dist2D(bestPos, cour) >= 150) {
                            myPlayer.PrepareUnitOrdersStructed({
                                position: bestPos,
                                orderType: Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION,
                                entity: cour,
                                forcedType: (Renderer.WorldToScreen(bestPos)[2] ? Enum.ForcedType.None : Enum.ForcedType.Minimap)
                            });
                        }
                    }
                }
            }
            if (spinnerENABLE && spinnerBind.IsKeyDown()) {
                let me = myPlayer.GetAssignedHero();
                if (Engine.OnceAt(GetRotateTime(me))) {
                    for (let rot = 0; rot <= 330; rot = rot + 30) {
                        myPlayer.PrepareUnitOrdersStructed({
                            orderIssuer: Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_HERO_ONLY,
                            position: me.GetAbsOrigin().add(new Vector(Math.floor(Math.random() * (400 - 350 + 1)) + 350).Rotated(rot)),
                            orderType: Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_DIRECTION,
                            entity: me,
                            forcedType: (Renderer.WorldToScreen(me.GetAbsOrigin())[2] ? Enum.ForcedType.None : Enum.ForcedType.Minimap),
                            showEffects: true
                        });
                    }
                }
            }
        }
    };
    RegisterScript(CustomUtility);
})(customUtil || (customUtil = {}));


/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/Utility.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Melonity\scripts\src\Utility.ts */"./src/Utility.ts");


/***/ })

/******/ });