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

/***/ "./src/goldInfo.ts":
/*!*************************!*\
  !*** ./src/goldInfo.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

let GoldInfoScript = {};
var mainGoldInfo;
(function (mainGoldInfo) {
    mainGoldInfo.gameStart = false;
    mainGoldInfo.menuEnable = false;
    mainGoldInfo.menuCanPanelMove = false;
    mainGoldInfo.menuPanelSettings_aplha = 255;
    mainGoldInfo.canMove = false;
    mainGoldInfo.posX = Config.ReadFloat("GoldInfo", "posX", Renderer.GetScreenSize()[0] / 2);
    mainGoldInfo.posY = Config.ReadFloat("GoldInfo", "posY", Renderer.GetScreenSize()[1] / 2);
    mainGoldInfo.myTeam = 0;
    mainGoldInfo.bountyCost = 36;
    mainGoldInfo.enemyList = [[null, 0, 0, null], [null, 0, 0, null], [null, 0, 0, null], [null, 0, 0, null], [null, 0, 0, null]];
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
        ['golem_b', 62], ['thunder_lizard_big', 67], ['thunder_lizard_small', 47], ['black_dragon', 122], ['black_drake', 32]
    ];
    mainGoldInfo.laneCreepList = [
        ['creep_bad_melee', 38], ['radiant_melee', 38], ['lane_dire_ranged', 53], ['radiant_ranged', 53],
        ['radiant_melee_mega', 22], ['radiant_ranged_mega', 22], ['creep_bad_melee_mega', 24], ['lane_dire_ranged_mega', 24]
    ];
    let menuEnableLabel = Menu.AddToggle(['Information', 'Gold Info'], 'EnableMain', false).SetNameLocale("ru", "Включить").SetNameLocale("en", "Enabled");
    Menu.GetFolder(["Information", "Gold Info"]).SetTip("Сделано: no_frfa\nДанный скрипт будет выводить ВОЗМОЖНОЕ количество золота у вражеских героев\nНа данный момент скрипт учитывает:\n-Убитых крипов\n-Убийство рошана\n-Периодическое золото\n-Ломание вышек(Частично)", "ru");
    Menu.GetFolder(['Information', 'Gold Info']).SetTip('Made by: no_frfa\nsoon', "en");
    menuEnableLabel.OnChange(state => { mainGoldInfo.menuEnable = state.newValue; });
    mainGoldInfo.menuEnable = menuEnableLabel.GetValue();
    let menuCanPanelMoveLabel = Menu.AddToggle(['Information', 'Gold Info'], 'MovePanel', true).SetNameLocale("ru", "Перемещение панели").SetNameLocale("en", "Moving the panel");
    menuCanPanelMoveLabel.SetTip("Перемещение панели 'Gold Info' при зажатии Ctrl+ЛКМ", "ru");
    menuCanPanelMoveLabel.SetTip("Moving the 'Gold Info' panel when holding Ctrl + LMB", "en");
    menuCanPanelMoveLabel.OnChange(state => { mainGoldInfo.menuCanPanelMove = state.newValue; });
    mainGoldInfo.menuCanPanelMove = menuCanPanelMoveLabel.GetValue();
    let menuHelpButton = Menu.AddButton(['Information', 'Gold Info'], 'Reset Panel Pos', resetPanelPos);
    menuHelpButton.SetTip("Перемещает панель в центр экрана", "ru");
    menuHelpButton.SetTip("Moves the panel to the center of the screen", "en");
    let menuPanelSettingsLabel_alpha = Menu.AddSlider(['Information', 'Gold Info'], `PanelTransparency`, 0, 255, 255, 1);
    menuPanelSettingsLabel_alpha.SetTip('Управляет прозрачностью панели', "ru");
    menuPanelSettingsLabel_alpha.SetTip('Controls the transparency of the panel', "en");
    menuPanelSettingsLabel_alpha.OnChange(state => { mainGoldInfo.menuPanelSettings_aplha = state.newValue; });
    mainGoldInfo.menuPanelSettings_aplha = menuPanelSettingsLabel_alpha.GetValue();
    let Load;
    (function (Load) {
        function Init() {
            if (GameRules.IsActiveGame()) {
                mainGoldInfo.gameStart = true;
                mainGoldInfo.myHero = EntitySystem.GetLocalHero();
                mainGoldInfo.myTeam = mainGoldInfo.myHero.GetTeamNum();
                mainGoldInfo.myPlayer = EntitySystem.GetLocalPlayer();
            }
            if (!mainGoldInfo.myHero || !mainGoldInfo.myHero.IsExist() || mainGoldInfo.myHero.GetUnitName() == null) {
                mainGoldInfo.gameStart = false;
                return;
            }
        }
        Load.Init = Init;
    })(Load = mainGoldInfo.Load || (mainGoldInfo.Load = {}));
})(mainGoldInfo || (mainGoldInfo = {}));
GoldInfoScript.OnDraw = () => {
    if (mainGoldInfo.gameStart && mainGoldInfo.menuEnable) {
        Renderer.SetDrawColor(43, 43, 58, mainGoldInfo.menuPanelSettings_aplha);
        Renderer.DrawFilledRect(mainGoldInfo.posX, mainGoldInfo.posY, 88, 34 * mainGoldInfo.enemyListLength, 0, Enum.ContentAlign.CenterXBottom);
        Renderer.SetDrawColor(37, 69, 88, mainGoldInfo.menuPanelSettings_aplha);
        Renderer.DrawFilledRect(mainGoldInfo.posX, mainGoldInfo.posY, 88, 18, 0, Enum.ContentAlign.CenterXTop);
        Renderer.SetDrawColor(244, 245, 246, mainGoldInfo.menuPanelSettings_aplha);
        Renderer.DrawOutlineRect(mainGoldInfo.posX, mainGoldInfo.posY, 90, 34 * mainGoldInfo.enemyListLength, 0, Enum.ContentAlign.CenterXBottom);
        Renderer.DrawOutlineRect(mainGoldInfo.posX, mainGoldInfo.posY + 1, 90, 20, 0, Enum.ContentAlign.CenterXTop);
        Renderer.SetDrawColor(255, 255, 255, mainGoldInfo.menuPanelSettings_aplha);
        Renderer.DrawText(mainGoldInfo.mainFont, mainGoldInfo.posX, mainGoldInfo.posY - 1, `Gold Panel`, 0, Enum.ContentAlign.CenterXTop);
        for (let index = 0; index < mainGoldInfo.enemyListLength; index++) {
            Renderer.SetDrawColor(255, 255, 255, 255);
            Renderer.DrawImage(mainGoldInfo.enemyList[index][3], mainGoldInfo.posX - 20, mainGoldInfo.posY + 17 + (34 * index), 24, 23, 0, Enum.ContentAlign.CenterXY);
            Renderer.DrawText(mainGoldInfo.mainFont, mainGoldInfo.posX - 5, mainGoldInfo.posY + 16 + (34 * index), `${mainGoldInfo.enemyList[index][1].toFixed()}`, 0, Enum.ContentAlign.LeftCenterY);
            Renderer.SetDrawColor(255, 215, 0, mainGoldInfo.menuPanelSettings_aplha);
            Renderer.DrawOutlineRect(mainGoldInfo.posX, mainGoldInfo.posY + 3 + (34 * index), 82, 28, 0, Enum.ContentAlign.CenterXBottom);
        }
    }
};
GoldInfoScript.OnUpdate = () => {
    if (Engine.OnceAt(60, true))
        mainGoldInfo.screenSize = Renderer.GetScreenSize();
    if (mainGoldInfo.gameStart && mainGoldInfo.menuEnable) {
        let heroes = EntitySystem.GetHeroesList();
        let enemyList = mainGoldInfo.enemyList;
        let enemyHeroes = [];
        for (let hero of heroes) {
            if (!hero.IsSameTeam(mainGoldInfo.myHero) && !hero.IsIllusion() && !hero.IsMeepoClone()) {
                enemyHeroes.push(hero);
            }
        }
        for (let index = 0; index < enemyHeroes.length; index++) {
            enemyList[index][0] = enemyHeroes[index];
            enemyList[index][1] = 0;
            enemyList[index][3] = enemyHeroes[index].GetImage(true);
        }
        if (GameRules.GetGameState() === Enum.GameState.GAME_IN_PROGRESS && !GameRules.IsPaused()) {
            let gameTime = Number((GameRules.GetGameTime() - GameRules.GetPreGameStartTime()).toFixed());
            let timeForGold = 0.6;
            let goldStage1 = 0;
            let goldStage2 = 0;
            let goldStage3 = 0;
            let goldStage4 = 0;
            mainGoldInfo.bountyCost = 36 + (9 * Number((gameTime / 300).toFixed()));
            if (gameTime / 60 >= 5) {
                goldStage1 = gameTime / 0.6 * timeForGold;
                timeForGold = 1.76;
            }
            else if (gameTime / 60 >= 22) {
                goldStage2 = gameTime / 0.6 * timeForGold - goldStage1;
                timeForGold = 1.86;
            }
            else if (gameTime / 60 >= 40) {
                goldStage3 = gameTime / 0.6 * timeForGold - goldStage1 - goldStage2;
                timeForGold = 2;
            }
            else if (gameTime / 60 >= 62) {
                goldStage4 = gameTime / 0.6 * timeForGold - goldStage1 - goldStage2 - goldStage3;
                timeForGold = 2.13;
            }
            let goldTick = gameTime / 0.6 * timeForGold;
            if (enemyHeroes.length > 0) {
                let heroesSize = 0;
                for (let heroOfList of enemyList) {
                    if (heroOfList[0] == null)
                        continue;
                    heroesSize++;
                    let inventory = heroOfList[0].GetItems(false);
                    let inventoryCost = 0;
                    for (let itemInInv of inventory) {
                        inventoryCost += itemInInv.GetCost();
                    }
                    heroOfList[1] = 600 + goldTick + heroOfList[2] - inventoryCost - goldStage1 - goldStage2 - goldStage3 - goldStage4;
                }
                console.log(enemyList[2][2] + ' - ' + mainGoldInfo.bountyCost);
                mainGoldInfo.enemyListLength = heroesSize;
            }
        }
        if (mainGoldInfo.menuCanPanelMove &&
            Input.IsCursorInRect(mainGoldInfo.posX, mainGoldInfo.posY, 88, 34 * mainGoldInfo.enemyListLength, Enum.ContentAlign.CenterXBottom) &&
            Input.IsCursorInRect(mainGoldInfo.posX, mainGoldInfo.posY, 88, 18, Enum.ContentAlign.CenterXTop) ||
            Input.IsKeyDown(Enum.ButtonCode.KEY_LCONTROL) &&
                Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT)) {
            mainGoldInfo.canMove = true;
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
    else {
        mainGoldInfo.enemyListLength = 0;
    }
};
GoldInfoScript.OnFireEvent = (event) => {
    if (event.name === 'entity_killed') {
        let attacker = EntityList.GetByIndex(event.GetInt('entindex_attacker'));
        let killed = EntityList.GetByIndex(event.GetInt('entindex_killed'));
        if (!attacker.IsSameTeam(mainGoldInfo.myHero) && attacker.GetEntityName().replace('npc_dota_hero_', 'ISHERO_').split('_')[0] === 'ISHERO')
            addGoldHero(killed, attacker.GetEntityName());
    }
    if (event.name === 'dota_tower_kill') {
        let killer = EntityList.GetByIndex(event.GetInt('killer_userid'));
        if (killer.GetTeamNum() != event.GetInt('teamnumber'))
            addGoldHero(null, killer.GetEntityName(), event.GetInt('gold'), true);
    }
};
GoldInfoScript.OnParticleCreate = (event) => {
    let enemyList = mainGoldInfo.enemyList;
    if (event.entity == null || mainGoldInfo.enemyListLength == 0)
        return;
    if (event.name === 'rune_bounty_owner' && event.entity.GetEntityName().replace('npc_dota_hero_', 'ISHERO_').split('_')[0] === 'ISHERO') {
        for (let index = 0; index < enemyList.length; index++) {
            if (enemyList[index][0].GetEntityName() === event.entity.GetEntityName()) {
                addGoldHero(null, event.entity.GetEntityName(), mainGoldInfo.bountyCost);
            }
        }
    }
};
GoldInfoScript.OnGameEnd = () => {
    mainGoldInfo.gameStart = false;
    mainGoldInfo.enemyListLength = 0;
    mainGoldInfo.enemyList = [[null, 0, 0, null], [null, 0, 0, null], [null, 0, 0, null], [null, 0, 0, null], [null, 0, 0, null]];
    mainGoldInfo.myHero = null;
};
GoldInfoScript.OnScriptLoad = GoldInfoScript.OnGameStart = mainGoldInfo.Load.Init;
function addGoldHero(entity_killed, heroName, gold, all) {
    let enemyList = mainGoldInfo.enemyList;
    let indexHero = 2783156;
    if (mainGoldInfo.enemyListLength == 0)
        return;
    for (let index = 0; index < enemyList.length; index++) {
        if (enemyList[index][0].GetEntityName() === heroName) {
            indexHero = index;
        }
    }
    if (indexHero == 2783156 || indexHero > 4) {
        console.log('invalid indexHero: ' + indexHero);
        return;
    }
    if (entity_killed != null) {
        let entName = entity_killed.GetModelName();
        let _name = entName.replace('models/creeps/', '').replace('.vmdl', '');
        let nameSplited = _name.split('/', 1);
        if (entity_killed.IsSameTeam(enemyList[indexHero][0]))
            return;
        if (entity_killed.GetEntityName() === 'npc_dota_roshan')
            addGoldRoshan();
        if (nameSplited[0] === 'lane_creeps') {
            addGoldCreeps(_name.replace('lane_creeps/', '').split('/'), mainGoldInfo.laneCreepList);
        }
        else if (nameSplited[0] === 'neutral_creeps') {
            addGoldCreeps(_name.replace('neutral_creeps/', '').split('/'), mainGoldInfo.neutralCreepList);
        }
        else
            console.log('invalid splitName in GoldInfoScript: ' + nameSplited[0]);
    }
    if (gold) {
        if (all) {
            for (let var0 of enemyList) {
                var0[2] += gold;
            }
        }
        else {
            enemyList[indexHero][2] += gold;
        }
    }
    function addGoldCreeps(var1, var2) {
        for (let index in var2) {
            if (var1[var1.length - 1] === var2[index][0]) {
                enemyList[indexHero][2] += var2[index][1];
            }
        }
    }
    function addGoldRoshan() {
        enemyList[indexHero][2] += 245;
        for (let var0 of enemyList) {
            var0[2] += 200;
        }
    }
    function addGold(gold, indexHero1) {
        enemyList[indexHero1][2] += gold;
    }
}
function resetPanelPos() {
    mainGoldInfo.posX = mainGoldInfo.screenSize[0] / 2;
    mainGoldInfo.posY = mainGoldInfo.screenSize[1] / 2;
    Config.WriteFloat("GoldInfo", "posX", mainGoldInfo.posX);
    Config.WriteFloat("GoldInfo", "posY", mainGoldInfo.posY);
}
RegisterScript(GoldInfoScript);


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/goldInfo.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\goldInfo.ts */"./src/goldInfo.ts");


/***/ })

/******/ });