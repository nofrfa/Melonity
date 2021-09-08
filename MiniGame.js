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

/***/ "./src/MiniGame.ts":
/*!*************************!*\
  !*** ./src/MiniGame.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

let MiniGame = {};
var mg;
(function (mg) {
    class Snake {
        constructor(speed1, bestScore1) {
            this.size = 16;
            this.gameTime = 0;
            this.score = 0;
            this.gameStarted = false;
            this.moveDirect = -1;
            this.cells = [];
            this.cellDestroyed = true;
            this.cellCandy = [];
            this.headPos = [];
            this.speed = speed1;
            this.bestScore = bestScore1;
        }
        ChangeState() {
            if (GetButtonState(button_SnakeGame)) {
                ChangeName(button_SnakeGame, 'Eat The Red Square', 'Скушай красный квадрат');
                this.GameEnd();
                activeGame = 0 /* UNDEFINED */;
            }
            else {
                ChangeName(button_SnakeGame, 'Eat The Red Square (off)', 'Скушай красный квадрат (выкл)');
                activeGame = 1 /* SNAKE */;
            }
        }
        GameEnd() {
            SnakeGame.Save();
            SnakeGame.gameStarted = false;
            SnakeGame.cellDestroyed = true;
            SnakeGame.moveDirect = -1;
            SnakeGame.headPos.splice(0);
            SnakeGame.cellCandy.splice(0);
        }
        Save() {
            if (SnakeGame.score > SnakeGame.bestScore) {
                SnakeGame.bestScore = SnakeGame.score;
            }
            let cfgPars = JSON.parse(CFG.Read('Snake', 'false'));
            if (cfgPars) {
                if (cfgPars[0] != SnakeGame.speed || cfgPars[1] != SnakeGame.bestScore)
                    CFG.Save('Snake', JSON.stringify([SnakeGame.speed, SnakeGame.bestScore]));
            }
        }
        Update() {
            let locale = Menu.GetLocale();
            Renderer.SetDrawColor(36, 122, 177, 200);
            Renderer.DrawFilledRect(xCen, yCen - 183, 285, 70, 0, ContentAlign.CenterXY);
            Renderer.SetDrawColor(82, 67, 101, 200);
            Renderer.DrawOutlineRect(xCen, yCen - 183, 285, 70, 0, ContentAlign.CenterXY);
            Renderer.SetDrawColor(230, 230, 230, 255);
            Renderer.DrawText(font_stat, xCen - 135, yCen - 185, `${locale === 'ru' ? 'Скорость игры' : 'Game Speed'}: ${SnakeGame.speed}`, 0, ContentAlign.LeftCenterY);
            Renderer.DrawText(font_stat, xCen - 135, yCen - 167, `${locale === 'ru' ? 'Счёт' : 'Score'}: ${SnakeGame.score} (${locale === 'ru' ? 'Лучший' : 'Best'}: ${SnakeGame.bestScore})`, 0, ContentAlign.LeftCenterY);
            Renderer.DrawText(font_stat, xCen, yCen - 205, `${locale === 'ru' ? 'Время игры' : 'Time Game'}: ${SnakeGame.gameTime.toFixed(1)} ${locale === 'ru' ? 'сек' : 'sec'}`, 0, ContentAlign.CenterXY);
            Renderer.SetDrawColor(76, 152, 207, 255);
            Renderer.DrawFilledRect(xCen, yCen, 285, 285, 0, ContentAlign.CenterXY);
            Renderer.SetDrawColor(82, 67, 101, 255);
            Renderer.DrawOutlineRect(xCen, yCen, 285, 285, 0, ContentAlign.CenterXY);
            //Button change speed
            Renderer.SetDrawColor(SnakeGame.gameStarted ? 69 : 89, SnakeGame.gameStarted ? 63 : 83, SnakeGame.gameStarted ? 114 : 134, 200);
            Renderer.DrawFilledRect(xCen - 217, yCen - 116, 150, 50, 0, ContentAlign.CenterXY);
            Renderer.SetDrawColor(82, 67, 101, 200);
            Renderer.DrawOutlineRect(xCen - 217, yCen - 116, 152, 52, 0, ContentAlign.CenterXY);
            Renderer.SetDrawColor(226, 225, 249, SnakeGame.gameStarted ? 100 : 255);
            Renderer.DrawText(locale === 'ru' ? font_ru : font, xCen - 217, yCen - 118, locale === 'ru' ? 'Сменить скорость' : 'Change Speed', 0, ContentAlign.CenterXY);
            //Button start
            Renderer.SetDrawColor(89, 83, 134, 200);
            Renderer.DrawFilledRect(xCen - 217, yCen - 64, 150, 50, 0, ContentAlign.CenterXY);
            Renderer.SetDrawColor(82, 67, 101, 200);
            Renderer.DrawOutlineRect(xCen - 217, yCen - 64, 152, 52, 0, ContentAlign.CenterXY);
            Renderer.SetDrawColor(226, 225, 249, 255);
            Renderer.DrawText(font, xCen - 217, yCen - 68, SnakeGame.gameStarted ? locale === 'ru' ? 'Закончить игру' : 'Stop Game' : locale === 'ru' ? 'Начать игру' : 'Start Game', 0, ContentAlign.CenterXY);
            Renderer.SetDrawColor(72, 115, 166, 255);
            for (let x = 0; x < SnakeGame.size; x++) {
                Renderer.DrawFilledRect(xCen - 127 + (x * 17), yCen - 127, 16, 16, 0, ContentAlign.CenterXY);
                for (let y = 0; y < SnakeGame.size; y++) {
                    Renderer.DrawFilledRect(xCen - 127 + (x * 17), yCen - 127 + (y * 17), 16, 16, 0, ContentAlign.CenterXY);
                    if (SnakeGame.cells.length < SnakeGame.size ** 2)
                        SnakeGame.cells.push([xCen - 127 + (x * 17), yCen - 127 + (y * 17), 16]);
                }
            }
            if (Input.IsCursorInRect(xCen - 217, yCen - 116, 150, 50, ContentAlign.CenterXY) && Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT) && !SnakeGame.gameStart) {
                SnakeGame.speed = SnakeGame.speed % 3 == 0 ? 1 : ++SnakeGame.speed;
                SnakeGame.score = 0;
            }
            if (Input.IsCursorInRect(xCen - 217, yCen - 64, 150, 50, ContentAlign.CenterXY) && Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT)) {
                SnakeGame.gameStarted = !SnakeGame.gameStarted;
                if (SnakeGame.gameStarted) {
                    SnakeGame.score = 0;
                    SnakeGame.gameTime = 0;
                }
            }
            if (SnakeGame.gameStarted) {
                if (Engine.OnceAt(0.1, true) && SnakeGame.moveDirect >= 0) {
                    SnakeGame.gameTime += 0.1;
                }
                if (!SnakeGame.headPos[0]) {
                    SnakeGame.headPos = SnakeGame.cells[random(0, SnakeGame.cells.length - 1)];
                }
                if (SnakeGame.cellCandy && SnakeGame.cellCandy[0]) {
                    if (Input.IsCursorInRect(SnakeGame.cellCandy[0], SnakeGame.cellCandy[1], SnakeGame.cellCandy[2] - 6, SnakeGame.cellCandy[2] - 6, ContentAlign.CenterXY) && Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT)) {
                        SnakeGame.cellDestroyed = true;
                        SnakeGame.score += 1;
                    }
                    Renderer.SetDrawColor(255, 0, 0, 255);
                    Renderer.DrawFilledRect(SnakeGame.cellCandy[0], SnakeGame.cellCandy[1], SnakeGame.cellCandy[2] - 6, SnakeGame.cellCandy[2] - 6, 0, ContentAlign.CenterXY);
                }
                if (SnakeGame.headPos[0] == SnakeGame.cellCandy[0] && SnakeGame.headPos[1] == SnakeGame.cellCandy[1]) {
                    SnakeGame.cellDestroyed = true;
                    SnakeGame.score += 1;
                }
                if (SnakeGame.cellDestroyed) {
                    SnakeGame.cellDestroyed = false;
                    SnakeGame.cellCandy = SnakeGame.cells[random(0, SnakeGame.cells.length - 1)];
                }
                if (SnakeGame.headPos[0]) {
                    Renderer.SetDrawColor(0, 255, 0, 255);
                    Renderer.DrawFilledRect(SnakeGame.headPos[0], SnakeGame.headPos[1], 14, 14, 0, ContentAlign.CenterXY);
                }
                if (Input.IsKeyDownOnce(Enum.ButtonCode.KEY_UP) || Input.IsKeyDownOnce(Enum.ButtonCode.KEY_W)) {
                    SnakeGame.moveDirect = 0;
                }
                else if (Input.IsKeyDownOnce(Enum.ButtonCode.KEY_DOWN) || Input.IsKeyDownOnce(Enum.ButtonCode.KEY_S)) {
                    SnakeGame.moveDirect = 1;
                }
                else if (Input.IsKeyDownOnce(Enum.ButtonCode.KEY_RIGHT) || Input.IsKeyDownOnce(Enum.ButtonCode.KEY_D)) {
                    SnakeGame.moveDirect = 2;
                }
                else if (Input.IsKeyDownOnce(Enum.ButtonCode.KEY_LEFT) || Input.IsKeyDownOnce(Enum.ButtonCode.KEY_A)) {
                    SnakeGame.moveDirect = 3;
                }
                if (Engine.OnceAt(0.80 - (SnakeGame.speed * 0.25) - (SnakeGame.gameTime / 20000), true)) {
                    if (SnakeGame.moveDirect == 0)
                        SnakeGame.headPos[1] -= 17;
                    else if (SnakeGame.moveDirect == 1)
                        SnakeGame.headPos[1] += 17;
                    else if (SnakeGame.moveDirect == 2)
                        SnakeGame.headPos[0] += 17;
                    else if (SnakeGame.moveDirect == 3)
                        SnakeGame.headPos[0] -= 17;
                }
                if (SnakeGame.headPos[0] > SnakeGame.cells[240][0] || SnakeGame.headPos[1] < SnakeGame.cells[240][1] || SnakeGame.headPos[0] < SnakeGame.cells[15][0] || SnakeGame.headPos[1] > SnakeGame.cells[15][1])
                    SnakeGame.GameEnd();
            }
            else {
                SnakeGame.GameEnd();
            }
        }
    }
    let CFG = {
        Save: (key, value) => {
            Config.Write('CustomMiniGames', key, value);
        },
        Read: (key, defaultValue) => {
            return Config.Read('CustomMiniGames', key, defaultValue);
        }
    };
    let ContentAlign = Enum.ContentAlign;
    const path = ['Custom Scripts', 'Other', 'MiniGames'];
    let font = Renderer.LoadFont('monospace', 23, Enum.FontWeight.LIGHT, Enum.FontFlags.ANTIALIAS);
    let font_stat = Renderer.LoadFont('monospace', 21, Enum.FontWeight.LIGHT, Enum.FontFlags.ANTIALIAS);
    let font_ru = Renderer.LoadFont('monospace', 18, Enum.FontWeight.LIGHT, Enum.FontFlags.ANTIALIAS);
    let activeGame = 0 /* UNDEFINED */;
    let [SnakeGame] = [undefined];
    let [xCen, yCen] = [0, 0];
    let [cfg_SnakeSpeed, cfg_SnakeBestScore] = [1, 0];
    let cfgPars = JSON.parse(CFG.Read('Snake', 'false'));
    if (cfgPars) {
        cfg_SnakeSpeed = cfgPars[0];
        cfg_SnakeBestScore = cfgPars[1];
    }
    SnakeGame = new Snake(cfg_SnakeSpeed, cfg_SnakeBestScore);
    if (!cfgPars) {
        CFG.Save('Snake', JSON.stringify([1, 0]));
    }
    let button_SnakeGame = Menu.AddButton(path, 'Eat The Red Square', () => {
        SnakeGame.ChangeState();
    }).SetNameLocale('ru', 'Скушай красный квадрат');
    let close = Menu.AddKeyBind(path, 'Close all Game', Enum.ButtonCode.KEY_NONE)
        .SetNameLocale('ru', 'Закрыть все игры');
    let button_clear = Menu.AddButton(path, 'Clear stat', () => {
        SnakeGame.bestScore = 0;
        CFG.Save('Snake', JSON.stringify([SnakeGame.speed, SnakeGame.bestScore]));
    })
        .SetTip('Clear all stat (this debug tool)');
    MiniGame.OnUpdate = () => {
        if (close.IsKeyDownOnce(false)) {
            if (activeGame == 1 /* SNAKE */)
                SnakeGame.ChangeState();
            activeGame = 0 /* UNDEFINED */;
        }
        if (activeGame != 0 /* UNDEFINED */) {
            if (Renderer.GetScreenSize()[0] != xCen || Renderer.GetScreenSize()[1] != yCen) {
                xCen = Renderer.GetScreenSize()[0] / 2;
                yCen = Renderer.GetScreenSize()[1] / 2;
            }
            if (activeGame == 1 /* SNAKE */) {
                SnakeGame.Update();
            }
        }
    };
    MiniGame.OnScriptUnload = () => {
        SnakeGame.Save();
    };
    function GetButtonState(button) {
        return button.GetNameTranslated().endsWith(')');
    }
    function ChangeName(handle, en, ru) {
        handle.SetNameLocale('en', en);
        handle.SetNameLocale('ru', ru);
    }
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    RegisterScript(MiniGame);
})(mg || (mg = {}));


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/MiniGame.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\MiniGame.ts */"./src/MiniGame.ts");


/***/ })

/******/ });