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

/***/ "./src/AntiMage-ManaVoidInfo.ts":
/*!**************************************!*\
  !*** ./src/AntiMage-ManaVoidInfo.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let AntiMageUltInfo = {};
Menu.AddLabel(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info'], 'Outdated')
    .SetNameLocale("ru", "Устаревшее")
    .SetTip('Данный скрипт является устаревшим\nРаботоспособность не гарантируется', 'ru')
    .SetTip('This script is outdated\nPerformance is not guaranteed', 'en');
RegisterScript(AntiMageUltInfo);
var antiMageManaVoid;
(function (antiMageManaVoid) {
    const needHero = 'npc_dota_hero_antimage';
    antiMageManaVoid.menu_ColorPickerSkull_State = [255, 0, 0, 255];
    antiMageManaVoid.menu_ColorPickerDamage_State = [255, 255, 255, 255];
    antiMageManaVoid.menu_PosSkull_X_State = 0;
    antiMageManaVoid.menu_PosSkull_Y_State = 0;
    antiMageManaVoid.menu_PosRhomb_X_State = 0;
    antiMageManaVoid.menu_PosRhomb_Y_State = 0;
    antiMageManaVoid.menu_PosText_X_State = 0;
    antiMageManaVoid.menu_PosText_Y_State = 0;
    antiMageManaVoid.gameStart = false;
    antiMageManaVoid.menu_Enable_State = false;
    antiMageManaVoid.menu_CountDamage_State = false;
    antiMageManaVoid.menu_CountDamageEach_State = false;
    antiMageManaVoid.menu_TextManaVoidIcon_State = true;
    antiMageManaVoid.arrayHeroes = [[null, false, false, 0], [null, false, false, 0], [null, false, false, 0], [null, false, false, 0], [null, false, false, 0]];
    antiMageManaVoid.font = Renderer.LoadFont('Arial', 16, Enum.FontWeight.LIGHT, Enum.FontFlags.OUTLINE);
    antiMageManaVoid.iconDamage = Renderer.LoadImage('panorama/images/hud/skull_stroke_png.vtex_c');
    antiMageManaVoid.iconManaPul = Renderer.LoadImage('panorama/images/hud/reborn/ult_no_mana_psd.vtex_c');
    antiMageManaVoid.iconManaVoid = Renderer.LoadImage('panorama/images/spellicons/antimage_mana_void_png.vtex_c');
    let menu_Enable_Label = Menu.AddToggle(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info'], 'Enable', false).SetNameLocale("ru", "Включить");
    menu_Enable_Label.OnChange(state => {
        antiMageManaVoid.menu_Enable_State = state.newValue;
    });
    antiMageManaVoid.menu_Enable_State = menu_Enable_Label.GetValue();
    let menu_CountDamage_Label = Menu.AddToggle(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info'], 'Display amount damage', false).SetNameLocale("ru", "Отображать количество урона");
    menu_CountDamage_Label.SetTip('Displays the amount of magic damage that will be dealt from the ultimate', 'en');
    menu_CountDamage_Label.SetTip('Отображает количество магического урона, который будет нанесен от ультимейта', 'ru');
    menu_CountDamage_Label.OnChange(state => {
        antiMageManaVoid.menu_CountDamage_State = state.newValue;
    });
    antiMageManaVoid.menu_CountDamage_State = menu_CountDamage_Label.GetValue();
    let menu_CountDamageEach_Label = Menu.AddToggle(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info'], 'Display for each enemy', false).SetNameLocale("ru", "Отображать для каждого врага");
    menu_CountDamageEach_Label.SetTip('It will display how much damage everyone will receive from applying the ultimate to the best damage target', 'en');
    menu_CountDamageEach_Label.SetTip('Будет отображать сколько урона получит каждый от применения ультимейта на лучшую цель по урону', 'ru');
    menu_CountDamageEach_Label.OnChange(state => {
        antiMageManaVoid.menu_CountDamageEach_State = state.newValue;
    });
    antiMageManaVoid.menu_CountDamageEach_State = menu_CountDamageEach_Label.GetValue();
    let menu_ColorPickerSkull_Label = Menu.AddColorPickerBlock(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Skull', 'Color'], 255, 0, 0, 255);
    menu_ColorPickerSkull_Label.OnChange(state => {
        antiMageManaVoid.menu_ColorPickerSkull_State = state.newValue;
    });
    antiMageManaVoid.menu_ColorPickerSkull_State = menu_ColorPickerSkull_Label.GetValue();
    let menu_PosSkull_X_Label = Menu.AddSlider(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Skull', 'Position'], `X offset`, -300, 300, 0, 1).SetNameLocale("ru", 'Смещение по X');
    menu_PosSkull_X_Label.OnChange(state => {
        antiMageManaVoid.menu_PosSkull_X_State = state.newValue;
    });
    antiMageManaVoid.menu_PosSkull_X_State = menu_PosSkull_X_Label.GetValue();
    let menu_PosSkull_Y_Label = Menu.AddSlider(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Skull', 'Position'], `Y offset`, -300, 300, 0, 1).SetNameLocale("ru", 'Смещение по Y');
    menu_PosSkull_Y_Label.OnChange(state => {
        antiMageManaVoid.menu_PosSkull_Y_State = state.newValue;
    });
    antiMageManaVoid.menu_PosSkull_Y_State = menu_PosSkull_Y_Label.GetValue();
    let menu_PosRhomb_X_Label = Menu.AddSlider(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Rhomb', 'Position'], `X offset`, -300, 300, 0, 1).SetNameLocale("ru", 'Смещение по X');
    menu_PosRhomb_X_Label.OnChange(state => {
        antiMageManaVoid.menu_PosRhomb_X_State = state.newValue;
    });
    antiMageManaVoid.menu_PosRhomb_X_State = menu_PosRhomb_X_Label.GetValue();
    let menu_PosRhomb_Y_Label = Menu.AddSlider(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Rhomb', 'Position'], `Y offset`, -300, 300, 0, 1).SetNameLocale("ru", 'Смещение по Y');
    menu_PosRhomb_Y_Label.OnChange(state => {
        antiMageManaVoid.menu_PosRhomb_Y_State = state.newValue;
    });
    antiMageManaVoid.menu_PosRhomb_Y_State = menu_PosRhomb_Y_Label.GetValue();
    let menu_ColorPickerDamage_Label = Menu.AddColorPickerBlock(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Text', 'Color'], 255, 255, 255, 255);
    menu_ColorPickerDamage_Label.OnChange(state => {
        antiMageManaVoid.menu_ColorPickerDamage_State = state.newValue;
    });
    antiMageManaVoid.menu_ColorPickerDamage_State = menu_ColorPickerDamage_Label.GetValue();
    let menu_PosText_X_Label = Menu.AddSlider(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Text', 'Position'], `X offset`, -300, 300, 0, 1).SetNameLocale("ru", 'Смещение по X');
    menu_PosText_X_Label.OnChange(state => {
        antiMageManaVoid.menu_PosText_X_State = state.newValue;
    });
    antiMageManaVoid.menu_PosText_X_State = menu_PosText_X_Label.GetValue();
    let menu_PosText_Y_Label = Menu.AddSlider(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Text', 'Position'], `Y offset`, -300, 300, 0, 1).SetNameLocale("ru", 'Смещение по Y');
    menu_PosText_Y_Label.OnChange(state => {
        antiMageManaVoid.menu_PosText_Y_State = state.newValue;
    });
    antiMageManaVoid.menu_PosText_Y_State = menu_PosText_Y_Label.GetValue();
    let menu_TextManaVoidIcon_Label = Menu.AddToggle(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Text'], 'Display ManaVoid Icon', true).SetNameLocale("ru", "Отображать иконку ManaVoid");
    menu_TextManaVoidIcon_Label.OnChange(state => {
        antiMageManaVoid.menu_TextManaVoidIcon_State = state.newValue;
    });
    antiMageManaVoid.menu_TextManaVoidIcon_State = menu_TextManaVoidIcon_Label.GetValue();
    Menu.GetFolder(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info']).SetTip(`Скрипт будет отображать:\nУ кого самый большой максимум маны - синий ромб\nОт кого будет самый большой урон ультой - череп (цвет можно настроить. По умолчанию: красный)`, 'ru');
    Menu.GetFolder(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info']).SetTip('The script will display who has the biggest mana-pul and from whom will be the biggest damage to the ultimate', 'en');
    Menu.GetFolder(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings']).SetNameLocale('ru', 'Настройки');
    Menu.GetFolder(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Skull']).SetNameLocale('ru', 'Череп');
    Menu.GetFolder(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Skull', 'Color']).SetNameLocale('ru', 'Цвет');
    Menu.GetFolder(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Skull', 'Position']).SetNameLocale('ru', 'Позиция');
    Menu.GetFolder(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Rhomb']).SetNameLocale('ru', 'Ромб');
    Menu.GetFolder(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Rhomb', 'Position']).SetNameLocale('ru', 'Позиция');
    Menu.GetFolder(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Text']).SetNameLocale('ru', 'Текст');
    Menu.GetFolder(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Text', 'Color']).SetNameLocale('ru', 'Цвет');
    Menu.GetFolder(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info', 'Settings', 'Text', 'Position']).SetNameLocale('ru', 'Позиция');
    Menu.SetImage(['Custom Scripts', 'Heroes'], "~/menu/40x40/heroes.png");
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Agility'], '~/menu/40x40/agillity.png');
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage'], 'panorama/images/heroes/icons/npc_dota_hero_antimage_png.vtex_c');
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Agility', 'Anti-Mage', 'ManaVoid Info'], 'panorama/images/spellicons/antimage_mana_void_png.vtex_c');
    let Load;
    (function (Load) {
        function Init() {
            if (GameRules.IsActiveGame()) {
                antiMageManaVoid.gameStart = true;
                antiMageManaVoid.myHero = EntitySystem.GetLocalHero();
                antiMageManaVoid.myPlayer = EntitySystem.GetLocalPlayer();
                antiMageManaVoid.arrayHeroes = [[null, false, false, 0], [null, false, false, 0], [null, false, false, 0], [null, false, false, 0], [null, false, false, 0]];
            }
            if (!antiMageManaVoid.myHero || !antiMageManaVoid.myHero.IsExist() || antiMageManaVoid.myHero.GetUnitName() !== needHero) {
                antiMageManaVoid.gameStart = false;
                return;
            }
        }
        Load.Init = Init;
    })(Load = antiMageManaVoid.Load || (antiMageManaVoid.Load = {}));
})(antiMageManaVoid || (antiMageManaVoid = {}));
AntiMageUltInfo.OnDraw = () => {
    if (antiMageManaVoid.gameStart && antiMageManaVoid.menu_Enable_State) {
        let count = 0;
        for (let array of antiMageManaVoid.arrayHeroes) {
            if (array)
                count++;
        }
        if (count) {
            for (let arrayObj of antiMageManaVoid.arrayHeroes) {
                if (!arrayObj[0])
                    continue;
                if (!arrayObj[0].IsDormant()) {
                    let [x, y, isOnScreen] = Renderer.WorldToScreen(arrayObj[0].GetAbsOrigin().add(new Vector(0, 0, arrayObj[0].GetHealthBarOffset())));
                    if (antiMageManaVoid.menu_CountDamage_State && antiMageManaVoid.menu_CountDamageEach_State) {
                        if (!arrayObj[2] && isOnScreen) {
                            if (arrayObj[3] > 0) {
                                if (antiMageManaVoid.menu_TextManaVoidIcon_State) {
                                    Renderer.SetDrawColor(255, 255, 255, 255);
                                    Renderer.DrawImage(antiMageManaVoid.iconManaVoid, x - 90 + antiMageManaVoid.menu_PosText_X_State, y + antiMageManaVoid.menu_PosText_Y_State, 24, 24);
                                }
                                Renderer.SetDrawColor(antiMageManaVoid.menu_ColorPickerDamage_State[0], antiMageManaVoid.menu_ColorPickerDamage_State[1], antiMageManaVoid.menu_ColorPickerDamage_State[2], antiMageManaVoid.menu_ColorPickerDamage_State[3]);
                                Renderer.DrawText(antiMageManaVoid.font, x - 90 + antiMageManaVoid.menu_PosText_X_State, y + antiMageManaVoid.menu_PosText_Y_State, arrayObj[3].toString());
                            }
                        }
                    }
                    if (arrayObj[1]) {
                        if (isOnScreen) {
                            Renderer.SetDrawColor(255, 255, 255, 255);
                            Renderer.DrawImage(antiMageManaVoid.iconManaPul, x - 90 + antiMageManaVoid.menu_PosRhomb_X_State, y - 35 + antiMageManaVoid.menu_PosRhomb_Y_State, 24, 24);
                        }
                        if (arrayObj[2]) {
                            if (isOnScreen) {
                                Renderer.SetDrawColor(antiMageManaVoid.menu_ColorPickerSkull_State[0], antiMageManaVoid.menu_ColorPickerSkull_State[1], antiMageManaVoid.menu_ColorPickerSkull_State[2], antiMageManaVoid.menu_ColorPickerSkull_State[3]);
                                Renderer.DrawImage(antiMageManaVoid.iconDamage, x - 90 + antiMageManaVoid.menu_PosSkull_X_State, y - 15 + antiMageManaVoid.menu_PosSkull_Y_State, 24, 24);
                                if (antiMageManaVoid.menu_CountDamage_State) {
                                    Renderer.SetDrawColor(antiMageManaVoid.menu_ColorPickerDamage_State[0], antiMageManaVoid.menu_ColorPickerDamage_State[1], antiMageManaVoid.menu_ColorPickerDamage_State[2], antiMageManaVoid.menu_ColorPickerDamage_State[3]);
                                    Renderer.DrawText(antiMageManaVoid.font, x - 90 + antiMageManaVoid.menu_PosSkull_X_State, y + antiMageManaVoid.menu_PosSkull_Y_State, arrayObj[3].toString());
                                }
                            }
                            continue;
                        }
                    }
                    if (arrayObj[2]) {
                        if (isOnScreen) {
                            Renderer.SetDrawColor(antiMageManaVoid.menu_ColorPickerSkull_State[0], antiMageManaVoid.menu_ColorPickerSkull_State[1], antiMageManaVoid.menu_ColorPickerSkull_State[2], antiMageManaVoid.menu_ColorPickerSkull_State[3]);
                            Renderer.DrawImage(antiMageManaVoid.iconDamage, x - 90 + antiMageManaVoid.menu_PosSkull_X_State, y - 15 + antiMageManaVoid.menu_PosSkull_Y_State, 24, 24);
                            if (antiMageManaVoid.menu_CountDamage_State) {
                                Renderer.SetDrawColor(antiMageManaVoid.menu_ColorPickerDamage_State[0], antiMageManaVoid.menu_ColorPickerDamage_State[1], antiMageManaVoid.menu_ColorPickerDamage_State[2], antiMageManaVoid.menu_ColorPickerDamage_State[3]);
                                Renderer.DrawText(antiMageManaVoid.font, x - 90 + antiMageManaVoid.menu_PosSkull_X_State, y + antiMageManaVoid.menu_PosSkull_Y_State, arrayObj[3].toString());
                            }
                        }
                    }
                }
            }
        }
    }
};
AntiMageUltInfo.OnUpdate = () => {
    if (antiMageManaVoid.gameStart && antiMageManaVoid.menu_Enable_State) {
        let count = 0;
        for (let array of antiMageManaVoid.arrayHeroes) {
            if (array[0])
                count++;
        }
        let heroList = EntitySystem.GetHeroesList();
        let enemyList = [];
        for (let enemyHero of heroList) {
            if (enemyHero.IsSameTeam(antiMageManaVoid.myHero))
                continue;
            if (enemyList.length > 4)
                break;
            if (enemyHero.IsHero() && !enemyHero.IsIllusion() && !enemyHero.IsMeepoClone())
                enemyList.push(enemyHero);
        }
        for (let index = 0; index < enemyList.length; index++) {
            antiMageManaVoid.arrayHeroes[index][0] = enemyList[index];
            antiMageManaVoid.arrayHeroes[index][1] = false;
            antiMageManaVoid.arrayHeroes[index][2] = false;
        }
        if (count > 0) {
            let compArray = [[null, -1, -1], [null, -1, -1], [null, -1, -1], [null, -1, -1], [null, -1, -1]];
            for (let index = 0; index < antiMageManaVoid.arrayHeroes.length; index++) {
                if (!antiMageManaVoid.arrayHeroes[index][0])
                    continue;
                compArray[index][0] = antiMageManaVoid.arrayHeroes[index][0];
                compArray[index][1] = antiMageManaVoid.arrayHeroes[index][0].GetMaxMana();
                compArray[index][2] = (antiMageManaVoid.arrayHeroes[index][0].GetMaxMana() - antiMageManaVoid.arrayHeroes[index][0].GetMana())
                    * (antiMageManaVoid.myHero.GetAbilityByIndex(5).GetLevelSpecialValueForFloat('mana_void_damage_per_mana') + (antiMageManaVoid.myHero.GetTalentsMask() && Enum.Talents.TALENT_5 ? 0.1 : 0));
            }
            compArray.sort((a, b) => {
                return (a[1] - b[1]);
            });
            for (let index = 0; index < antiMageManaVoid.arrayHeroes.length; index++) {
                if (!antiMageManaVoid.arrayHeroes[index][0])
                    continue;
                antiMageManaVoid.arrayHeroes[index][1] = compArray[4][1] == 0 ? false : compArray[4][0] === antiMageManaVoid.arrayHeroes[index][0];
            }
            compArray.sort((a, b) => {
                return (a[2] - b[2]);
            });
            for (let arrayHero of antiMageManaVoid.arrayHeroes) {
                if (!arrayHero[0])
                    continue;
                if (compArray[4][2] == 0) {
                    arrayHero[2] = false;
                    arrayHero[3] = 0;
                    continue;
                }
                if (arrayHero[0] == compArray[4][0]) {
                    arrayHero[2] = true;
                    arrayHero[3] = Number((compArray[4][2] * (1 - arrayHero[0].GetMagicalArmorValue())).toString().split('.', 1)[0]);
                }
                else {
                    arrayHero[2] = false;
                    for (let hero of compArray) {
                        if (hero[0] == arrayHero[0]) {
                            arrayHero[3] = Number((compArray[4][2] * (1 - arrayHero[0].GetMagicalArmorValue())).toString().split('.', 1)[0]);
                        }
                    }
                }
            }
        }
    }
};
AntiMageUltInfo.OnGameEnd = () => {
    antiMageManaVoid.gameStart = false;
    antiMageManaVoid.myHero = null;
};
AntiMageUltInfo.OnScriptLoad = AntiMageUltInfo.OnGameStart = antiMageManaVoid.Load.Init;


/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/AntiMage-ManaVoidInfo.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Melonity\scripts\src\AntiMage-ManaVoidInfo.ts */"./src/AntiMage-ManaVoidInfo.ts");


/***/ })

/******/ });