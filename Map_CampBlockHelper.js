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

/***/ "./src/CampBlockHelper.ts":
/*!********************************!*\
  !*** ./src/CampBlockHelper.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

let CampBlockHelper = {};
var campBlockHelper;
(function (campBlockHelper) {
    const PATH = ['Custom Scripts', 'Map', 'Camp Block Helper'];
    const Image = Renderer.LoadImage('panorama/images/emoticons/sentry_ward_png.vtex_c');
    const wards = {
        2: [
            new Vector(-2740.5, 3322.12, 256),
            new Vector(-3206.1, 4500.16, 128),
            new Vector(-4425.2, 4602.43, 0),
            new Vector(-1084.34, 5340.77, 128),
            new Vector(-1809.86, 8549.28, 128),
            new Vector(-3903.05, 8739.46, 128),
            new Vector(-4094.47, 7709.23, 128),
            new Vector(292.16, 7471.65, 0),
            new Vector(2792.69, 8069.18, 256),
            new Vector(1519.69, 4328.81, 128),
            new Vector(1.95665, 3006.25, 128),
            new Vector(4759.42, -235.203, 256),
            new Vector(3003.78, -1528.9, 256),
            new Vector(8682.05, -735.307, 256)
        ],
        3: [
            new Vector(-2434.02, -4006.03, 256),
            new Vector(-385.831, -1942.04, 256),
            new Vector(771.463, -3901.92, 256),
            new Vector(3250.42, -2955, 128),
            new Vector(4813.76, -3505.17, 128),
            new Vector(3325.34, -5579.14, 128),
            new Vector(4851.15, -6961.74, 0),
            new Vector(3781.09, -8743.02, 128),
            new Vector(1304.49, -8079.63, 128),
            new Vector(-498.742, -7741.85, 0),
            new Vector(-2594.48, -8705.46, 256),
            new Vector(-2093.59, -7977.32, 256),
            new Vector(-8765.33, 432.869, 257.958),
            new Vector(-4916.79, 187.949, 256),
            new Vector(-4139.94, 1290.67, 256),
            new Vector(-3499.83, 604.119, 256)
        ]
    };
    let actualWards;
    let myHero, myPlayer;
    let ENABLE = Menu.AddToggle(PATH, 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .SetTip('1', 'ru')
        .SetTip('1 (en)', 'en')
        .OnChange(state => ENABLE = state.newValue)
        .GetValue();
    let DisplayMode = Menu.AddComboBox(PATH, 'Display', ['Always', 'With ALT', 'If the Inventory contains Wards'], 1)
        .SetNameLocale('cn', '显示方式')
        .SetNameLocale('ru', 'Отображать')
        .SetComboBoxLocale('ru', ['Всегда', 'При зажатой ALT', 'При наличии вардов в инвентаре'])
        .OnChange(state => DisplayMode = state.newValue)
        .GetValue();
    Menu.GetFolder(['Custom Scripts', 'Map']).SetOrdering(8).SetImage('~/menu/40x40/map.png');
    Menu.GetFolder(PATH)
        .SetTip('Скрипт показывает лучшие позиции для блока вражеских кемпов', 'ru')
        .SetTip('Script shows the best positions for blocking enemy camps', 'en')
        .SetImage('panorama/images/hud/icon_camps_stacked_psd.vtex_c');
    CampBlockHelper.OnScriptLoad = CampBlockHelper.OnGameStart = () => {
        myHero = EntitySystem.GetLocalHero();
        if (myHero) {
            myPlayer = EntitySystem.GetLocalPlayer();
            let team = myPlayer.GetTeamNum();
            if (team == 2 || team == 3)
                actualWards = wards[3];
        }
    };
    CampBlockHelper.OnGameEnd = () => {
        myHero = myPlayer = null;
    };
    CampBlockHelper.OnDraw = () => {
        if (!ENABLE || !myHero)
            return;
        let canRender = DisplayMode === 0 ||
            DisplayMode === 1 && Input.IsKeyDown(Enum.ButtonCode.KEY_LALT) ||
            DisplayMode == 2 && (myHero.HasItem('item_ward_observer', true) || myHero.HasItem('item_ward_dispenser', true));
        if (!canRender)
            return;
        let Entities = EntitySystem.GetNPCsList().filter(x => x.GetUnitName() === 'npc_dota_sentry_wards');
        for (const ward of actualWards) {
            let render = true;
            for (const entity of Entities) {
                if (entity.GetAbsOrigin().Distance(ward) < 200) {
                    render = false;
                    break;
                }
            }
            if (!render)
                continue;
            let [x, y, isOnScreen] = Renderer.WorldToScreen(ward);
            if (!isOnScreen)
                continue;
            Renderer.PushDrawCentered();
            let opacity = 120;
            if (Input.IsCursorInRect(x - 15, y - 15, 30, 30)) {
                opacity = 255;
                let sentry = myHero.GetItem('item_ward_sentry', true);
                if (Input.IsKeyDown(Enum.ButtonCode.MOUSE_LEFT) && Engine.OnceAtByKey(0.2, 'CampBlockHelperCD'))
                    myPlayer.PrepareUnitOrdersStructed({
                        orderIssuer: Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY,
                        orderType: Enum.UnitOrder.DOTA_UNIT_ORDER_CAST_POSITION,
                        position: ward,
                        ability: sentry,
                        entity: myHero
                    });
            }
            Renderer.SetDrawColor(255, 255, 255, opacity);
            Renderer.DrawImage(Image, x, y, 30, 30, 0, 0, [0, 0], [0.021, 0.95]);
            Renderer.PopDrawOptions();
        }
    };
    RegisterScript(CampBlockHelper, 'Camp Block Helper');
})(campBlockHelper || (campBlockHelper = {}));


/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./src/CampBlockHelper.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/CampBlockHelper.ts */"./src/CampBlockHelper.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbXBCbG9ja0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDBDQUEwQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6IiJ9