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

/***/ "./src/Information_GoldInfo.ts":
/*!*************************************!*\
  !*** ./src/Information_GoldInfo.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let GoldInfoScript = {};
var mainGoldInfo;
(function (mainGoldInfo) {
    mainGoldInfo.gameStart = false;
    mainGoldInfo.menuCalculate = true;
    mainGoldInfo.menuRender = false;
    mainGoldInfo.menuStatusBB = true;
    mainGoldInfo.menuCanPanelMove = false;
    mainGoldInfo.menuPanelSettings_aplha = 255;
    mainGoldInfo.canMove = false;
    mainGoldInfo.posX = Config.ReadFloat("GoldInfo", "posX", Renderer.GetScreenSize()[0] / 2);
    mainGoldInfo.posY = Config.ReadFloat("GoldInfo", "posY", Renderer.GetScreenSize()[1] / 2);
    mainGoldInfo.myTeam = 0;
    mainGoldInfo.multiplierGold = 1;
    /*[Hero[0], GoldForRender[1], GoldForOther[2], BuyBackCost[3], CanBuyBack[4], MidasUsed[5], Icon[6]]*/
    mainGoldInfo.enemyList = [
        [null, 0, 0, 0, false, false, null],
        [null, 0, 0, 0, false, false, null],
        [null, 0, 0, 0, false, false, null],
        [null, 0, 0, 0, false, false, null],
        [null, 0, 0, 0, false, false, null]
    ];
    mainGoldInfo.enemyListBuyBackUsed = [[false, 0], [false, 0], [false, 0], [false, 0], [false, 0]];
    mainGoldInfo.enemyListLength = 0;
    mainGoldInfo.mainFont = Renderer.LoadFont('Arial', 16, Enum.FontWeight.LIGHT, Enum.FontFlags.OUTLINE);
    mainGoldInfo.laneCreepList = {
        "bonus_gold": 0,
        "melee": 38,
        "ranged": 53,
        "melee_upgraded": 22,
        "ranged_upgraded": 24,
        "melee_upgraded_mega": 22,
        "ranged_upgraded_mega": 24,
        "siege": 73,
        "siege_upgraded_mega": 73,
    };
    mainGoldInfo.otherCreepList = {
        "ghost": 31,
        "fel_beast": 18,
        "harpy_storm": 28,
        "harpy_scout": 22,
        "kobold_taskmaster": 22,
        "kobold_tunneler": 14,
        "kobold": 6,
        "forest_troll_high_priest": 21,
        "forest_troll_berserker": 22,
        "gnoll_assassin": 22,
        "mud_golem": 25,
        "mud_golem_split": 10,
        "alpha_wolf": 33,
        "giant_wolf": 19,
        "satyr_soulstealer": 24,
        "satyr_trickster": 13,
        "satyr_hellcaller": 67,
        "ogre_magi": 32,
        "ogre_mauler": 28,
        "dark_troll": 23,
        "dark_troll_warlord": 46,
        "warlord_skeleton_warrior": 9,
        "centaur_outrunner": 17,
        "centaur_khan": 58,
        "enraged_wildkin": 62,
        "wildkin": 14,
        "polar_furbolg_ursa_warrior": 66,
        "polar_furbolg_champion": 40,
        "big_thunder_lizard": 67,
        "small_thunder_lizard": 47,
        "rock_golem": 42,
        "granite_golem": 83,
        "black_dragon": 122,
        "black_drake": 32,
        "visage_familiar1": 100, "visage_familiar2": 100, "visage_familiar3": 100,
        "warlock_golem_1": 100, "warlock_golem_2": 150, "warlock_golem_3": 200,
        "furion_treant_small": 8, "furion_treant_large": 21,
        "eidolon": 23,
        "beastmaster_boar": 32, "beastmaster_hawk_1": 30, "beastmaster_hawk_2": 40, "beastmaster_hawk_3": 50, "beastmaster_hawk_4": 60,
        "lycan_wolf1": 21, "lycan_wolf2": 26, "lycan_wolf3": 36, "lycan_wolf4": 41,
        "broodmother_spiderling": 9, "broodmother_spiderite": 3,
        "lone_druid_bear": 300,
        "invoker_forged_spirit": 39,
        "necronomicon_warrior_3": 150, "necronomicon_archer_3": 150,
        "wraith_king_skeleton_warrior": 5,
        "observer_wards": 100,
        "techies_land_mine": 25, "techies_stasis_trap": 10, "techies_remote_mine": 10,
        "zeus_cloud": 100,
        "ignis_fatuus": 100,
        "unit_tombstone1": 125, "unit_tombstone2": 150, "unit_tombstone3": 175, "unit_tombstone4": 200,
        "venomancer_plague_ward_1": 15, "venomancer_plague_ward_2": 17, "venomancer_plague_ward_3": 19, "venomancer_plague_ward_4": 21,
        "rattletrap_cog": 18,
        "phoenix_sun": 20,
        "clinkz_skeleton_archer": 20,
        "lich_ice_spire": 20,
        "pugna_nether_ward_1": 20, "pugna_nether_ward_2": 40, "pugna_nether_ward_3": 60, "pugna_nether_ward_4": 80,
        "templar_assassin_psionic_trap": 25,
        "shadow_shaman_ward": 32,
        "weaver_swarm": 31,
        "juggernaut_healing_ward": 75,
        "gyrocopter_homing_missile": 50,
        "roshan": 245
    };
    let menuCalcLabel = Menu.AddToggle(['Custom Scripts', 'Information', 'Gold Info'], 'Calculation Gold', true).SetNameLocale("ru", "Расчёт золота");
    Menu.GetFolder(['Custom Scripts', 'Information', 'Gold Info']).SetTip("Сделано: no_frfa\nДанный скрипт будет выводить ВОЗМОЖНОЕ количество золота у вражеских героев\nНа данный момент скрипт учитывает:"
        + "\n- Убитых крипов\n- Убийство рошана\n- Периодическое золото\n- Философский камень\n- Подбирание БаунтиРун\n- Использование мидаса\n- Убийство курьера\n- Убийство героев (Частично)\n- Ломание вышек/построек", "ru");
    Menu.GetFolder(['Custom Scripts', 'Information', 'Gold Info']).SetTip('Made by: no_frfa\nSOON', "en");
    menuCalcLabel.SetTip('Если включено, скрипт будет рассчитывать вражеское золото (Если будет включено посередине игры, значение золота будет неверным)', 'ru');
    menuCalcLabel.SetTip('SOON', 'en');
    menuCalcLabel.OnChange(state => {
        mainGoldInfo.menuCalculate = state.newValue;
    });
    mainGoldInfo.menuCalculate = menuCalcLabel.GetValue();
    let menuRenderLabel = Menu.AddToggle(['Custom Scripts', 'Information', 'Gold Info'], 'Render Panel', false).SetNameLocale("ru", "Отрисовка панели");
    menuRenderLabel.OnChange(state => {
        mainGoldInfo.menuRender = state.newValue;
    });
    mainGoldInfo.menuRender = menuRenderLabel.GetValue();
    let menuStatusBBLabel = Menu.AddToggle(['Custom Scripts', 'Information', 'Gold Info'], 'Displaying Status Bayback', true).SetNameLocale("ru", "Отображение состояния байбэка");
    menuStatusBBLabel.SetTip("Отображает рядом на панели рядом с героями ВОЗМОЖНОЕ состояние байбека (хватает ли врагу денег на байбек)", "ru");
    menuStatusBBLabel.SetTip("Displays the POSSIBLE state of the buyback next to the heroes on the panel next to the heroes (does the enemy have enough money for the buyback)", "en");
    menuStatusBBLabel.OnChange(state => {
        mainGoldInfo.menuStatusBB = state.newValue;
    });
    mainGoldInfo.menuStatusBB = menuStatusBBLabel.GetValue();
    let menuCanPanelMoveLabel = Menu.AddToggle(['Custom Scripts', 'Information', 'Gold Info'], 'Moving the panel', false).SetNameLocale("ru", "Перемещение панели");
    menuCanPanelMoveLabel.SetTip("Перемещение панели 'Gold Info' при зажатии Ctrl+ЛКМ", "ru");
    menuCanPanelMoveLabel.SetTip("Moving the 'Gold Info' panel when holding Ctrl + LMB", "en");
    menuCanPanelMoveLabel.OnChange(state => {
        mainGoldInfo.menuCanPanelMove = state.newValue;
    });
    mainGoldInfo.menuCanPanelMove = menuCanPanelMoveLabel.GetValue();
    let menuPanelSettingsLabel_alpha = Menu.AddSlider(['Custom Scripts', 'Information', 'Gold Info', 'Panel Settings'], `PanelTransparency`, 0, 255, 255, 1);
    menuPanelSettingsLabel_alpha.SetTip('Управляет прозрачностью панели', "ru");
    menuPanelSettingsLabel_alpha.SetTip('Controls the transparency of the panel', "en");
    menuPanelSettingsLabel_alpha.OnChange(state => {
        mainGoldInfo.menuPanelSettings_aplha = state.newValue;
    });
    mainGoldInfo.menuPanelSettings_aplha = menuPanelSettingsLabel_alpha.GetValue();
    let menuHelpButton_panel = Menu.AddButton(['Custom Scripts', 'Information', 'Gold Info', 'Help'], 'Reset Panel', () => {
        fixButton();
    });
    menuHelpButton_panel.SetTip("Используйте, если столкнулись с какой-то проблемой отрисовки панели", "ru");
    menuHelpButton_panel.SetTip("SOON", "en");
    Menu.SetImage(['Custom Scripts', 'Information'], '~/menu/40x40/info.png');
    mainGoldInfo.CFG = {
        Save: (key, value) => {
            Config.Write("GoldInfo", key, value);
        },
        Read: (key, defaultValue) => {
            return Config.Read('GoldInfo', key, defaultValue);
        }
    };
    let Load;
    (function (Load) {
        function Init() {
            if (GameRules.IsActiveGame()) {
                if (GameRules.GetMatchID().toString() != mainGoldInfo.CFG.Read('GameID', '-1')) {
                    mainGoldInfo.gameStart = false;
                    mainGoldInfo.enemyListLength = 0;
                    mainGoldInfo.myHero = null;
                    mainGoldInfo.enemyList = [
                        [null, 0, 0, 0, false, false, null],
                        [null, 0, 0, 0, false, false, null],
                        [null, 0, 0, 0, false, false, null],
                        [null, 0, 0, 0, false, false, null],
                        [null, 0, 0, 0, false, false, null]
                    ];
                    mainGoldInfo.enemyListBuyBackUsed = [[false, 0], [false, 0], [false, 0], [false, 0], [false, 0]];
                    mainGoldInfo.enemyListLength = 0;
                    if (GameRules.GetGameMode() == 23)
                        mainGoldInfo.multiplierGold = 2;
                    mainGoldInfo.CFG.Save('GameID', GameRules.GetMatchID().toString());
                    mainGoldInfo.CFG.Save('UsersData', JSON.stringify(mainGoldInfo.enemyList));
                    mainGoldInfo.CFG.Save('UserDataPart2', JSON.stringify(mainGoldInfo.enemyListBuyBackUsed));
                }
                let parsed = JSON.parse(mainGoldInfo.CFG.Read('UsersData', ''));
                if (parsed != '') {
                    mainGoldInfo.enemyList = ConvertIndexToHero(parsed);
                }
                parsed = JSON.parse(mainGoldInfo.CFG.Read('UserDataPart2', ''));
                if (parsed != '')
                    mainGoldInfo.enemyListBuyBackUsed = parsed;
                if (GameRules.GetGameMode() == 23)
                    mainGoldInfo.multiplierGold = 2;
                mainGoldInfo.gameStart = true;
                mainGoldInfo.myHero = EntitySystem.GetLocalHero();
                mainGoldInfo.myTeam = mainGoldInfo.myHero.GetTeamNum();
                mainGoldInfo.myPlayer = EntitySystem.GetLocalPlayer();
                mainGoldInfo.screenSize = Renderer.GetScreenSize();
            }
            if (!mainGoldInfo.myHero || !mainGoldInfo.myHero.IsExist() || mainGoldInfo.myHero.GetUnitName() == null) {
                mainGoldInfo.gameStart = false;
                return;
            }
        }
        Load.Init = Init;
    })(Load = mainGoldInfo.Load || (mainGoldInfo.Load = {}));
})(mainGoldInfo || (mainGoldInfo = {}));
GoldInfoScript.OnUpdate = () => {
    if (mainGoldInfo.gameStart) {
        let heroesSize = 0;
        if (mainGoldInfo.menuCalculate) {
            let heroes = EntitySystem.GetHeroesList();
            let enemyHeroes = [];
            for (let hero of heroes) {
                if (!hero.IsSameTeam(mainGoldInfo.myHero) && !hero.IsIllusion() && !hero.IsMeepoClone() && !hero.IsPlayer()) {
                    enemyHeroes.push(hero);
                }
            }
            if (enemyHeroes.length && mainGoldInfo.enemyListLength < 5) {
                for (let index = 0; index < enemyHeroes.length; index++) {
                    mainGoldInfo.enemyList[index][0] = enemyHeroes[index];
                    mainGoldInfo.enemyList[index][1] = 0;
                    mainGoldInfo.enemyList[index][4] = false;
                    mainGoldInfo.enemyList[index][6] = enemyHeroes[index].GetImage(true);
                }
            }
            if (GameRules.GetGameState() === Enum.GameState.GAME_IN_PROGRESS) {
                let gameTime = Number((GameRules.GetGameTime() - GameRules.GetPreGameStartTime())) - 90;
                let timeForGold = 0;
                let [goldStage1, goldStage2, goldStage3, goldStage4] = [0, 0, 0, 0];
                if (Number(Number(gameTime / 60).toString().split('.', 1)[0]) < 5) {
                    timeForGold = gameTime / 0.6;
                }
                else if (Number(Number(gameTime / 60).toString().split('.', 1)[0]) >= 5) {
                    goldStage1 = gameTime / 0.6 * timeForGold;
                    timeForGold = gameTime * 1.76;
                }
                else if (Number(Number(gameTime / 60).toString().split('.', 1)[0]) >= 22) {
                    goldStage2 = gameTime * 1.76 * timeForGold - goldStage1;
                    timeForGold = gameTime * 1.86;
                }
                else if (Number(Number(gameTime / 60).toString().split('.', 1)[0]) >= 40) {
                    goldStage3 = gameTime * 1.86 * timeForGold - goldStage1 - goldStage2;
                    timeForGold = gameTime * 2;
                }
                else if (Number(Number(gameTime / 60).toString().split('.', 1)[0]) >= 62) {
                    goldStage4 = gameTime * 2 * timeForGold - goldStage1 - goldStage2 - goldStage3;
                    timeForGold = gameTime * 2.13;
                }
                if (gameTime / 450) {
                    mainGoldInfo.laneCreepList['bonus_gold'] = Number((gameTime / 450).toString().split('.', 1)[0]);
                }
                for (let check of mainGoldInfo.enemyList) {
                    if (check[0])
                        heroesSize++;
                }
                if (heroesSize > 0) {
                    for (let index = 0; index < mainGoldInfo.enemyList.length; index++) {
                        if (!mainGoldInfo.enemyList[index][0] || mainGoldInfo.enemyList[index][0] == undefined)
                            continue;
                        let inventory = mainGoldInfo.enemyList[index][0].GetItems(false);
                        let inventoryCost = 0;
                        for (let itemInInv of inventory) {
                            inventoryCost += itemInInv.GetCost();
                            if (itemInInv.GetName() === 'item_philosophers_stone') {
                                timeForGold += 0.75;
                            }
                        }
                        let TotalGold = 700 + timeForGold + mainGoldInfo.enemyList[index][2] - inventoryCost - goldStage1 - goldStage2 - goldStage3 - goldStage4;
                        mainGoldInfo.enemyList[index][1] = Number(TotalGold.toFixed());
                        let BuyBackCost = 200 + (700 + timeForGold + mainGoldInfo.enemyList[index][2] + inventoryCost - goldStage1 - goldStage2 - goldStage3 - goldStage4) / 13;
                        mainGoldInfo.enemyList[index][3] = Number(BuyBackCost.toFixed());
                        mainGoldInfo.enemyList[index][4] = !mainGoldInfo.enemyListBuyBackUsed[index][0] ? TotalGold >= BuyBackCost : false;
                        if (mainGoldInfo.enemyListBuyBackUsed[index][0]) {
                            if (mainGoldInfo.enemyListBuyBackUsed[index][1] - GameRules.GetGameTime() <= 0)
                                mainGoldInfo.enemyListBuyBackUsed[index][0] = false;
                        }
                    }
                    mainGoldInfo.CFG.Save('UsersData', JSON.stringify(ConvertHeroToIndex()));
                    mainGoldInfo.CFG.Save('UserDataPart2', JSON.stringify(mainGoldInfo.enemyListBuyBackUsed));
                }
            }
            else {
                for (let index = 0; index < mainGoldInfo.enemyList.length; index++) {
                    if (!mainGoldInfo.enemyList[index][0])
                        continue;
                    heroesSize++;
                    //let inventory: Item[] = mainGoldInfo.enemyList[index][0].GetItems(false);
                    let inventoryCost = 0;
                    /*for(let itemInInv of inventory) {
                        inventoryCost += itemInInv.GetCost();
                    }*/
                    mainGoldInfo.enemyList[index][1] = 700 + mainGoldInfo.enemyList[index][2] - inventoryCost;
                    let TotalGold = 700 + mainGoldInfo.enemyList[index][2] - inventoryCost;
                    mainGoldInfo.enemyList[index][1] = Number(TotalGold.toFixed());
                    let BuyBackCost = 200 + (700 + mainGoldInfo.enemyList[index][2] + inventoryCost) / 12;
                    mainGoldInfo.enemyList[index][3] = Number(BuyBackCost.toFixed());
                    mainGoldInfo.enemyList[index][4] = !mainGoldInfo.enemyListBuyBackUsed[index][0] ? TotalGold >= BuyBackCost : false;
                    if (mainGoldInfo.enemyListBuyBackUsed[index][0]) {
                        if (mainGoldInfo.enemyListBuyBackUsed[index][1] - GameRules.GetGameTime() <= 0)
                            mainGoldInfo.enemyListBuyBackUsed[index][0] = false;
                    }
                    mainGoldInfo.CFG.Save('UsersData', JSON.stringify(ConvertHeroToIndex()));
                    mainGoldInfo.CFG.Save('UserDataPart2', JSON.stringify(mainGoldInfo.enemyListBuyBackUsed));
                }
            }
            mainGoldInfo.enemyListLength = heroesSize;
        }
        else
            mainGoldInfo.enemyListLength = 0;
        if (mainGoldInfo.menuRender && mainGoldInfo.menuCanPanelMove) {
            if (Input.IsKeyDown(Enum.ButtonCode.KEY_LCONTROL) && Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT)) {
                if (Input.IsCursorInRect(mainGoldInfo.posX, mainGoldInfo.posY, 88, 34 * mainGoldInfo.enemyListLength, Enum.ContentAlign.CenterXBottom) || Input.IsCursorInRect(mainGoldInfo.posX, mainGoldInfo.posY, 88, 18, Enum.ContentAlign.CenterXTop)) {
                    mainGoldInfo.canMove = true;
                }
            }
            else if (!Input.IsKeyDown(Enum.ButtonCode.KEY_LCONTROL) || !Input.IsKeyDown(Enum.ButtonCode.MOUSE_LEFT))
                mainGoldInfo.canMove = false;
            if (mainGoldInfo.canMove) {
                mainGoldInfo.posX = Input.GetCursorPos()[0];
                mainGoldInfo.posY = Input.GetCursorPos()[1];
                Config.WriteFloat("GoldInfo", "posX", mainGoldInfo.posX);
                Config.WriteFloat("GoldInfo", "posY", mainGoldInfo.posY);
            }
        }
        if (mainGoldInfo.menuRender) {
            Renderer.SetDrawColor(43, 43, 58, mainGoldInfo.menuPanelSettings_aplha);
            Renderer.DrawFilledRect(mainGoldInfo.posX, mainGoldInfo.posY, 88, 34 * heroesSize, 0, Enum.ContentAlign.CenterXBottom);
            Renderer.SetDrawColor(37, 69, 88, mainGoldInfo.menuPanelSettings_aplha);
            Renderer.DrawFilledRect(mainGoldInfo.posX, mainGoldInfo.posY, 88, 18, 0, Enum.ContentAlign.CenterXTop);
            Renderer.SetDrawColor(244, 245, 246, mainGoldInfo.menuPanelSettings_aplha);
            Renderer.DrawOutlineRect(mainGoldInfo.posX, mainGoldInfo.posY, 90, 34 * heroesSize, 0, Enum.ContentAlign.CenterXBottom);
            Renderer.DrawOutlineRect(mainGoldInfo.posX, mainGoldInfo.posY + 1, 90, 20, 0, Enum.ContentAlign.CenterXTop);
            Renderer.SetDrawColor(255, 255, 255, mainGoldInfo.menuPanelSettings_aplha);
            Renderer.DrawText(mainGoldInfo.mainFont, mainGoldInfo.posX, mainGoldInfo.posY - 1, `Gold Panel`, 0, Enum.ContentAlign.CenterXTop);
            let Locale = Menu.GetLocale();
            if (!mainGoldInfo.menuCalculate) {
                let text = Locale === 'ru' ? 'Расчёт золота выключен' : 'Gold calculation is disabled';
                Renderer.SetDrawColor(255, 20, 20, mainGoldInfo.menuPanelSettings_aplha);
                Renderer.DrawText(mainGoldInfo.mainFont, mainGoldInfo.posX, mainGoldInfo.posY, text, 0, Enum.ContentAlign.CenterXBottom);
            }
            else {
                for (let index = 0; index < mainGoldInfo.enemyList.length; index++) {
                    if (!mainGoldInfo.enemyList[index][0])
                        continue;
                    Renderer.SetDrawColor(255, 255, 255, 255);
                    Renderer.DrawImage(mainGoldInfo.enemyList[index][6], mainGoldInfo.posX - 20, mainGoldInfo.posY + 17 + (34 * index), 24, 23, 0, Enum.ContentAlign.CenterXY);
                    Renderer.DrawText(mainGoldInfo.mainFont, mainGoldInfo.posX - 5, mainGoldInfo.posY + 16 + (34 * index), `${mainGoldInfo.enemyList[index][1]}`, 0, Enum.ContentAlign.LeftCenterY);
                    Renderer.SetDrawColor(255, 215, 0, mainGoldInfo.menuPanelSettings_aplha);
                    Renderer.DrawOutlineRect(mainGoldInfo.posX, mainGoldInfo.posY + 3 + (34 * index), 82, 28, 0, Enum.ContentAlign.CenterXBottom);
                    if (mainGoldInfo.menuStatusBB) {
                        let StatusBuyBack = Locale === 'ru' ? 'Нет' : 'No';
                        if (mainGoldInfo.enemyListBuyBackUsed[index][0]) {
                            StatusBuyBack += ` (${((mainGoldInfo.enemyListBuyBackUsed[index][1] - GameRules.GetGameTime())).toString().split('.')[0]})` + Locale === 'ru' ? 'сек' : 'sec';
                        }
                        else {
                            if (mainGoldInfo.enemyList[index][4]) {
                                StatusBuyBack = Locale === 'ru' ? 'Да' : 'Yes';
                            }
                        }
                        let text = `${mainGoldInfo.enemyList[index][3]} (${StatusBuyBack})`;
                        Renderer.SetDrawColor(43, 43, 58, mainGoldInfo.menuPanelSettings_aplha);
                        Renderer.DrawFilledRect(mainGoldInfo.posX + 44, mainGoldInfo.posY + 17 + (34 * index), Renderer.GetTextSize(mainGoldInfo.mainFont, text)[0] + 10, 28, 0, Enum.ContentAlign.LeftCenterY);
                        Renderer.SetDrawColor(244, 245, 246, mainGoldInfo.menuPanelSettings_aplha);
                        Renderer.DrawOutlineRect(mainGoldInfo.posX + 44, mainGoldInfo.posY + 17 + (34 * index), Renderer.GetTextSize(mainGoldInfo.mainFont, text)[0] + 10, 28, 0, Enum.ContentAlign.LeftCenterY);
                        Renderer.SetDrawColor(255, 255, 255, 255);
                        Renderer.DrawText(mainGoldInfo.mainFont, mainGoldInfo.posX + 48, mainGoldInfo.posY + 16 + (34 * index), text, 0, Enum.ContentAlign.LeftCenterY);
                    }
                }
            }
        }
    }
};
GoldInfoScript.OnFireEvent = (event) => {
    if (mainGoldInfo.menuCalculate) {
        if (event.name === 'entity_killed') {
            let attacker = EntityList.GetByIndex(event.GetInt('entindex_attacker'));
            let killed = EntityList.GetByIndex(event.GetInt('entindex_killed'));
            if (!killed || !attacker)
                return;
            if (attacker.IsSameTeam(mainGoldInfo.myHero)) {
                return;
            else if (attacker.IsNPC()) {
                let ownerNpc = attacker.GetOwner();
                if (!ownerNpc)
                    return;
                for (let arrayHero of mainGoldInfo.enemyList) {
                    if (arrayHero[0] == ownerNpc) {
                        attacker = ownerNpc;
                    }
                }
            }
            else
                return;
            if (killed.IsNPC()) {
                AddGoldFromCreep(attacker, killed);
            }
            if (killed.IsCourier()) {
                AddGold(undefined, undefined, 25 + (5 * killed.GetCurrentLevel()));
            }
            if (killed.IsTower()) {
                let towerNumber = killed.GetUnitName().replace('npc_dota_badguys_', '').replace('npc_dota_goodguys_', '').replace('tower', '').split('_', 1);
                let gold = Number((((55 + 20 * Number(towerNumber[0])) + (145 + 20 * Number(towerNumber[0]))) / 2).toString().split('.', 1)[0]);
                AddGold(attacker, gold);
            }
            if (killed.IsStructure()) {
                let Structure = killed.GetUnitName().replace('npc_dota_badguys_', '').replace('npc_dota_goodguys_', '').split('_');
                let goldFromStructure = -1;
                let goldDestroyer = -1;
                for (let index = 0; index < Structure.length; index++) {
                    if (Structure[index] === 'melee') {
                        goldDestroyer = 112;
                        goldFromStructure = 155;
                    }
                    else if (Structure[index] === 'range') {
                        goldDestroyer = 122;
                        goldFromStructure = 90;
                    }
                    else if (Structure[index] === 'fillers') {
                        goldDestroyer = 68;
                    }
                }
                AddGold(attacker, goldDestroyer, goldFromStructure);
            }
        }
        if (event.name === 'dota_tower_kill') {
            if (event.GetInt('teamnumber') != mainGoldInfo.myTeam)
                AddGold(undefined, undefined, event.GetInt('gold'));
        }
        if (event.name === 'dota_player_kill') {
            if (event.GetInt('neutral') || event.GetInt('greevil'))
                return;
            EntityList.GetPlayersList().forEach((player) => {
                if (player.GetAssignedHero())
                    if (player.GetAssignedHero().IsSameTeam(mainGoldInfo.myHero))
                        return;
                if (player.GetPlayerID() == event.GetInt('victim_userid')) {
                    if (player.GetAssignedHero().GetModifier('modifier_bounty_hunter_track')) {
                        let heroes = EntitySystem.GetHeroesList();
                        let [trackGold, trackGold_self] = [0, 0];
                        for (let hero of heroes) {
                            if (hero.GetUnitName() === 'npc_dota_hero_bounty_hunter') {
                                trackGold = hero.GetAbilityByIndex(5).GetLevelSpecialValueFor('bonus_gold');
                                trackGold_self = hero.GetAbilityByIndex(5).GetLevelSpecialValueFor('bonus_gold_self');
                            }
                        }
                        let allyInRadius = player.GetAssignedHero().GetHeroesInRadius(1200, Enum.TeamType.TEAM_FRIEND);
                        for (let radiusHero of allyInRadius) {
                            for (let arrayHero of mainGoldInfo.enemyList) {
                                if (radiusHero == arrayHero[0]) {
                                    if (arrayHero[0].GetUnitName() === 'npc_dota_hero_bounty_hunter')
                                        arrayHero[2] += trackGold_self;
                                    else
                                        arrayHero[2] += trackGold;
                                }
                            }
                        }
                    }
                }
            });
            EntityList.GetPlayersList().forEach((player) => {
                if (player.GetPlayerID() == event.GetInt('killer1_userid')) {
                    for (let var0 of mainGoldInfo.enemyList) {
                        if (!var0[0])
                            continue;
                        if (var0[0] == player.GetAssignedHero())
                            AddGold(player.GetAssignedHero(), event.GetInt('bounty'));
                    }
                }
            });
        }
    }
};
GoldInfoScript.OnParticleCreate = (event) => {
    if (mainGoldInfo.menuCalculate) {
        if (event.name === 'rune_bounty_owner') {
            if (!event.entity)
                return;
            if (event.entity.IsSameTeam(mainGoldInfo.myHero))
                return;
            let gameTime = Number((GameRules.GetGameTime() - GameRules.GetPreGameStartTime())) - 90;
            let bountyCost = (36 + (9 * Number((gameTime / 300).toString().split('.', 1)[0])));
            let bountyMult = 1;
            if (event.entity.GetUnitName() === 'npc_dota_hero_alchemist') {
                bountyMult = event.entity.GetAbilityByIndex(3).GetLevelSpecialValueForFloat('bounty_multiplier');
            }
            let heroIndex = GetIndexHeroInArray(event.entity);
            if (heroIndex) {
                mainGoldInfo.enemyList[heroIndex][2] += bountyCost * bountyMult;
            }
            else {
                for (let index = 0; index < mainGoldInfo.enemyList.length; index++) {
                    if (mainGoldInfo.enemyList[index][0])
                        continue;
                    mainGoldInfo.enemyList[index][2] += bountyCost * bountyMult;
                }
            }
        }
        if (event.name === 'hand_of_midas') {
            if (event.entityForModifiers.IsHero()) {
                if (GetIndexHeroInArray(event.entityForModifiers)) {
                    mainGoldInfo.enemyList[GetIndexHeroInArray(event.entityForModifiers)][5] = true;
                    setTimeout(() => {
                        mainGoldInfo.enemyList[GetIndexHeroInArray(event.entityForModifiers)][5] = false;
                    }, 66);
                }
                AddGold(event.entityForModifiers, 160 * mainGoldInfo.multiplierGold);
            }
        }
        if (event.name === 'bounty_hunter_jinada') {
            for (let arrayHero of mainGoldInfo.enemyList) {
                if (arrayHero[0] == event.entityForModifiers) {
                    AddGold(arrayHero[0], arrayHero[0].GetAbilityByIndex(2).GetLevelSpecialValueFor('gold_steal'));
                }
            }
        }
        if (event.name === 'doom_bringer_devour') {
            for (let arrayHero of mainGoldInfo.enemyList) {
                if (arrayHero[0] == event.entity) {
                    AddGold(arrayHero[0], arrayHero[0].GetAbilityByIndex(1).GetLevelSpecialValueFor('bonus_gold'));
                }
            }
        }
    }
};
GoldInfoScript.OnChatEvent = (event) => {
    if (event.type === Enum.DOTA_CHAT_MESSAGE.CHAT_MESSAGE_BUYBACK) {
        EntityList.GetPlayersList().forEach((player) => {
            if (player.GetPlayerID() == event.playerIDs[0]) {
                for (let index = 0; index < mainGoldInfo.enemyList.length; index++) {
                    if (!mainGoldInfo.enemyList[index][0])
                        continue;
                    if (mainGoldInfo.enemyList[index][0] == player.GetAssignedHero()) {
                        mainGoldInfo.enemyListBuyBackUsed[index][0] = true;
                        mainGoldInfo.enemyListBuyBackUsed[index][1] = GameRules.GetGameTime() + 480;
                        mainGoldInfo.enemyList[index][2] -= mainGoldInfo.enemyList[index][3];
                        break;
                    }
                }
                return;
            }
        });
    }
};
GoldInfoScript.OnGameEnd = () => {
    mainGoldInfo.gameStart = false;
    mainGoldInfo.enemyListLength = 0;
    mainGoldInfo.myHero = null;
};
GoldInfoScript.OnScriptLoad = GoldInfoScript.OnGameStart = mainGoldInfo.Load.Init;
function ConvertHeroToIndex() {
    let tmpArray0 = mainGoldInfo.enemyList;
    let tmpArray1 = [
        [-1, 0, 0, 0, false, false, null],
        [-1, 0, 0, 0, false, false, null],
        [-1, 0, 0, 0, false, false, null],
        [-1, 0, 0, 0, false, false, null],
        [-1, 0, 0, 0, false, false, null]
    ];
    for (let index = 0; index < tmpArray0.length; index++) {
        for (let index1 = 0; index1 < tmpArray0[index].length; index1++) {
            tmpArray1[index][index1] = index1 == 0 ? tmpArray0[index][index1] ? tmpArray0[index][index1].GetIndex() : -1 : tmpArray0[index][index1];
        }
    }
    return tmpArray1;
}
function ConvertIndexToHero(parsed) {
    let tmpArray0 = parsed;
    let tmpArray1 = [
        [null, 0, 0, 0, false, false, null],
        [null, 0, 0, 0, false, false, null],
        [null, 0, 0, 0, false, false, null],
        [null, 0, 0, 0, false, false, null],
        [null, 0, 0, 0, false, false, null]
    ];
    for (let index = 0; index < tmpArray0.length; index++) {
        for (let index1 = 0; index1 < tmpArray0[index].length; index1++) {
            tmpArray1[index][index1] = index1 == 0 ? tmpArray0[index][index1] ? EntityList.GetByIndex(tmpArray0[index][index1]) : null : tmpArray0[index][index1];
        }
    }
    return tmpArray1;
}
function GetIndexHeroInArray(hero) {
    for (let index = 0; index < mainGoldInfo.enemyList.length; index++) {
        if (!mainGoldInfo.enemyList[index][0])
            continue;
        if (mainGoldInfo.enemyList[index][0] === hero)
            return index;
    }
    return -1;
}
function AddGoldFromCreep(hero, creep) {
    for (let arrayHero of mainGoldInfo.enemyList) {
        if (!arrayHero[0])
            continue;
        if (arrayHero[0] === hero) {
            let creepName = creep.GetUnitName()
                .replace('npc_dota_neutral_', '')
                .replace('npc_dota_creep_', '')
                .replace('npc_dota_', '')
                .replace('dire_eidolon', 'eidolon')
                .replace('furion_treant_1', 'furion_treant_small')
                .replace('furion_treant_2', 'furion_treant_small')
                .replace('furion_treant_3', 'furion_treant_small')
                .replace('furion_treant_4', 'furion_treant_small')
                .replace('beastmaster_boar_1', 'beastmaster_boar')
                .replace('beastmaster_boar_2', 'beastmaster_boar')
                .replace('beastmaster_boar_3', 'beastmaster_boar')
                .replace('beastmaster_boar_4', 'beastmaster_boar')
                .replace('lone_druid_bear1', 'lone_druid_bear')
                .replace('lone_druid_bear2', 'lone_druid_bear')
                .replace('lone_druid_bear3', 'lone_druid_bear')
                .replace('lone_druid_bear4', 'lone_druid_bear')
                .replace('shadow_shaman_ward_1', 'shadow_shaman_ward')
                .replace('shadow_shaman_ward_2', 'shadow_shaman_ward')
                .replace('shadow_shaman_ward_3', 'shadow_shaman_ward')
                .replace('badguys_', '')
                .replace('goodguys_', '');
            if (creepName === 'roshan')
                AddGold(arrayHero[0], 135);
            if (arrayHero[0].GetUnitName() === 'npc_dota_hero_alchemist') {
                let goldModifier = hero.GetModifier('modifier_alchemist_goblins_greed').GetStackCount();
                AddGold(arrayHero[0], goldModifier);
            }
            if (mainGoldInfo.laneCreepList[creepName]) {
                arrayHero[2] += mainGoldInfo.laneCreepList[creepName] * mainGoldInfo.multiplierGold;
                break;
            }
            if (mainGoldInfo.otherCreepList[creepName]) {
                let bonus = 0;
                if (creepName === 'observer_wards') {
                    let gameTime = Number((GameRules.GetGameTime() - GameRules.GetPreGameStartTime())) - 90;
                    bonus = Number((gameTime / 15).toString().split('.', 1)[0]);
                }
                arrayHero[2] += (mainGoldInfo.otherCreepList[creepName] + bonus) * mainGoldInfo.multiplierGold;
                break;
            }
        }
    }
}
function AddGold(hero, gold, GoldAll) {
    if (hero) {
        if (gold) {
            mainGoldInfo.enemyList[GetIndexHeroInArray(hero)][2] += gold;
        }
    }
    if (GoldAll) {
        for (let arrayHero of mainGoldInfo.enemyList) {
            arrayHero[2] += GoldAll;
        }
    }
}
function fixButton() {
    mainGoldInfo.screenSize = Renderer.GetScreenSize();
    mainGoldInfo.posX = mainGoldInfo.screenSize[0] / 2;
    mainGoldInfo.posY = mainGoldInfo.screenSize[1] / 2;
    Config.WriteFloat("GoldInfo", "posX", mainGoldInfo.posX);
    Config.WriteFloat("GoldInfo", "posY", mainGoldInfo.posY);
}
RegisterScript(GoldInfoScript);


/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./src/Information_GoldInfo.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\Information_GoldInfo.ts */"./src/Information_GoldInfo.ts");


/***/ })

/******/ });