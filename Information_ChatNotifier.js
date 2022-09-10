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

/***/ "./src/Information_ChatNotifier.ts":
/*!*****************************************!*\
  !*** ./src/Information_ChatNotifier.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let chatNotifications = {};
var ChatNotif;
(function (ChatNotif) {
    let NotifierType;
    (function (NotifierType) {
        NotifierType[NotifierType["ROSHAN"] = 0] = "ROSHAN";
        NotifierType[NotifierType["BOUNTY"] = 1] = "BOUNTY";
        NotifierType[NotifierType["AMPLIFICATION"] = 2] = "AMPLIFICATION";
        NotifierType[NotifierType["STACK"] = 3] = "STACK";
        NotifierType[NotifierType["PULL"] = 4] = "PULL";
        NotifierType[NotifierType["SMOKE"] = 5] = "SMOKE";
    })(NotifierType || (NotifierType = {}));
    class NotifierMsg {
        constructor(type) {
            this.msgTime = GameRules.GetGameTime() + 8;
            this.waitForNext = this.msgTime + 4;
            this.sended = false;
            this.type = type;
        }
    }
    let notifications = [];
    const path = ['Custom Scripts', 'Information', 'Chat Notifier'];
    let myHero, myPlayer;
    let worldTime = {
        minute: 0,
        second: 0
    };
    let smoke = -1;
    let cached = [];
    let wardPanelX = Config.ReadInt('ChatNotifier', 'x', 500);
    let wardPanelY = Config.ReadInt('ChatNotifier', 'y', 500);
    let dragging = false;
    let previousCursorPosX = 0;
    let previousCursorPosY = 0;
    let previousTickMouseState = false;
    let previousTickMouseStateRight = false;
    let scale = Renderer.GetScreenSize()[1] / 1080;
    let panelHidden = false;
    let font = Renderer.LoadFont('Arial', 20, Enum.FontWeight.LIGHT, Enum.FontFlags.OUTLINE);
    let fontTitle = Renderer.LoadFont('Arial', 16, Enum.FontWeight.BOLD);
    let fontHidden = Renderer.LoadFont('Arial', 18, Enum.FontWeight.BOLD);
    let fontHiddenDown = Renderer.LoadFont('Arial', 15, Enum.FontWeight.BOLD);
    let imgPanel = Renderer.LoadImage('~/menu/40x40/info.png');
    let ENABLE = Menu.AddToggle(path, 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange(state => {
        ENABLE = state.newValue;
    })
        .GetValue();
    let CHAT_MESSAGE = Menu.AddToggle(path, 'Send messages to the chat', false)
        .SetNameLocale('ru', 'Отправлять сообщения в чат')
        .OnChange(state => {
        CHAT_MESSAGE = state.newValue;
    })
        .GetValue();
    let RenderPanel = Menu.AddToggle(path, 'Render Panel', true)
        .SetNameLocale('ru', 'Отображать панель')
        .OnChange(state => {
        RenderPanel = state.newValue;
        PanelMoveOpt.SetHidden(!state.newValue);
    })
        .GetValue();
    let PanelMoveOpt = Menu.AddToggle(path, 'Move Panel', false)
        .SetNameLocale('ru', 'Перемещение панель')
        .OnChange(state => {
        PanelMove = state.newValue;
    });
    let PanelMove = PanelMoveOpt.GetValue();
    PanelMoveOpt.SetHidden(!RenderPanel);
    Menu.GetFolder(path)
        .SetImage('panorama/images/hud/vs/icon_chat_png.vtex_c');
    function GetTypeInfo(type) {
        switch (type) { //todo: сделать перевод
            case 0: //ROSHAN
                return ['\'#B22222\'', '[ROSHAN] ', Menu.GetLocale() == 'ru' ? 'Враги атакуют рошана' : 'Enemies attack roshan'];
            case 1: //BOUNTY RUNE
                return ['\'#FFD700\'', '[RUNES] ', Menu.GetLocale() == 'ru' ? 'Проверьте баунти руны' : 'Check bounty runes'];
            case 2: //AMPLIFICATION RUNE
                return ['\'#FFD700\'', '[RUNES] ', Menu.GetLocale() == 'ru' ? 'Проверьте руны усиления' : 'Check bounty runes'];
            case 3: //STACK
                return ['\'#32CD32\'', '[STACK] ', Menu.GetLocale() == 'ru' ? 'Можно сделать стак' : 'Soon it will be possible to make a stack'];
            case 4: //PULL
                return ['\'#32CD32\'', '[PULL] ', Menu.GetLocale() == 'ru' ? 'Можно сделать отвод' : 'You can make a pull soon'];
            case 5: //SMOKE
                return ['\'#7B68EE\'', '[SMOKE] ', Menu.GetLocale() == 'ru' ? 'Враги использовали смок' : 'You can make a pull soon'];
        }
    }
    function RegisterNotifier(type) {
        let checker = false;
        for (let i = 0; i < notifications.length; i++) {
            const x = notifications[i];
            if (x.type == type) {
                checker = true;
                break;
            }
        }
        if (!checker) {
            notifications.push(new NotifierMsg(type));
        }
    }
    function GetIntFromNumber(number, convertToString = false) {
        let ret = Number(number.toString().split('.', 1)[0]);
        return convertToString ? ret.toString() : ret;
    }
    function GetGameTimer() {
        return GameRules.GetGameState() == Enum.GameState.PRE_GAME ?
            -1 :
            GetIntFromNumber(Number((GameRules.GetGameTime() - GameRules.GetPreGameStartTime())) - (GameRules.GetMatchID().toString() == '0' ? 0 : (GameRules.GetGameState() & Enum.GameState.GAME_IN_PROGRESS ? 90 : 0)));
    }
    chatNotifications.OnUpdate = () => {
        if (!myHero || !ENABLE)
            return;
        let time = GetGameTimer();
        worldTime.minute = GetIntFromNumber(time / 60);
        worldTime.second = time - worldTime.minute * 60;
        if (worldTime.minute % 3 == 2 && worldTime.second / 50 == 1) {
            RegisterNotifier(NotifierType.BOUNTY);
        }
        if (worldTime.minute >= 4 && worldTime.minute % 2 == 1 && worldTime.second / 50 == 1) {
            RegisterNotifier(NotifierType.AMPLIFICATION);
        }
        if (worldTime.minute >= 1 && worldTime.second / 40 == 1) {
            RegisterNotifier(NotifierType.STACK);
            RegisterNotifier(NotifierType.PULL);
        }
        if (CHAT_MESSAGE) {
            for (let i = 0; i < notifications.length; i++) {
                let notification = notifications[i];
                if (notification.waitForNext - GameRules.GetGameTime() <= 0) {
                    notifications.splice(i, 1);
                    continue;
                }
                if (!notification.sended) {
                    let data = GetTypeInfo(notification.type);
                    Chat.Print('ConsoleChat', `<font color=${data[0]}>${data[1]}</font>` + `<font color='#FFFFE0'>${data[2]}</font>`);
                    notification.sended = true;
                }
            }
        }
    };
    chatNotifications.OnParticleCreate = particle => {
        if (!myHero || !ENABLE)
            return;
        if (particle.name == 'roshan_slam') {
            RegisterNotifier(NotifierType.ROSHAN);
        }
        if (particle.name == 'smoke_of_deceit') {
            smoke = particle.index;
        }
    };
    function IsEnemyTeamUseSmoke(position) {
        let heroesList = EntitySystem.GetHeroesList().filter(hero => !hero.IsIllusion() &&
            !hero.IsWaitingToSpawn() &&
            hero.IsAlive() &&
            hero.IsSameTeam(myHero) &&
            hero.GetAbsOrigin().Distance(position) <= 1025);
        return !heroesList || heroesList.length < 1;
    }
    chatNotifications.OnParticleUpdate = particle => {
        if (!myHero || !ENABLE)
            return;
        if (smoke == particle.index && !particle.controlPoint && IsEnemyTeamUseSmoke(particle.position)) {
            RegisterNotifier(NotifierType.SMOKE);
        }
    };
    chatNotifications.OnUnitAnimation = animation => {
        if (!myHero || !ENABLE)
            return;
        if (animation.sequenceName === 'roshan_attack' || animation.sequenceName === 'roshan_attack2') {
            RegisterNotifier(NotifierType.ROSHAN);
        }
    };
    function GetImageNotification(type) {
        if (!cached[type]) {
            switch (type) {
                case 0: //ROSHAN
                    cached[type] = Renderer.LoadImage('panorama/images/spellicons/roshan_spell_block_png.vtex_c');
                    break;
                case 1: //BOUNTY RUNE
                    cached[type] = Renderer.LoadImage('panorama/images/items/bottle_bounty_png.vtex_c');
                    break;
                case 2: //AMPLIFICATION RUNE
                    cached[type] = Renderer.LoadImage('panorama/images/spellicons/rune_doubledamage_png.vtex_c');
                    break;
                case 3: //STACK
                    cached[type] = Renderer.LoadImage('~/menu/40x40/creeps.png');
                    break;
                case 4: //PULL
                    cached[type] = Renderer.LoadImage('~/menu/40x40/creeps.png');
                    break;
                case 5: //SMOKE
                    cached[type] = Renderer.LoadImage('panorama/images/items/smoke_of_deceit_png.vtex_c');
                    break;
            }
        }
        return cached[type];
    }
    function GetTextNotification(type) {
        switch (type) {
            case 0: //ROSHAN
                return 'ROSHAN IS ATTACKED';
            case 1: //BOUNTY RUNE
                return 'CHECK BOUNTY';
            case 2: //AMPLIFICATION RUNE
                return 'CHECK AMPLIFICATION';
            case 3: //STACK
                return 'MAKE A STACK';
            case 4: //PULL
                return 'MAKE A PULL';
            case 5: //SMOKE
                return 'SMOKE IS USED';
        }
    }
    function GetActiveNotification() {
        let count = 0;
        notifications.forEach(x => {
            if (x.msgTime - GameRules.GetGameTime() > 0) {
                count++;
            }
        });
        return count;
    }
    chatNotifications.OnDraw = () => {
        if (!myHero || !ENABLE)
            return;
        //Рендер панели
        if (RenderPanel) {
            let [currentCursorPosX, currentCursorPosY] = Input.GetCursorPos();
            let [screenSizeX, screenSizeY] = Renderer.GetScreenSize();
            const sizeScale = scale;
            let [textW, textH] = Renderer.GetTextSize(font, '7:00');
            let wardCounts = GetActiveNotification();
            let height = Math.ceil(65 + (panelHidden ? -40 : GetIntFromNumber(wardCounts / 1.1) * 39));
            let panelText = 'Notifications';
            let [tSizeX, tSizeY] = Renderer.GetTextSize(fontTitle, panelText);
            const borderOffset = 0;
            let width = Math.max(Math.ceil(textW * sizeScale), tSizeX + borderOffset * 2 + 142);
            let panelWidth = 230;
            // клемпаем позицию окна без изменения конфига что бы окно не смещалось
            let borderCalcSize = borderOffset;
            let curX = Math.max(0, Math.min(screenSizeX - panelWidth, wardPanelX - borderCalcSize));
            let curY = Math.max(0, Math.min(screenSizeY - height, wardPanelY - borderCalcSize + 3));
            if (curX + width > screenSizeX) {
                curX = screenSizeX - (curX - screenSizeX);
            }
            else if (curX < borderCalcSize) {
                curX = borderCalcSize;
            }
            if (curY + height > screenSizeY) {
                curY = screenSizeY - height;
            }
            else if (curY < borderCalcSize) {
                curY = borderCalcSize;
            }
            //верх полоска
            Renderer.SetDrawColor(127, 205, 255, 255);
            Renderer.DrawFilledRect(curX, curY - 3, panelWidth, 20, 8);
            //основной фон
            Renderer.SetDrawColor(28, 31, 38, 255);
            Renderer.DrawFilledRect(curX, curY, panelWidth, panelHidden ? 22 : height, 8);
            if (!panelHidden) {
                //полоска вверху
                Renderer.SetDrawColor(50, 54, 63, 255);
                Renderer.DrawFilledRect(curX, curY + 20, panelWidth, 2);
            }
            //главный текст
            Renderer.SetDrawColor(255, 255, 255, 200);
            Renderer.DrawText(fontTitle, curX + 25, curY + 3, panelText);
            //иконка
            Renderer.SetDrawColor(255, 255, 255, 200);
            Renderer.DrawImage(imgPanel, curX + 5, curY + 2, 15, 15);
            //фон кнопки сворачивания
            Renderer.SetDrawColor(255, 255, 255, 25);
            Renderer.DrawFilledRect(curX + 206, curY + 3, 15, 15, 8);
            if (!panelHidden) {
                //кнопка сворачивания
                Renderer.SetDrawColor(127, 205, 255, 200);
                Renderer.DrawText(fontHidden, curX + 209, curY + 5, '^');
                let activeNotifications = [];
                notifications.forEach(x => {
                    if (x.msgTime - GameRules.GetGameTime() > 0) {
                        activeNotifications.push(x);
                    }
                });
                for (let i = 0; i < activeNotifications.length; i++) { //рендер оповещений в панели
                    const notify = activeNotifications[i];
                    if (notify.msgTime - GameRules.GetGameTime() > 0) {
                        Renderer.PushDrawCentered();
                        //иконка
                        Renderer.SetDrawColor(200, 200, 200, 255);
                        Renderer.DrawOutlineCircle(curX + 22, curY + 42 + (i * 39), 15, 3, 120);
                        Renderer.SetDrawColor(255, 255, 255, 255);
                        Renderer.DrawImage(GetImageNotification(notify.type), curX + 22, curY + 42 + (i * 39), 28, 28, 120);
                        Renderer.PopDrawOptions();
                        //текст
                        Renderer.SetDrawColor(255, 255, 255, 200);
                        Renderer.DrawText(fontTitle, curX + 44, curY + 35 + (i * 39), GetTextNotification(notify.type));
                        Renderer.DrawText(fontTitle, curX + 210, curY + 35 + (i * 39), GetIntFromNumber(notify.msgTime - GameRules.GetGameTime(), true));
                        Renderer.SetDrawColor(200, 200, 200, 255);
                        //таймер
                        notify.msgTime = GameRules.GetGameTime() + notify.msgTime - GameRules.GetGameTime();
                    }
                }
            }
            else {
                //кнопка разворачивания
                Renderer.SetDrawColor(127, 205, 255, 200);
                Renderer.DrawText(fontHiddenDown, curX + 210, curY + 3, 'v');
            }
            if (Input.IsCursorInRect(curX + 206, curY + 3, 15, 15) && Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT)) {
                panelHidden = !panelHidden;
            }
            //передвижение панели
            if (PanelMove) {
                if (previousTickMouseState == false && Input.IsCursorInRect(curX, curY, panelWidth, height)) {
                    if (Input.IsKeyDown(Enum.ButtonCode.MOUSE_LEFT) && Input.IsKeyDown(Enum.ButtonCode.KEY_LCONTROL)) {
                        dragging = true;
                    }
                }
                if (dragging === true) {
                    if (!Input.IsKeyDown(Enum.ButtonCode.MOUSE_LEFT)) {
                        dragging = false;
                        Config.WriteInt('ChatNotifier', 'x', wardPanelX);
                        Config.WriteInt('ChatNotifier', 'y', wardPanelY);
                    }
                    else {
                        wardPanelX += currentCursorPosX - previousCursorPosX;
                        if (wardPanelX + width > screenSizeX) {
                            wardPanelX = screenSizeX - width;
                        }
                        else if (wardPanelX < 0) {
                            wardPanelX = 0;
                        }
                        wardPanelY += currentCursorPosY - previousCursorPosY;
                        if (wardPanelY + height > screenSizeY) {
                            wardPanelY = screenSizeY - height;
                        }
                        else if (wardPanelY < 0) {
                            wardPanelY = 0;
                        }
                    }
                }
            }
            previousTickMouseState = Input.IsKeyDown(Enum.ButtonCode.MOUSE_LEFT);
            previousTickMouseStateRight = Input.IsKeyDown(Enum.ButtonCode.MOUSE_RIGHT);
            [previousCursorPosX, previousCursorPosY] = [currentCursorPosX, currentCursorPosY];
        }
    };
    chatNotifications.OnScriptLoad = chatNotifications.OnGameStart = () => {
        myHero = EntitySystem.GetLocalHero();
        if (myHero) {
            myPlayer = EntitySystem.GetLocalPlayer();
        }
    };
    chatNotifications.OnGameEnd = () => {
        myHero = null;
        notifications = [];
        smoke = -1;
    };
    RegisterScript(chatNotifications);
})(ChatNotif || (ChatNotif = {}));


/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./src/Information_ChatNotifier.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/Information_ChatNotifier.ts */"./src/Information_ChatNotifier.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luZm9ybWF0aW9uX0NoYXROb3RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSSxpQkFBaUIsR0FBc0IsRUFBRSxDQUFDO0FBRTlDLElBQVUsU0FBUyxDQTZabEI7QUE3WkQsV0FBVSxTQUFTO0lBQ2xCLElBQUssWUFPSjtJQVBELFdBQUssWUFBWTtRQUNoQixtREFBTTtRQUNOLG1EQUFNO1FBQ04saUVBQWE7UUFDYixpREFBSztRQUNMLCtDQUFJO1FBQ0osaURBQUs7SUFDTixDQUFDLEVBUEksWUFBWSxLQUFaLFlBQVksUUFPaEI7SUFFRCxNQUFNLFdBQVc7UUFNaEIsWUFBWSxJQUFrQjtZQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUs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