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

/***/ "./src/ArcWarden_TempestTimer.ts":
/*!***************************************!*\
  !*** ./src/ArcWarden_TempestTimer.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let arcWarden_tempestDouble = {};
var tempestDoubleTimer;
(function (tempestDoubleTimer) {
    tempestDoubleTimer.needHero = 'npc_dota_hero_arc_warden';
    tempestDoubleTimer.gameStart = false;
    tempestDoubleTimer.menuWork = false;
    tempestDoubleTimer.cloneCreate = false;
    tempestDoubleTimer.menuCanPanelMove = false;
    tempestDoubleTimer.canMove = false;
    tempestDoubleTimer.durationSkill = -1;
    tempestDoubleTimer.posX = Config.ReadFloat("TempestTimer", "posX", Renderer.GetScreenSize()[0] / 2 + 200);
    tempestDoubleTimer.posY = Config.ReadFloat("TempestTimer", "posY", Renderer.GetScreenSize()[1] / 2);
    tempestDoubleTimer.location = ['Near Tempest Double', 'Custom Pos', 'Both'];
    if (Menu.GetLocale() == 'ru')
        tempestDoubleTimer.location = ['Рядом с TempestDouble', 'Своя позиция', 'Оба варианта'];
    tempestDoubleTimer.font = Renderer.LoadFont('Arial', Config.ReadInt('TempestTimer', 'textSize', 16), Enum.FontWeight.LIGHT, Enum.FontFlags.OUTLINE);
    let menuWork_Lable = Menu.AddToggle(['Custom Scripts', 'Heroes', 'Agility', 'Arc Warden', 'Tempest Double', 'Timer'], 'Enabled', false).SetNameLocale("ru", "Включить");
    menuWork_Lable.SetTip('Показывает таймер до исчезновения Tempest Double', 'ru');
    menuWork_Lable.SetTip('SOON', 'en');
    menuWork_Lable.OnChange(state => { tempestDoubleTimer.menuWork = state.newValue; });
    tempestDoubleTimer.menuWork = menuWork_Lable.GetValue();
    tempestDoubleTimer.menuCombo = Menu.AddComboBox(['Custom Scripts', 'Heroes', 'Agility', 'Arc Warden', 'Tempest Double', 'Timer'], 'Where to display', tempestDoubleTimer.location, 0).SetNameLocale("ru", 'Где отображать').OnChange(state => tempestDoubleTimer.menuCombo = state.newValue).GetValue();
    let menuCanPanelMoveLabel = Menu.AddToggle(['Custom Scripts', 'Heroes', 'Agility', 'Arc Warden', 'Tempest Double', 'Timer'], 'MovePanel', false).SetNameLocale("ru", "Перемещение панели").SetNameLocale("en", "Moving the panel");
    menuCanPanelMoveLabel.SetTip("Перемещение таймера при зажатии Ctrl+ЛКМ (Своя позиция)", "ru");
    menuCanPanelMoveLabel.SetTip("Moving the timer when holding Ctrl+LMB (only Custom Pos)", "en");
    menuCanPanelMoveLabel.OnChange(state => { tempestDoubleTimer.menuCanPanelMove = state.newValue; });
    tempestDoubleTimer.menuCanPanelMove = menuCanPanelMoveLabel.GetValue();
    let menuTextSize_Label = Menu.AddSlider(['Custom Scripts', 'Heroes', 'Agility', 'Arc Warden', 'Tempest Double', 'Timer'], `Text Size`, 1, 32, 16, 1);
    menuTextSize_Label.OnChange(state => {
        tempestDoubleTimer.font = Renderer.LoadFont('Arial', state.newValue, Enum.FontWeight.LIGHT, Enum.FontFlags.OUTLINE);
        Config.WriteInt('TempestTimer', 'textSize', state.newValue);
    });
    Menu.SetImage(['Custom Scripts', 'Heroes'], "~/menu/40x40/heroes.png");
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Agility'], "~/menu/40x40/agillity.png");
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Agility', 'Arc Warden'], "panorama/images/heroes/icons/npc_dota_hero_arc_warden_png.vtex_c");
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Agility', 'Arc Warden', 'Tempest Double'], 'panorama/images/spellicons/arc_warden_tempest_double_png.vtex_c');
    let Load;
    (function (Load) {
        function Init() {
            if (GameRules.IsActiveGame()) {
                tempestDoubleTimer.gameStart = true;
                tempestDoubleTimer.myHero = EntitySystem.GetLocalHero();
                tempestDoubleTimer.myPlayer = EntitySystem.GetLocalPlayer();
            }
            if (!tempestDoubleTimer.myHero || !tempestDoubleTimer.myHero.IsExist() || tempestDoubleTimer.myHero.GetUnitName() !== tempestDoubleTimer.needHero) {
                tempestDoubleTimer.gameStart = false;
                return;
            }
        }
        Load.Init = Init;
    })(Load = tempestDoubleTimer.Load || (tempestDoubleTimer.Load = {}));
})(tempestDoubleTimer || (tempestDoubleTimer = {}));
arcWarden_tempestDouble.OnUpdate = () => {
    if (tempestDoubleTimer.gameStart && tempestDoubleTimer.menuWork) {
        if (tempestDoubleTimer.menuCanPanelMove) {
            if (Input.IsKeyDown(Enum.ButtonCode.KEY_LCONTROL) && Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT)) {
                if (Input.IsCursorInRect(tempestDoubleTimer.posX, tempestDoubleTimer.posY, 80, Config.Read('TempestTimer', 'textSize', 16), Enum.ContentAlign.CenterXTop)) {
                    tempestDoubleTimer.canMove = true;
                }
            }
            else if (!Input.IsKeyDown(Enum.ButtonCode.KEY_LCONTROL) || !Input.IsKeyDown(Enum.ButtonCode.MOUSE_LEFT))
                tempestDoubleTimer.canMove = false;
            if (tempestDoubleTimer.canMove) {
                tempestDoubleTimer.posX = Input.GetCursorPos()[0];
                tempestDoubleTimer.posY = Input.GetCursorPos()[1];
                Config.WriteFloat("TempestTimer", "posX", tempestDoubleTimer.posX);
                Config.WriteFloat("TempestTimer", "posY", tempestDoubleTimer.posY);
            }
        }
    }
};
arcWarden_tempestDouble.OnDraw = () => {
    if (tempestDoubleTimer.gameStart && tempestDoubleTimer.menuWork) {
        if (tempestDoubleTimer.cloneCreate) {
            Renderer.SetDrawColor(255, 255, 255, 255);
            if (tempestDoubleTimer.menuCombo == 0) {
                let [x, y, isOnScreen] = Renderer.WorldToScreen(tempestDoubleTimer.clone.GetAbsOrigin().add(new Vector(0, 0, tempestDoubleTimer.clone.GetHealthBarOffset())));
                if (!isOnScreen || !tempestDoubleTimer.clone.IsExist())
                    return;
                Renderer.DrawText(tempestDoubleTimer.font, x, y - 30, `${tempestDoubleTimer.durationSkill.toFixed(1)}сек`, 0, Enum.ContentAlign.CenterXTop);
            }
            if (tempestDoubleTimer.menuCombo == 1) {
                Renderer.DrawText(tempestDoubleTimer.font, tempestDoubleTimer.posX, tempestDoubleTimer.posY, `${tempestDoubleTimer.durationSkill.toFixed(1)}сек`, 0, Enum.ContentAlign.CenterXTop);
            }
            if (tempestDoubleTimer.menuCombo == 2) {
                let [x, y, isOnScreen] = Renderer.WorldToScreen(tempestDoubleTimer.clone.GetAbsOrigin().add(new Vector(0, 0, tempestDoubleTimer.clone.GetHealthBarOffset())));
                if (!isOnScreen || !tempestDoubleTimer.clone.IsExist())
                    return;
                Renderer.DrawText(tempestDoubleTimer.font, x, y - 30, `${tempestDoubleTimer.durationSkill.toFixed(1)}сек`, 0, Enum.ContentAlign.CenterXTop);
                Renderer.DrawText(tempestDoubleTimer.font, tempestDoubleTimer.posX, tempestDoubleTimer.posY, `${tempestDoubleTimer.durationSkill.toFixed(1)}сек`, 0, Enum.ContentAlign.CenterXTop);
            }
        }
    }
};
arcWarden_tempestDouble.OnModifierCreate = (entity, modifier) => {
    if (tempestDoubleTimer.gameStart && tempestDoubleTimer.menuWork) {
        if (modifier.GetName() === 'modifier_kill') {
            //@ts-ignore
            if (entity.GetUnitName() === 'npc_dota_hero_arc_warden') {
                let duration = tempestDoubleTimer.myHero.GetAbilityByIndex(5).GetLevelSpecialValueForFloat("duration");
                let timeScale = Number(ConVar.GetValue("host_timescale"));
                if (tempestDoubleTimer.myHero.GetTalentsMask() & Enum.Talents.TALENT_7)
                    duration += 12;
                tempestDoubleTimer.durationSkill = duration;
                tempestDoubleTimer.clone = entity;
                tempestDoubleTimer.cloneCreate = true;
                tempestDoubleTimer.timer = setInterval(() => {
                    tempestDoubleTimer.durationSkill -= 0.1;
                }, 100 / timeScale);
            }
        }
    }
};
arcWarden_tempestDouble.OnModifierDestroy = (entity, modifier) => {
    if (tempestDoubleTimer.gameStart && tempestDoubleTimer.menuWork) {
        if (modifier.GetName() === 'modifier_kill') {
            //@ts-ignore
            if (entity.GetUnitName() === 'npc_dota_hero_arc_warden') {
                tempestDoubleTimer.cloneCreate = false;
                clearInterval(tempestDoubleTimer.timer);
                tempestDoubleTimer.durationSkill = -1;
            }
        }
    }
};
arcWarden_tempestDouble.OnGameEnd = () => {
    tempestDoubleTimer.gameStart = false;
    tempestDoubleTimer.clone = null;
    tempestDoubleTimer.durationSkill = -1;
    clearInterval(tempestDoubleTimer.timer);
};
arcWarden_tempestDouble.OnScriptLoad = arcWarden_tempestDouble.OnGameStart = tempestDoubleTimer.Load.Init;
RegisterScript(arcWarden_tempestDouble);


/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/ArcWarden_TempestTimer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\ArcWarden_TempestTimer.ts */"./src/ArcWarden_TempestTimer.ts");


/***/ })

/******/ });