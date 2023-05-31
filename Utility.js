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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Utility.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Utility.ts":
/*!************************!*\
  !*** ./src/Utility.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.customUtil = void 0;
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
    let screenSize = Renderer.GetScreenSize();
    let ration = 1080 / screenSize[1];
    //Roshan FuckPos
    const roshPoses = [
        //top
        new Vector(-7333.53, 7582.62, 0.4375),
        new Vector(-7463, 7417.81, 9.25),
        new Vector(-7576.34, 7292.47, 8.0625),
        //bot
        new Vector(7655.28, -7463.38, 7.625),
        new Vector(7497.16, -7605.5, 6.3125),
        new Vector(7360.06, -7783.78, 0)
    ];
    const roshImage = Renderer.LoadImage(`panorama/images/hud/reborn/roshan_timer_roshan_psd.vtex_c`);
    let roshENABLE = Menu.AddToggle([...path, 'Roshan InvisPos'], 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange(state => {
        roshENABLE = state.newValue;
    })
        .GetValue();
    let roshShowInRadius = Menu.AddToggle([...path, 'Roshan InvisPos'], 'Display only if hero is near', true)
        .SetNameLocale('ru', 'Отображать только если герой рядом')
        .OnChange(state => roshShowInRadius = state.newValue)
        .GetValue();
    Menu.GetFolder([...path, 'Roshan InvisPos'])
        .SetTip(`Adds buttons: ${GetTipStringImage('panorama/images/hud/reborn/roshan_timer_roshan_psd.vtex_c')}, at the entrance to Roshan pit buttons,\nclicking on which your hero will stand in a position\nwhere he can be seen only when he is nearby`, 'en')
        .SetTip(`Добавляет кнопки: ${GetTipStringImage('panorama/images/hud/reborn/roshan_timer_roshan_psd.vtex_c')}, у входа в логово Рошана кнопки,\nнажав на которые ваш герой встанет в позицию,\nкогда его можно будет увидеть только оказавшись рядом`, 'ru')
        .SetImage('panorama/images/hud/reborn/roshan_timer_roshan_psd.vtex_c');
    //Fountain FuckPos
    const fountainPoses = {
        2: [
            new Vector(6360.78, 6198.5, 374.031),
            new Vector(6726.31, 5830.59, 372.094),
            new Vector(6489.22, 5981.31, 347.969)
        ],
        3: [
            new Vector(-6878.84, -5855.91, 352.094),
            new Vector(-6360.28, -6362.41, 349.219)
        ]
    };
    let actualFountainPoses = [];
    const fountainImage = Renderer.LoadImage(`panorama/images/spellicons/fountain_heal_png.vtex_c`);
    let fountainENABLE = Menu.AddToggle([...path, 'Fountain InvisPos'], 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange(state => {
        roshENABLE = state.newValue;
    })
        .GetValue();
    let fountainShowInRadius = Menu.AddToggle([...path, 'Fountain InvisPos'], 'Display only if hero is near', true)
        .SetNameLocale('ru', 'Отображать только если герой рядом')
        .OnChange(state => fountainShowInRadius = state.newValue)
        .GetValue();
    Menu.GetFolder([...path, 'Fountain InvisPos'])
        .SetTip(`WORKS ONLY IN INVISIBILITY!\n\n
						Adds buttons: ${GetTipStringImage('panorama/images/spellicons/fountain_heal_png.vtex_c')}, located near the fountain,\n
						by clicking on which your hero will stand in a position\n
						where the fountain won't attack you, but you will have vision inside the fountain`, 'en')
        .SetTip(`РАБОТАЕТ ТОЛЬКО В ИНВИЗЕ!\n\n
						Добавляет кнопки: ${GetTipStringImage('panorama/images/spellicons/fountain_heal_png.vtex_c')}, находящиеся возле фонтана,\n
						нажав на которые ваш герой встанет в позицию,\n
						когда вас не будет атаковать фонтан, но у вас будет вижен в фонтане`, 'ru')
        .SetImage('panorama/images/spellicons/fountain_heal_png.vtex_c');
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
            let team = myPlayer.GetTeamNum();
            if (team == 2 || team == 3)
                actualFountainPoses = fountainPoses[team];
            if (team == 2) {
                bestRadius = {
                    top: new Vector(-7003.44, -5432.97, 256),
                    mid: new Vector(-6193.88, -5953.76, 256),
                    bottom: new Vector(-5945.91, -6257.62, 256),
                    safe: new Vector(-6746.22, -6212.06, 384)
                };
            }
            else if (team == 3) {
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
            lastOrder = null;
            actualFountainPoses = [];
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
        lastOrder = null;
        actualFountainPoses = [];
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
    let accessOrders = [Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION, Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_DIRECTION, Enum.UnitOrder.DOTA_UNIT_ORDER_PICKUP_ITEM, Enum.UnitOrder.DOTA_UNIT_ORDER_PICKUP_RUNE];
    let lastOrder;
    CustomUtility.OnPrepareUnitOrders = (event) => {
        if (gameStarted && mrbENABLE) {
            if (exOrders.includes(event.order)) {
                if (mouseBoostInterval) {
                    clearInterval(mouseBoostInterval);
                    mouseBoostInterval = null;
                    lastOrder = null;
                }
            }
            else {
                let index = accessOrders.indexOf(event.order);
                if (index >= 0) {
                    if (event.order != lastOrder) {
                        lastOrder = event.order;
                        if (mouseBoostInterval) {
                            clearInterval(mouseBoostInterval);
                            mouseBoostInterval = null;
                        }
                        if (!mouseBoostInterval) {
                            mouseBoostInterval = setInterval(() => {
                                if (!Input.IsKeyDown(Enum.ButtonCode.MOUSE_RIGHT)) {
                                    clearInterval(mouseBoostInterval);
                                    mouseBoostInterval = null;
                                    lastOrder = null;
                                    return;
                                }
                                if (!CheckOnPanorama(panorama.items) && !CheckOnPanorama(panorama.neutrals) && !Engine.IsShopOpen() &&
                                    !Engine.IsMenuOpen() && !Input.IsCursorOnMinimap() && (index > 1 ? event.target && event.target.IsExist() : true)) {
                                    myPlayer.PrepareUnitOrdersStructed({
                                        orderIssuer: event.orderIssuer,
                                        orderType: event.order,
                                        target: index != 0 ? event.target : undefined,
                                        position: index == 0 ? Input.GetWorldCursorPos() : undefined,
                                        entity: myHero
                                    });
                                }
                            }, 50);
                        }
                    }
                    return;
                }
            }
        }
    };
    function InRadiusByPos(pos, radius = 2300) {
        return Dist2D(myHero, pos) < radius;
    }
    CustomUtility.OnDraw = () => {
        if (gameStarted && !Engine.IsShopOpen()) {
            if (roshENABLE) {
                let size = 32 * ration;
                let sizeImg = 24 * ration;
                for (let pos of roshPoses) {
                    if (roshShowInRadius && !InRadiusByPos(pos))
                        continue;
                    let [x, y, OnScreen] = Renderer.WorldToScreen(pos);
                    if (!OnScreen)
                        continue;
                    Renderer.PushDrawCentered();
                    Renderer.SetDrawColor(0, 0, 0, 122);
                    Renderer.DrawFilledRect(x, y, size, size, 30);
                    Renderer.SetDrawColor(255, 255, 255, 122);
                    Renderer.DrawImage(roshImage, x, y - 1, sizeImg, sizeImg);
                    if (Input.IsCursorInRect(x, y, size, size, Enum.ContentAlign.CenterXY)) {
                        Renderer.SetDrawColor(0, 255, 0, 122);
                        Renderer.DrawOutlineRect(x, y, size, size, 30);
                    }
                    else {
                        Renderer.SetDrawColor(255, 255, 255, 122);
                        Renderer.DrawOutlineRect(x, y, size, size, 30);
                    }
                    Renderer.PopDrawOptions();
                }
            }
            if (fountainENABLE && actualFountainPoses) {
                let size = 24 * ration;
                let sizeImg = 18 * ration;
                for (let pos of actualFountainPoses) {
                    if (fountainShowInRadius && !InRadiusByPos(pos))
                        continue;
                    let [x, y, OnScreen] = Renderer.WorldToScreen(pos);
                    if (!OnScreen)
                        continue;
                    Renderer.PushDrawCentered();
                    Renderer.SetDrawColor(0, 0, 0, 122);
                    Renderer.DrawFilledRect(x, y, size, size, 30);
                    Renderer.SetDrawColor(255, 255, 255, 122);
                    Renderer.DrawImage(fountainImage, x, y - 1, sizeImg, sizeImg);
                    if (Input.IsCursorInRect(x, y, size, size, Enum.ContentAlign.CenterXY)) {
                        Renderer.SetDrawColor(0, 255, 0, 122);
                        Renderer.DrawOutlineRect(x, y, size, size, 30);
                    }
                    else {
                        Renderer.SetDrawColor(255, 255, 255, 122);
                        Renderer.DrawOutlineRect(x, y, size, size, 30);
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
    function GetRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function IsntUndefined(value, withFalse) {
        return withFalse ? (value !== false) : value !== undefined && value !== null;
    }
    function GetAngleToPos(_e1, _e2, prefer = _e2, inrad) {
        let [a, b] = [IsntUndefined(_e1.x) ? _e1 : _e1.GetAbsOrigin(), IsntUndefined(_e2.x) ? _e2 : _e2.GetAbsOrigin()];
        if (prefer == _e1) {
            [a, b] = [b, a];
        }
        let atan2 = Math.atan2(b.y - a.y, b.x - a.x);
        return inrad ? atan2 : (atan2 * (180 / Math.PI));
    }
    function GetBestCourierPos(positions = bestRadius) {
        if (!bestRadius || (courierOutFountainWorkTime != 0 && GameRules.GetGameTime() / 60 >= courierOutFountainWorkTime) || GameRules.GetGameMode() == 15 || GameRules.GetGameMode() == 23)
            return;
        if (!cour || !cour.IsAlive())
            return;
        let states = cour.GetCourierState();
        if (states >= 2) {
            return;
        }
        if (Dist2D(cour, myHero.GetFountainPosition()) >= 1800)
            return;
        let heroPos = myHero.GetAbsOrigin();
        let poses = [positions.top, positions.mid, positions.bottom];
        let bestPos;
        if (cour.GetHeroesInRadius(3000, Enum.TeamType.TEAM_ENEMY).length > 0)
            bestPos = positions.safe;
        else
            bestPos = poses.sort((a, b) => {
                return Dist2D(a, heroPos) - Dist2D(b, heroPos);
            })[0];
        if (Dist2D(cour, bestPos) < 100)
            return;
        return bestPos.add(new Vector(GetRandomInt(20, 80)).Rotated(GetAngleToPos(bestPos, myHero.GetFountainPosition())));
    }
    CustomUtility.OnUpdate = () => {
        if (gameStarted) {
            if (!Engine.IsShopOpen()) {
                if (roshENABLE && (!roshShowInRadius || InRadiusByPos(roshPoses[1]))) {
                    let size = 32 * ration;
                    for (let pos of roshPoses) {
                        let [x, y, OnScreen] = Renderer.WorldToScreen(pos);
                        if (!OnScreen)
                            continue;
                        if (Input.IsCursorInRect(x, y, size, size, Enum.ContentAlign.CenterXY) && Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT)) {
                            myPlayer.PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION, null, pos, null, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_CURRENT_UNIT_ONLY, myHero, false, true);
                        }
                    }
                }
                if (fountainENABLE && (!fountainShowInRadius || InRadiusByPos(fountainPoses[0])) && actualFountainPoses) {
                    let size = 24 * ration;
                    for (let pos of actualFountainPoses) {
                        let [x, y, OnScreen] = Renderer.WorldToScreen(pos);
                        if (!OnScreen)
                            continue;
                        if (Input.IsCursorInRect(x, y, size, size, Enum.ContentAlign.CenterXY) && Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT)) {
                            myPlayer.PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION, null, pos, null, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_CURRENT_UNIT_ONLY, myHero, false, true);
                        }
                    }
                }
            }
            if (Engine.OnceAtByKey(1, 'FindCourier')) {
                if (!cour || !cour.IsExist()) {
                    FindCour();
                }
            }
            if (cour && cour.IsExist() && cour.IsAlive()) {
                if (courierSafePosENABLE && myHero.GetTeamNum() == 3) {
                    if (Engine.OnceAtByKey(1, 'Courier_SafePos')) {
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
                if (courierOutFountainENABLE) {
                    if (Engine.OnceAtByKey(1, 'Courier_BestPos')) {
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
})(customUtil = exports.customUtil || (exports.customUtil = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLGNBQWMseUJBQXlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLCtFQUErRTtBQUNoSCxxQ0FBcUMsK0VBQStFO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlFQUF5RTtBQUMvRjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUVBQXlFO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDZEQUE2RCIsImZpbGUiOiJVdGlsaXR5LmpzIiwic291cmNlUm9vdCI6IiJ9