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
    const safeShopPos = new Vector(5253, -1083, 256);
    let cour;
    let courierSafePosENABLE = Menu.AddToggle([...path, 'Courier'], 'Safe Pos', false)
        .SetNameLocale('ru', 'Безопасная позиция')
        .SetTip('If the courier is sent to a secret shop on the side of the forces of dire\nThe courier will get into a safer position', 'en')
        .SetTip('Если курьер будет отправлен в потайную лавку на стороне сил тьмы\nКурьер встанет в более безопасную позицию', 'ru')
        .OnChange(state => {
        courierSafePosENABLE = state.newValue;
    })
        .GetValue();
    let bestRadius;
    let courierOutFountainENABLE = Menu.AddToggle([...path, 'Courier'], 'Courier dispatch from the fountain', false)
        .SetNameLocale('ru', 'Вывод с фонтана')
        .SetTip('It will automatically move the courier from the fountain to the best position\nIf enemies are nearby, the courier will retreat to a safe zone', 'en')
        .SetTip('Будет автоматически выводить курьера с фонтана в лучшую позицию\nЕсли рядом окажутся враги - курьер уйдёт в безопасную зону.', 'ru')
        .OnChange(state => {
        courierOutFountainENABLE = state.newValue;
    })
        .GetValue();
    let courierOutFountainWorkTime = Menu.AddSlider([...path, 'Courier'], 'Do not dispatch the courier after ... minutes', 0, 40, 15, 1)
        .SetNameLocale('ru', 'Не выводить курьера после ... минуты')
        .SetTip('0 - Always dispatch', 'en')
        .SetTip('0 - Всегда выводить', 'ru')
        .OnChange(state => courierOutFountainWorkTime = state.newValue)
        .GetValue();
    Menu.GetFolder([...path, 'Courier'])
        .SetTip('Courier scripts', 'en')
        .SetTip('Скрипты для курьера', 'ru')
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
            if (myHero.GetTeamNum() == 2) {
                bestRadius = {
                    top: new Vector(-7003.44, -5432.97, 256),
                    mid: new Vector(-6201.75, -5941.91, 256),
                    bottom: new Vector(-5945.91, -6257.62, 256),
                    safe: new Vector(-6746.22, -6212.06, 384)
                };
            }
            else if (myHero.GetTeamNum() == 3) {
                bestRadius = {
                    top: new Vector(5875.53, 6143.09, 256),
                    mid: new Vector(6298.56, 5722.81, 256),
                    bottom: new Vector(6727.91, 5329.25, 256),
                    safe: new Vector(6700.91, 6136.91, 384)
                };
            }
        }
        if (!myHero || !myHero.IsExist() || myHero.GetUnitName() == null) {
            myHero = myPlayer = gameStarted = cour = null;
            panorama = {
                items: null,
                neutrals: null
            };
            bestRadius = null;
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
        bestRadius = null;
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
                            if (!CheckOnPanorama(panorama.items) && !CheckOnPanorama(panorama.neutrals) && !Engine.IsShopOpen() && !Engine.IsMenuOpen() && !Input.IsCursorOnMinimap()) {
                                myPlayer.PrepareUnitOrdersStructed({
                                    orderIssuer: Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_SELECTED_UNITS,
                                    orderType: Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION,
                                    position: Input.GetWorldCursorPos(),
                                    entity: myHero
                                });
                            }
                        }, 50);
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
    function GetBestCourierPos(positions = bestRadius) {
        if (!bestRadius || GameRules.GetGameTime() / 60 >= courierOutFountainWorkTime)
            return;
        if (!cour || !cour.IsAlive())
            return;
        let states = cour.GetCourierState();
        if (states >= 2) {
            return;
        }
        let heroPos = myHero.GetAbsOrigin();
        let poses = [positions.top, positions.mid, positions.bottom];
        let bestPos;
        if (cour.GetHeroesInRadius(3000, Enum.TeamType.TEAM_ENEMY).length > 0)
            bestPos = positions.safe;
        else
            bestPos = poses.sort((a, b) => {
                return Dist2D(a, heroPos) - Dist2D(b, heroPos);
            })[0];
        if (Dist2D(cour, bestPos) < 150)
            return;
        return bestPos;
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
            if (Engine.OnceAtByKey(1, 'FindCourier')) {
                if (!cour || !cour.IsExist()) {
                    FindCour();
                }
            }
            if (courierSafePosENABLE && myHero.GetTeamNum() == 3) {
                if (Engine.OnceAtByKey(1, 'Courier_SafePos')) {
                    if (cour && cour.IsExist() && cour.IsAlive()) {
                        let cour_state = cour.GetCourierState();
                        if (cour_state == 0 && Dist2D(shopPos, cour) <= 700 && Dist2D(safeShopPos, cour) >= 150) {
                            myPlayer.PrepareUnitOrdersStructed({
                                position: safeShopPos,
                                orderType: Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION,
                                entity: cour,
                                forcedType: (Renderer.WorldToScreen(safeShopPos)[2] ? Enum.ForcedType.None : Enum.ForcedType.Minimap)
                            });
                        }
                    }
                }
            }
            if (courierOutFountainENABLE) {
                if (Engine.OnceAtByKey(1, 'Courier_BestPos') && cour && cour.IsExist() && cour.IsAlive()) {
                    let bestPos = GetBestCourierPos();
                    if (bestPos) {
                        myPlayer.PrepareUnitOrdersStructed({
                            position: bestPos,
                            orderType: Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION,
                            entity: cour,
                            forcedType: (Renderer.WorldToScreen(bestPos)[2] ? Enum.ForcedType.None : Enum.ForcedType.Minimap)
                        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQSxjQUFjLHlCQUF5QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUNBQWlDLCtFQUErRTtBQUNoSCxxQ0FBcUMsK0VBQStFO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6IiJ9