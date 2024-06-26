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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Information_ItemESP.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Information_ItemESP.ts":
/*!************************************!*\
  !*** ./src/Information_ItemESP.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let itemESPCustom = {};
var ItemsESPCustom;
(function (ItemsESPCustom) {
    class physItem {
        constructor(item, index, position) {
            this.item = item;
            this.index = index;
            this.pos = position;
            this.image = item.GetImage();
        }
    }
    let itemsList = [];
    const path = ['Custom Scripts', 'Information', 'Item ESP'];
    let myHero;
    let wardPanelX = Config.ReadInt('ItemEsp', 'x', 500);
    let wardPanelY = Config.ReadInt('ItemEsp', 'y', 500);
    let dragging = false;
    let previousCursorPosX = 0;
    let previousCursorPosY = 0;
    let previousTickMouseState = false;
    let scale = Renderer.GetScreenSize()[1] / 1080;
    let panelHidden = false;
    const font = Renderer.LoadFont('Arial', 20 * scale, Enum.FontWeight.LIGHT, Enum.FontFlags.OUTLINE);
    const fontTitle = Renderer.LoadFont('Arial', 16 * scale, Enum.FontWeight.BOLD);
    const fontHidden = Renderer.LoadFont('Arial', 18 * scale, Enum.FontWeight.BOLD);
    const fontHiddenDown = Renderer.LoadFont('Arial', 15 * scale, Enum.FontWeight.BOLD);
    const panelImg = Renderer.LoadImage('panorama/images/hud/reborn/items_icon_psd.vtex_c');
    let ENABLE = Menu.AddToggle(path, 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange(state => {
        ENABLE = state.newValue;
    })
        .GetValue();
    Menu.GetFolder(path)
        .SetImage('panorama/images/battlepass/ti7/campaign/staticon_items_psd.vtex_c') //panorama/images/hud/reborn/items_icon_psd.vtex_c
        .SetTip('Скрипт будет отрисовывать положение предметов\n[!!!] Предметы могут не оказаться на указанном месте, если были подобраны в тумане войны', 'ru')
        .SetTip('The script will draw the position of items\\n[!!!] Items may not be in the specified place if they were picked up in the fog of war', 'en');
    let RenderPanel = Menu.AddToggle(path, 'Render Panel', true)
        .SetNameLocale('ru', 'Отображать панель')
        .OnChange(state => {
        RenderPanel = state.newValue;
        PanelMoveOpt.SetHidden(!state.newValue);
    })
        .SetTip('На данной панели будут отображаться все лежачие предметы\nКликнув на предмет - камера переместиться на его позицию', 'ru')
        .SetTip('All recumbent objects will be displayed on this panel\nBy clicking on the object - the camera will move to its position', 'en')
        .GetValue();
    let PanelMoveOpt = Menu.AddToggle(path, 'Move Panel', false)
        .SetNameLocale('ru', 'Перемещение панель')
        .OnChange(state => {
        PanelMove = state.newValue;
    });
    let PanelMove = PanelMoveOpt.GetValue();
    PanelMoveOpt.SetHidden(!RenderPanel);
    itemESPCustom.OnUpdate = () => {
        if (!myHero || !ENABLE)
            return;
        if (Engine.OnceAtByKey(0.5, 'ItemESP')) {
            let phys = EntitySystem.GetPhysicalItemsList();
            itemsList = [];
            for (let Item of phys) {
                itemsList.push(new physItem(Item.GetItem(), Item.GetIndex(), Item.GetAbsOrigin()));
            }
        }
    };
    itemESPCustom.OnDraw = () => {
        if (!myHero || !ENABLE)
            return;
        //Рендер предметов
        Renderer.PushDrawCentered();
        itemsList.forEach(item => {
            let [x, y, OnScreen] = Renderer.WorldToScreen(item.pos);
            if (OnScreen) {
                Renderer.SetDrawColor(238, 31, 109, 200);
                Renderer.DrawOutlineCircle(x, y, 15, 3, 120);
                Renderer.SetDrawColor(255, 255, 255, 200);
                Renderer.DrawImage(item.image, x, y, 28, 28, 120);
            }
        });
        Renderer.PopDrawOptions();
        // @Deprecated
        //Рендер панели
        if (RenderPanel) {
            let [currentCursorPosX, currentCursorPosY] = Input.GetCursorPos();
            let [screenSizeX, screenSizeY] = Renderer.GetScreenSize();
            const sizeScale = scale;
            let [textW] = Renderer.GetTextSize(font, '7:00');
            let wardCounts = itemsList.length;
            let height = Math.ceil(65 + (panelHidden ? -40 : (Number((wardCounts / 5.1).toString().split('.', 1)) * 38)));
            let panelText = 'Items List';
            let [tSizeX] = Renderer.GetTextSize(fontTitle, panelText);
            const borderOffset = 0;
            let width = Math.max(Math.ceil(textW * sizeScale), tSizeX + borderOffset * 2 + 142 * sizeScale);
            // клемпаем позицию окна без изменения конфига что бы окно не смещалось
            let borderCalcSize = borderOffset + 1;
            let curX = Math.max(0, Math.min(screenSizeX - width, wardPanelX - borderCalcSize));
            let curY = Math.max(0, Math.min(screenSizeY - height, wardPanelY - borderCalcSize + 6 * sizeScale));
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
            Renderer.SetDrawColor(255, 20, 105, 255);
            Renderer.DrawFilledRect(curX, curY - 4, 200, 4, 4, Enum.RoundCorners.Top);
            // //основной фон
            Renderer.SetDrawColor(28, 31, 38, 255);
            Renderer.DrawFilledRect(curX, curY, 200, panelHidden ? 22 : height, 8, Enum.RoundCorners.Bottom);
            if (!panelHidden) {
                //полоска вверху
                Renderer.SetDrawColor(50, 54, 63, 255);
                Renderer.DrawFilledRect(curX, curY + 20, 200, 2);
            }
            //главный текст
            Renderer.SetDrawColor(255, 255, 255, 200);
            Renderer.DrawText(fontTitle, curX + 30, curY + 3, panelText);
            //иконка
            Renderer.SetDrawColor(255, 255, 255, 200);
            Renderer.DrawImage(panelImg, curX + 5, curY + 1, 18, 18);
            //фон кнопки сворачивания
            Renderer.SetDrawColor(255, 255, 255, 25);
            Renderer.DrawFilledRect(curX + 176, curY + 3, 15, 15, 8);
            if (!panelHidden) {
                //кнопка сворачивания
                Renderer.SetDrawColor(255, 20, 105, 200);
                Renderer.DrawText(fontHidden, curX + 179, curY + 5, '^');
                Renderer.PushDrawCentered();
                //иконки предметов + наведение + перенос камеры
                for (let i = 0; i < itemsList.length; i++) {
                    const item = itemsList[i];
                    let ind = Number((i / 5).toString().split('.', 1));
                    if (Input.IsCursorInRect(curX + 22 + (i * 39) - (ind * 195), curY + 42 + (ind * 39), 30, 30, Enum.ContentAlign.CenterXY)) {
                        Renderer.SetDrawColor(70, 195, 103, 255);
                        if (Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT)) {
                            Engine.ExecuteCommand('dota_camera_set_lookatpos ' + item.pos.x.toString() + ' ' + item.pos.y.toString());
                        }
                    }
                    else {
                        Renderer.SetDrawColor(238, 31, 109, 255);
                    }
                    Renderer.DrawOutlineCircle(curX + 22 + (i * 39) - (ind * 195), curY + 42 + (ind * 39), 15, 3, 120);
                    Renderer.SetDrawColor(255, 255, 255, 255);
                    Renderer.DrawImage(item.image, curX + 22 + (i * 39) - (ind * 195), curY + 42 + (ind * 39), 28, 28, 120);
                }
                Renderer.PopDrawOptions();
            }
            else {
                //кнопка сворачивания
                Renderer.SetDrawColor(255, 20, 105, 200);
                Renderer.DrawText(fontHiddenDown, curX + 180, curY + 3, 'v');
            }
            if (Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT) && Input.IsCursorInRect(curX + 176, curY + 3, 15, 15)) {
                panelHidden = !panelHidden;
            }
            //передвижение панели
            if (PanelMove) {
                if (previousTickMouseState == false && Input.IsCursorInRect(curX, curY, 200, height)) {
                    if (Input.IsKeyDown(Enum.ButtonCode.MOUSE_LEFT) && Input.IsKeyDown(Enum.ButtonCode.KEY_LCONTROL)) {
                        dragging = true;
                    }
                }
                if (dragging === true) {
                    if (!Input.IsKeyDown(Enum.ButtonCode.MOUSE_LEFT)) {
                        dragging = false;
                        Config.WriteInt('ItemEsp', 'x', wardPanelX);
                        Config.WriteInt('ItemEsp', 'y', wardPanelY);
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
            [previousCursorPosX, previousCursorPosY] = [currentCursorPosX, currentCursorPosY];
        }
    };
    itemESPCustom.OnScriptLoad = itemESPCustom.OnGameStart = () => {
        myHero = EntitySystem.GetLocalHero();
    };
    itemESPCustom.OnGameEnd = () => {
        itemsList = [];
        myHero = null;
    };
    RegisterScript(itemESPCustom);
})(ItemsESPCustom || (ItemsESPCustom = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luZm9ybWF0aW9uX0l0ZW1FU1AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzQkFBc0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0NBQXdDIiwiZmlsZSI6IkluZm9ybWF0aW9uX0l0ZW1FU1AuanMiLCJzb3VyY2VSb290IjoiIn0=