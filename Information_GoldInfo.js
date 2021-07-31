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
/***/ (function(module, exports) {

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
    mainGoldInfo.bountyCost = 36;
    /**[Hero[0], GoldForRender[1], GoldForOther[2], BuyBackCost[3], CanBuyBack[4], MidasUsed[5], Icon[6]]*/
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
    mainGoldInfo.neutralCreepList = [
        //small
        ['forest_troll_berserker', 22], ['troll_high_priest', 21], ['kobold_c', 6], ['kobold_a', 22], ['kobold_b', 14], ['gnoll', 22], ['ghost_a', 31], ['ghost_b', 18], ['harpy_b', 28], ['harpy_a', 22],
        //medium
        ['worg_large', 33], ['worg_small', 19], ['ogre_lrg', 32], ['ogre_med', 28], ['golem_b', 19],
        //big
        ['troll_dark_a', 23], ['troll_dark_b', 46], ['skeleton_melee', 9], ['satyr_a', 66], ['satyr_c', 24], ['satyr_b', 13], ['centaur_med', 17], ['centaur_lrg', 58], ['furbolg_disrupter', 66], ['beast', 40], ['vulture_b', 14], ['vulture_a', 62],
        //ancient
        ['golem_a', 62], ['thunder_lizard_big', 67], ['thunder_lizard_small', 47], ['black_dragon', 122], ['black_drake', 32]
    ];
    mainGoldInfo.laneCreepList = [
        ['creep_bad_melee', 38], ['radiant_melee', 38], ['lane_dire_ranged', 53], ['radiant_ranged', 53],
        ['radiant_melee_mega', 22], ['radiant_ranged_mega', 22], ['creep_bad_melee_mega', 24], ['lane_dire_ranged_mega', 24]
    ];
    let menuCalcLabel = Menu.AddToggle(['Custom Scripts', 'Information', 'Gold Info'], 'Calculation Gold', true).SetNameLocale("ru", "Расчёт золота");
    Menu.GetFolder(['Custom Scripts', 'Information', 'Gold Info']).SetTip("Сделано: no_frfa\nДанный скрипт будет выводить ВОЗМОЖНОЕ количество золота у вражеских героев\nНа данный момент скрипт учитывает:"
        + "\n- Убитых крипов\n- Убийство рошана\n- Периодическое золото\n- Философский камень\n- Подбирание БаунтиРун\n- Использование мидаса\n- Убийство курьера\n- Убийство героев (Частично)\n- Ломание вышек/построек", "ru");
    Menu.GetFolder(['Custom Scripts', 'Information', 'Gold Info']).SetTip('Made by: no_frfa\nSOON', "en");
    menuCalcLabel.SetTip('Если включено, скрипт будет рассчитывать вражеское золото (Если будет включено посередине игры, значение золота будет неверным)', 'ru');
    menuCalcLabel.SetTip('SOON', 'en');
    menuCalcLabel.OnChange(state => { mainGoldInfo.menuCalculate = state.newValue; });
    mainGoldInfo.menuCalculate = menuCalcLabel.GetValue();
    let menuRenderLabel = Menu.AddToggle(['Custom Scripts', 'Information', 'Gold Info'], 'Render Panel', false).SetNameLocale("ru", "Отрисовка панели");
    menuRenderLabel.OnChange(state => { mainGoldInfo.menuRender = state.newValue; });
    mainGoldInfo.menuRender = menuRenderLabel.GetValue();
    let menuStatusBBLabel = Menu.AddToggle(['Custom Scripts', 'Information', 'Gold Info'], 'Displaying Status Bayback', true).SetNameLocale("ru", "Отображение состояния байбэка");
    menuStatusBBLabel.SetTip("Отображает рядом на панели рядом с героями ВОЗМОЖНОЕ состояние байбека (хватает ли врагу денег на байбек)", "ru");
    menuStatusBBLabel.SetTip("Displays the POSSIBLE state of the buyback next to the heroes on the panel next to the heroes (does the enemy have enough money for the buyback)", "en");
    menuStatusBBLabel.OnChange(state => { mainGoldInfo.menuStatusBB = state.newValue; });
    mainGoldInfo.menuStatusBB = menuStatusBBLabel.GetValue();
    let menuCanPanelMoveLabel = Menu.AddToggle(['Custom Scripts', 'Information', 'Gold Info'], 'Moving the panel', false).SetNameLocale("ru", "Перемещение панели");
    menuCanPanelMoveLabel.SetTip("Перемещение панели 'Gold Info' при зажатии Ctrl+ЛКМ", "ru");
    menuCanPanelMoveLabel.SetTip("Moving the 'Gold Info' panel when holding Ctrl + LMB", "en");
    menuCanPanelMoveLabel.OnChange(state => { mainGoldInfo.menuCanPanelMove = state.newValue; });
    mainGoldInfo.menuCanPanelMove = menuCanPanelMoveLabel.GetValue();
    let menuPanelSettingsLabel_alpha = Menu.AddSlider(['Custom Scripts', 'Information', 'Gold Info', 'Panel Settings'], `PanelTransparency`, 0, 255, 255, 1);
    menuPanelSettingsLabel_alpha.SetTip('Управляет прозрачностью панели', "ru");
    menuPanelSettingsLabel_alpha.SetTip('Controls the transparency of the panel', "en");
    menuPanelSettingsLabel_alpha.OnChange(state => { mainGoldInfo.menuPanelSettings_aplha = state.newValue; });
    mainGoldInfo.menuPanelSettings_aplha = menuPanelSettingsLabel_alpha.GetValue();
    let menuHelpButton_panel = Menu.AddButton(['Custom Scripts', 'Information', 'Gold Info', 'Help'], 'Reset Panel', () => { fixButton(); });
    menuHelpButton_panel.SetTip("Используйте, если столкнулись с какой-то проблемой отрисовки панели", "ru");
    menuHelpButton_panel.SetTip("SOON", "en");
    mainGoldInfo.menuHelpButton_stat = Menu.AddButton(['Custom Scripts', 'Information', 'Gold Info', 'Help'], 'Reset Stat', () => { fixStat(); });
    mainGoldInfo.menuHelpButton_stat.SetTip("Используйте, если хотите сбросить статистику у героев \nДанная кнопка может полностью сломать расчёт золота у врагов -> нажмите второй раз для подтверждения (После 15 секунд, кнопка ResetStat вернётся)", "ru");
    mainGoldInfo.menuHelpButton_stat.SetTip("SOON", "en");
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
            if (enemyHeroes.length) {
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
                mainGoldInfo.bountyCost = (36 + (9 * Number((gameTime / 300).toString().split('.', 1)[0])));
                if (Number((gameTime / 60).toFixed()) < 5) {
                    timeForGold = gameTime / 0.6;
                }
                else if (Number((gameTime / 60).toFixed()) >= 5) {
                    goldStage1 = gameTime / 0.6 * timeForGold;
                    timeForGold = gameTime * 1.76;
                }
                else if (Number((gameTime / 60).toFixed()) >= 22) {
                    goldStage2 = gameTime * 1.76 * timeForGold - goldStage1;
                    timeForGold = gameTime * 1.86;
                }
                else if (Number((gameTime / 60).toFixed()) >= 40) {
                    goldStage3 = gameTime * 1.86 * timeForGold - goldStage1 - goldStage2;
                    timeForGold = gameTime * 2;
                }
                else if (Number((gameTime / 60).toFixed()) >= 62) {
                    goldStage4 = gameTime * 2 * timeForGold - goldStage1 - goldStage2 - goldStage3;
                    timeForGold = gameTime * 2.13;
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
                        let BuyBackCost = 200 + (700 + timeForGold + mainGoldInfo.enemyList[index][2] + inventoryCost - goldStage1 - goldStage2 - goldStage3 - goldStage4) / 12;
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
                    let inventory = mainGoldInfo.enemyList[index][0].GetItems(false);
                    let inventoryCost = 0;
                    for (let itemInInv of inventory) {
                        inventoryCost += itemInInv.GetCost();
                    }
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
                            StatusBuyBack += ` (${(mainGoldInfo.enemyListBuyBackUsed[index][1] - GameRules.GetGameTime()).toFixed()})` + Locale === 'ru' ? 'сек' : 'sec';
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
            if (!killed || !attacker.IsHero() || attacker.IsSameTeam(mainGoldInfo.myHero))
                return;
            if (killed.IsCreep() && attacker.IsHero() && !mainGoldInfo.enemyList[GetIndexHeroInArray(attacker.GetEntityName())][5])
                addGoldHero(killed, attacker.GetEntityName());
            if (killed.IsCourier())
                addGoldHero(null, attacker.GetEntityName(), 25 + (5 * killed.GetCurrentLevel()), true);
            if (killed.IsTower()) {
                let Tower = killed.GetUnitName().replace('npc_dota_badguys_', '').replace('npc_dota_goodguys_', '').split('_');
                let goldFromTower = 0;
                for (let index = 0; index < Tower.length; index++) {
                    if (Tower[index] === 'tower1')
                        goldFromTower = RandomInt(75, 165);
                    else if (Tower[index] === 'tower2')
                        goldFromTower = RandomInt(95, 185);
                    else if (Tower[index] === 'tower3')
                        goldFromTower = RandomInt(115, 205);
                    else if (Tower[index] === 'tower4')
                        goldFromTower = RandomInt(135, 225);
                }
                addGoldHero(null, attacker.GetEntityName(), goldFromTower);
            }
            if (killed.IsStructure()) {
                let Structure = killed.GetUnitName().replace('npc_dota_badguys_', '').replace('npc_dota_goodguys_', '').split('_');
                let goldFromStructure = 0;
                let goldDestroyer = 0;
                for (let index = 0; index < Structure.length; index++) {
                    if (Structure[index] === 'melee') {
                        goldDestroyer = RandomInt(90, 135);
                        goldFromStructure = 155;
                    }
                    else if (Structure[index] === 'range') {
                        goldDestroyer = RandomInt(90, 135);
                        goldFromStructure = 90;
                    }
                    else if (Structure[index] === 'fillers') {
                        goldDestroyer = 68;
                    }
                    if (goldFromStructure)
                        addGoldHero(null, attacker.GetEntityName(), goldFromStructure, true);
                    if (goldDestroyer)
                        addGoldHero(null, attacker.GetEntityName(), goldDestroyer);
                }
                addGoldHero(null, attacker.GetEntityName(), goldFromStructure);
            }
        }
        if (event.name === 'dota_tower_kill') {
            if (mainGoldInfo.myTeam != event.GetInt('teamnumber'))
                addGoldHero(null, null, event.GetInt('gold'), true);
        }
        if (event.name === 'dota_player_kill') {
            if (event.GetInt('neutral') || event.GetInt('greevil'))
                return;
            EntityList.GetPlayersList().forEach((player) => {
                if (player.GetPlayerID() == event.GetInt('killer1_userid')) {
                    for (let var0 of mainGoldInfo.enemyList) {
                        if (!var0[0])
                            continue;
                        if (var0[0] == player.GetAssignedHero())
                            addGoldHero(null, player.GetAssignedHero().GetEntityName(), mainGoldInfo.bountyCost);
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
            if (event.entity.IsHero()) {
                for (let var0 of mainGoldInfo.enemyList) {
                    if (!var0[0])
                        continue;
                    if (var0[0].GetEntityName() === event.entity.GetEntityName())
                        addGoldHero(null, event.entity.GetEntityName(), mainGoldInfo.bountyCost);
                }
            }
        }
        if (event.name === 'hand_of_midas') {
            if (event.entityForModifiers.IsHero()) {
                if (GetIndexHeroInArray(event.entityForModifiers.GetEntityName()) >= 0) {
                    mainGoldInfo.enemyList[GetIndexHeroInArray(event.entityForModifiers.GetEntityName())][5] = true;
                    setTimeout(() => {
                        mainGoldInfo.enemyList[GetIndexHeroInArray(event.entityForModifiers.GetEntityName())][5] = false;
                    }, 66);
                }
                addGoldHero(null, event.entityForModifiers.GetEntityName(), 160);
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
                    }
                }
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
function addGoldHero(entity_killed, heroName, gold, all) {
    if (mainGoldInfo.enemyListLength == 0)
        return;
    let indexHero = -1;
    if (!all) {
        for (let index = 0; index < mainGoldInfo.enemyList.length; index++) {
            if (!mainGoldInfo.enemyList[index][0])
                continue;
            if (mainGoldInfo.enemyList[index][0].GetEntityName() === heroName) {
                indexHero = index;
                break;
            }
        }
        if (indexHero < 0 || indexHero > 4) {
            console.log('invalid indexHero: ' + indexHero);
            return;
        }
    }
    if (entity_killed) {
        if (entity_killed.IsSameTeam(mainGoldInfo.enemyList[indexHero][0]))
            return;
        let entName = entity_killed.GetModelName();
        let _name = entName.replace('models/creeps/', '').replace('.vmdl', '');
        let nameSplited = _name.split('/', 1);
        if (nameSplited[0] === 'lane_creeps') {
            addGoldCreeps(_name.replace('lane_creeps/', '').split('/'), mainGoldInfo.laneCreepList);
        }
        else if (nameSplited[0] === 'neutral_creeps') {
            addGoldCreeps(_name.replace('neutral_creeps/', '').split('/'), mainGoldInfo.neutralCreepList);
        }
        else if (nameSplited[0] === 'roshan') {
            addGoldRoshan();
        }
        else
            console.log('invalid splitName in GoldInfoScript: ' + nameSplited[0]);
    }
    if (gold) {
        if (all) {
            for (let var0 of mainGoldInfo.enemyList) {
                var0[2] += gold;
            }
        }
        else {
            mainGoldInfo.enemyList[indexHero][2] += gold;
        }
    }
    function addGoldCreeps(var1, var2) {
        for (let index in var2) {
            if (var1[var1.length - 1].replace('n_creep_', '').replace('neutral_creep_', '') === var2[index][0]) {
                mainGoldInfo.enemyList[indexHero][2] += var2[index][1];
            }
        }
    }
    function addGoldRoshan() {
        mainGoldInfo.enemyList[indexHero][2] += 245;
        for (let var0 of mainGoldInfo.enemyList) {
            var0[2] += 135;
        }
    }
}
function GetIndexHeroInArray(name) {
    for (let index = 0; index < mainGoldInfo.enemyList.length; index++) {
        if (!mainGoldInfo.enemyList[index][0])
            continue;
        if (mainGoldInfo.enemyList[index][0].GetEntityName() === name)
            return index;
    }
    return -1;
}
function fixButton() {
    mainGoldInfo.screenSize = Renderer.GetScreenSize();
    mainGoldInfo.posX = mainGoldInfo.screenSize[0] / 2;
    mainGoldInfo.posY = mainGoldInfo.screenSize[1] / 2;
    Config.WriteFloat("GoldInfo", "posX", mainGoldInfo.posX);
    Config.WriteFloat("GoldInfo", "posY", mainGoldInfo.posY);
}
function fixStat() {
    mainGoldInfo.menuHelpButton_stat.RemoveOption();
    mainGoldInfo.menuHelpButton_stat = Menu.AddButton(['Custom Scripts', 'Information', 'Gold Info', 'Help'], 'Confirm', () => { confirmAction(); });
    let time = 15;
    let updaterTip = setInterval(() => {
        time--;
    }, 1000);
    let timer = setTimeout(() => {
        mainGoldInfo.menuHelpButton_stat.RemoveOption();
        mainGoldInfo.menuHelpButton_stat = Menu.AddButton(['Custom Scripts', 'Information', 'Gold Info', 'Help'], 'Reset Stat', () => { fixStat(); });
        mainGoldInfo.menuHelpButton_stat.SetTip("Используйте, если хотите сбросить статистику у героев \nТак как данная кнопка может полностью сломать расчёт золота у врагов - нажмите второй раз для подтверждения (После 15 секунд, кнопка ResetStat вернётся)", "ru");
        mainGoldInfo.menuHelpButton_stat.SetTip("SOON", "en");
        clearInterval(updaterTip);
    }, 15000);
    function confirmAction() {
        clearTimeout(timer);
        clearInterval(updaterTip);
        mainGoldInfo.menuHelpButton_stat.RemoveOption();
        mainGoldInfo.menuHelpButton_stat = Menu.AddButton(['Custom Scripts', 'Information', 'Gold Info', 'Help'], 'Reset Stat', () => { fixStat(); });
        mainGoldInfo.menuHelpButton_stat.SetTip("Используйте, если хотите сбросить статистику у героев \nТак как данная кнопка может полностью сломать расчёт золота у врагов - нажмите второй раз для подтверждения (После 15 секунд, кнопка ResetStat вернётся)", "ru");
        mainGoldInfo.menuHelpButton_stat.SetTip("SOON", "en");
        mainGoldInfo.enemyList = [
            [null, 0, 0, 0, false, false, null],
            [null, 0, 0, 0, false, false, null],
            [null, 0, 0, 0, false, false, null],
            [null, 0, 0, 0, false, false, null],
            [null, 0, 0, 0, false, false, null]
        ];
        mainGoldInfo.enemyListBuyBackUsed = [[false, 0], [false, 0], [false, 0], [false, 0], [false, 0]];
        let tmpArray1 = [
            [-1, 0, 0, 0, false, false, null],
            [-1, 0, 0, 0, false, false, null],
            [-1, 0, 0, 0, false, false, null],
            [-1, 0, 0, 0, false, false, null],
            [-1, 0, 0, 0, false, false, null]
        ];
        mainGoldInfo.CFG.Save('UsersData', JSON.stringify(tmpArray1));
        mainGoldInfo.CFG.Save('UserDataPart2', JSON.stringify(mainGoldInfo.enemyListBuyBackUsed));
    }
}
function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
;
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