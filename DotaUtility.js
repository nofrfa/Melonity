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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/DotaUtility.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DotaUtility.ts":
/*!****************************!*\
  !*** ./src/DotaUtility.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

let DotaUtility = {};
var dotaUtility;
(function (dotaUtility) {
    const PATH = ['Custom Scripts', 'Other', 'Dota Utility'];
    let forceChange;
    function SendConsoleCommand(command) {
        if (forceChange || ENABLE)
            Engine.ExecuteCommand(command);
    }
    let ENABLE = Menu.AddToggle(PATH, 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange(state => {
        ENABLE = state.newValue;
        if (ENABLE) {
            SendConsoleCommand('dota_health_hurt_threshold ' + (MomentaryChangeHP.GetValue() ? '1' : '0.010000'));
            SendConsoleCommand('dota_hud_healthbars ' + (3 - 2 * HPBar.GetValue()));
            SendConsoleCommand(`dota_friendly_color ${AllyColor.GetValue()[0]} ${AllyColor.GetValue()[1]} ${AllyColor.GetValue()[2]}`);
            SendConsoleCommand(`dota_enemy_color ${EnemyColor.GetValue()[0]} ${EnemyColor.GetValue()[1]} ${EnemyColor.GetValue()[2]}`);
            SendConsoleCommand('dota_minimap_creep_scale ' + CreepsSize.GetValue());
            SendConsoleCommand('dota_minimap_hero_size ' + HeroSize.GetValue());
            SendConsoleCommand('dota_minimap_rune_size ' + RuneSize.GetValue());
        }
    })
        .GetValue();
    let MomentaryChangeHP = Menu.AddToggle(PATH, 'Momentary change of HP', false)
        .SetNameLocale('ru', 'Моментальное изменение ХП')
        .OnChange(state => {
        SendConsoleCommand('dota_health_hurt_threshold ' + (state.newValue ? '1' : '0.010000'));
    });
    SendConsoleCommand('dota_health_hurt_threshold ' + (MomentaryChangeHP.GetValue() ? '1' : '0.010000'));
    let HPBar = Menu.AddComboBox(PATH, 'HP bar style', ['Default', 'No divisions'], 0)
        .SetNameLocale('ru', 'Стиль ХП')
        .SetComboBoxLocale('ru', ['Стандартный', 'Без делений'])
        .OnChange(state => {
        SendConsoleCommand('dota_hud_healthbars ' + (3 - 2 * state.newValue));
    });
    SendConsoleCommand('dota_hud_healthbars ' + (3 - 2 * HPBar.GetValue()));
    let AllyColor = Menu.AddColorPicker(PATH, 'Ally color', 0, 255, 0, 255)
        .SetNameLocale('ru', 'Цвет союзников')
        .OnChange(state => {
        SendConsoleCommand(`dota_friendly_color ${state.newValue[0]} ${state.newValue[1]} ${state.newValue[2]}`);
    });
    SendConsoleCommand(`dota_friendly_color ${AllyColor.GetValue()[0]} ${AllyColor.GetValue()[1]} ${AllyColor.GetValue()[2]}`);
    let EnemyColor = Menu.AddColorPicker(PATH, 'Enemy color', 255, 0, 0, 255)
        .SetNameLocale('ru', 'Цвет противников')
        .OnChange(state => {
        SendConsoleCommand(`dota_enemy_color ${state.newValue[0]} ${state.newValue[1]} ${state.newValue[2]}`);
    });
    SendConsoleCommand(`dota_enemy_color ${EnemyColor.GetValue()[0]} ${EnemyColor.GetValue()[1]} ${EnemyColor.GetValue()[2]}`);
    let CreepsSize = Menu.AddSlider(PATH, 'Creeps size', 0.8, 2, 1, 0.05)
        .SetNameLocale('ru', 'Размер крипов')
        .OnChange(state => {
        SendConsoleCommand('dota_minimap_creep_scale ' + state.newValue);
    });
    SendConsoleCommand('dota_minimap_creep_scale ' + CreepsSize.GetValue());
    let HeroSize = Menu.AddSlider(PATH, 'Hero size', 300, 2000, 600, 50)
        .SetNameLocale('ru', 'Размер героев')
        .OnChange(state => {
        SendConsoleCommand('dota_minimap_hero_size ' + state.newValue);
    });
    SendConsoleCommand('dota_minimap_hero_size ' + HeroSize.GetValue());
    let RuneSize = Menu.AddSlider(PATH, 'Rune size', 150, 500, 325, 25)
        .SetNameLocale('ru', 'Размер рун')
        .OnChange(state => {
        SendConsoleCommand('dota_minimap_rune_size ' + state.newValue);
    });
    SendConsoleCommand('dota_minimap_rune_size ' + RuneSize.GetValue());
    Menu.AddButton(PATH, 'Reset to default', () => {
        forceChange = true;
        MomentaryChangeHP.SetValue(false, true);
        HPBar.SetValue(0);
        AllyColor.SetValue([0, 255, 0, 255]);
        EnemyColor.SetValue([0, 255, 0, 255]);
        CreepsSize.SetValue(1);
        HeroSize.SetValue(600);
        RuneSize.SetValue(325);
        forceChange = false;
    }).SetNameLocale('ru', 'Сбросить до стандартных');
    Menu.GetFolder(PATH).SetImage('panorama/images/icon_dota_logo_psd.vtex_c');
    RegisterScript(DotaUtility, '[NEMESIS] Dota Utility');
})(dotaUtility || (dotaUtility = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RvdGFVdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCx3QkFBd0IsR0FBRyx3QkFBd0IsR0FBRyx3QkFBd0I7QUFDcEksbURBQW1ELHlCQUF5QixHQUFHLHlCQUF5QixHQUFHLHlCQUF5QjtBQUNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0I7QUFDOUcsS0FBSztBQUNMLDhDQUE4Qyx3QkFBd0IsR0FBRyx3QkFBd0IsR0FBRyx3QkFBd0I7QUFDNUg7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtCQUFrQixHQUFHLGtCQUFrQixHQUFHLGtCQUFrQjtBQUMzRyxLQUFLO0FBQ0wsMkNBQTJDLHlCQUF5QixHQUFHLHlCQUF5QixHQUFHLHlCQUF5QjtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0MiLCJmaWxlIjoiRG90YVV0aWxpdHkuanMiLCJzb3VyY2VSb290IjoiIn0=