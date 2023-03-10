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
        .SetNameLocale('ru', 'Включить')
        .OnChange(state => {
        roshENABLE = state.newValue;
    })
        .GetValue();
    Menu.GetFolder([...path, 'Roshan InvisPos'])
        .SetTip(`Adds buttons: ${GetTipStringImage('panorama/images/hud/reborn/roshan_timer_roshan_psd.vtex_c')}, at the entrance to Roshan pit buttons,\nclicking on which your hero will stand in a position\nwhere he can be seen only when he is nearby`, 'en')
        .SetTip(`Добавляет кнопки: ${GetTipStringImage('panorama/images/hud/reborn/roshan_timer_roshan_psd.vtex_c')}, у входа в логово Рошана кнопки,\nнажав на которые ваш герой встанет в позицию,\nкогда его можно будет увидеть только оказавшись рядом`, 'ru')
        .SetImage('panorama/images/hud/reborn/roshan_timer_roshan_psd.vtex_c');
    //Courier
    const shopPos = new Vector(4893, -1193, 128);
    const bestPos = new Vector(5253, -1083, 256);
    let cour;
    let courierENABLE = Menu.AddToggle([...path, 'Courier'], 'Safe Pos', false)
        .SetNameLocale('ru', 'Безопасная позиция')
        .OnChange(state => {
        courierENABLE = state.newValue;
    })
        .GetValue();
    Menu.GetFolder([...path, 'Courier'])
        .SetTip('If the courier is sent to a secret shop on the side of the forces of dire\nThe courier will get into a safer position', 'en')
        .SetTip('Если курьер будет отправлен в потайную лавку на стороне сил тьмы\nКурьер встанет в более безопасную позицию', 'ru')
        .SetImage(GetImagePath('items/courier'));
    //Spinner
    let spinnerENABLE = Menu.AddToggle([...path, 'Spinner'], 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange(state => {
        spinnerENABLE = state.newValue;
    })
        .GetValue();
    let spinnerBind = Menu.AddKeyBind([...path, 'Spinner'], 'Bind', Enum.ButtonCode.KEY_NONE)
        .SetNameLocale('ru', 'Бинд');
    Menu.GetFolder([...path, 'Spinner'])
        .SetTip('При зажатом бинде ваш основной герой будет крутиться на месте', 'ru')
        .SetTip('When the bind is clamped, your main hero will spin on the spot', 'en')
        .SetImage('panorama/images/control_icons/refresh_psd.vtex_c');
    //Mouse Repeat Boost
    let root = Panorama.GetDotaHudRoot();
    let panorama = {
        items: null,
        neutrals: null
    };
    let mrbENABLE = Menu.AddToggle([...path, 'Mouse Repeat Boost'], 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange(state => {
        mrbENABLE = state.newValue;
    })
        .GetValue();
    Menu.GetFolder([...path, 'Mouse Repeat Boost'])
        .SetTip('Увеличивает количество кликов при зажатой ПКМ', 'ru')
        .SetTip('Increases the number of clicks when the RMB is clamped', 'en')
        .SetImage('panorama/images/mouse_illustrations_png.vtex_c');
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
            panorama = {
                items: null,
                neutrals: null
            };
        }
    };
    CustomUtility.OnGameEnd = () => {
        myHero = null;
        myPlayer = null;
        gameStarted = false;
        cour = null;
        panorama = {
            items: null,
            neutrals: null
        };
    };
    let mouseBoostInterval;
    function CheckOnPanorama(panoramaPanel) {
        if (!panoramaPanel) {
            return;
        }
        let [x, y] = panoramaPanel.GetPosition();
        let [width, height] = panoramaPanel.GetSize();
        return Input.IsCursorInRect(x, y, width, height);
    }
    let exOrders = [Enum.UnitOrder.DOTA_UNIT_ORDER_ATTACK_TARGET, Enum.UnitOrder.DOTA_UNIT_ORDER_ATTACK_MOVE];
    CustomUtility.OnPrepareUnitOrders = (event) => {
        if (gameStarted && mrbENABLE) {
            if (exOrders.includes(event.order)) {
                if (mouseBoostInterval) {
                    clearInterval(mouseBoostInterval);
                    mouseBoostInterval = null;
                }
            }
            else {
                if (event.order == Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION) {
                    if (!mouseBoostInterval) {
                        mouseBoostInterval = setInterval(() => {
                            if (!Input.IsKeyDown(Enum.ButtonCode.MOUSE_RIGHT)) {
                                clearInterval(mouseBoostInterval);
                                mouseBoostInterval = null;
                                return;
                            }
                            if (!CheckOnPanorama(panorama.items) && !CheckOnPanorama(panorama.neutrals) && !Engine.IsShopOpen() && !Engine.IsMenuOpen()) {
                                myPlayer.PrepareUnitOrdersStructed({
                                    orderIssuer: Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_SELECTED_UNITS,
                                    orderType: Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION,
                                    position: Input.GetWorldCursorPos(),
                                    entity: myHero
                                });
                            }
                        }, 1);
                    }
                    return;
                }
            }
        }
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
            //Переписать
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
            if (Engine.OnceAtByKey(1, 'Utility_MouseBoost_Panorama')) {
                panorama = {
                    items: root.FindChildFromPath(['Hud', 'HUDElements', 'lower_hud', 'center_with_stats', 'center_block',
                        'inventory', 'inventory_items', 'inventoryContainer', 'inventory_list_container']),
                    neutrals: root.FindChildFromPath(['Hud', 'HUDElements', 'lower_hud',
                        'center_with_stats', 'center_block',
                        'inventory_composition_layer_container'])
                };
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

module.exports = __webpack_require__(/*! ./src/Utility.ts */"./src/Utility.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUksYUFBYSxHQUFzQixFQUFFLENBQUM7QUFFMUMsU0FBUyxpQkFBaUIsQ0FBQyxTQUFTO0lBQ25DLE9BQU8sSUFBSSxHQUFHLFNBQVMsR0FBRyxVQUFVLENBQUM7QUFDdEMsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLFdBQW1CO0lBQ3hDLE9BQU8sa0JBQWtCLEdBQUcsV0FBVyxHQUFHLGFBQWEsQ0FBQztBQUN6RCxDQUFDO0FBRUQsSUFBVSxVQUFVLENBc1NuQjtBQXRTRCxXQUFVLFVBQVU7SUFDbkIsSUFBSSxNQUFZLEVBQUUsUUFBZ0IsRUFBRSxXQUFXLENBQUM7SUFDaEQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxnQkFB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