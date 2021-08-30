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

/***/ "./src/CentaurCombo.ts":
/*!*****************************!*\
  !*** ./src/CentaurCombo.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __webpack_require__(/*! ./libs/lib */ "./src/libs/lib.ts");
let CentaurWarrunner_Combo = {};
var centaurCombo_Custom;
(function (centaurCombo_Custom) {
    let [myHero, myPlayer, comboTarget, particle] = [null, null, null, null];
    let gameStarted = false;
    let [stompCasted, abyssalCasted, hexCasted, fallenCasted, machinaCasted] = [false, false, false, false, false];
    let [stompTime, abyssalTime] = [-1, -1, -1];
    let enemyList = [];
    const [path, pathSettings] = [
        ['Custom Scripts', 'Heroes', 'Strength', 'Centaur Warrunner'],
        ['Custom Scripts', 'Heroes', 'Strength', 'Centaur Warrunner', 'Settings Combo']
    ];
    const item_Images = [
        'item_soul_ring', 'item_armlet', 'item_mjollnir', 'item_blink', 'item_abyssal_blade', 'item_fallen_sky',
        'item_glimmer_cape', 'item_manta', 'item_illusionsts_cape', 'item_demonicon', 'item_sheepstick', 'item_orchid',
        'item_bloodthorn', 'item_nullifier', 'item_rod_of_atos', 'item_gungir', 'item_diffusal_blade', 'item_bullwhip',
        'item_ethereal_blade', 'item_dagon_5', 'item_heavens_halberd', 'item_veil_of_discord', 'item_urn_of_shadows', 'item_spirit_vessel',
        'item_medallion_of_courage', 'item_solar_crest', 'item_pipe', 'item_hood_of_defiance', 'item_eternal_shroud', 'item_lotus_orb',
        'item_black_king_bar', 'item_minotaur_horn', 'item_essence_ring', 'item_blade_mail', 'item_shivas_guard', 'item_crimson_guard',
        'item_ancient_janggo', 'item_ex_machina', 'item_mask_of_madness'
    ];
    const abilities = ['centaur_hoof_stomp', 'centaur_double_edge', 'centaur_stampede'];
    const linkBreakers = [
        'item_psychic_headband', 'item_force_staff', 'item_hurricane_pike', 'item_cyclone', 'item_wind_waker', 'item_paintball',
        'centaur_double_edge', 'item_dagon_5', 'item_nullifier', 'item_rod_of_atos', 'item_orchid', 'item_bloodthorn', 'item_abyssal_blade',
        'item_diffusal_blade', 'item_heavens_halberd', 'item_ethereal_blade', 'item_sheepstick'
    ];
    let menu_Enable = Menu.AddToggle(path, 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange(state => {
        menu_Enable = state.newValue;
    })
        .GetValue();
    let menu_ComboKey = Menu.AddKeyBind(path, 'Key', Enum.ButtonCode.KEY_NONE)
        .SetNameLocale('ru', 'Бинд комбо');
    let menu_SearchRadius = Menu.AddSlider(pathSettings, `Search Radius`, 100, 1500, 800, 50)
        .SetNameLocale('ru', 'Радиус поиска цели')
        .OnChange(state => {
        menu_SearchRadius = state.newValue;
    })
        .GetValue();
    let menu_TargetLock = Menu.AddToggle(pathSettings, 'Lock target', true)
        .SetNameLocale('ru', 'Захватывать цель')
        .OnChange(state => {
        menu_TargetLock = state.newValue;
    })
        .GetValue();
    let menu_InBM = Menu.AddToggle(pathSettings, 'Dont Cast In BM', false)
        .SetNameLocale('ru', 'Не кастовать в Обратку')
        .SetImage(lib_1.GetImagesPath('item_blade_mail'))
        .OnChange(state => {
        menu_InBM = state.newValue;
    })
        .GetValue();
    let menu_ItemsList = lib_1.CreateMultiSelect(path, 'Items', item_Images, true, [{ language: 'ru', translate: 'Предметы' }]);
    let menu_AbilitiesList = lib_1.CreateMultiSelect(path, 'Abilities', abilities, true, [{
            language: 'ru',
            translate: 'Способности'
        }]);
    let menu_DoubleEdgeMinHp = Menu.AddSlider(path, `After which % hp do not use Double Edge`, 0, 80, 20, 1)
        .SetNameLocale('ru', 'После какого % хп не использовать Double Edge')
        .SetTip('0 - No limit', 'en')
        .SetTip('0 - Без ограничения', 'ru')
        .SetImage(lib_1.GetImagesPath('centaur_double_edge'))
        .OnChange(state => {
        menu_DoubleEdgeMinHp = state.newValue;
    })
        .GetValue();
    let menu_LinkensItems = lib_1.CreatePrioritySelect([...path, 'Linkens Breaker Settings'], 'Linkens Breaker', linkBreakers, true, [{
            language: 'ru',
            translate: 'Сбитие линки'
        }]);
    Menu.SetImage(['Custom Scripts', 'Heroes'], '~/menu/40x40/heroes.png');
    Menu.SetImage(['Custom Scripts', 'Heroes', 'Strength'], '~/menu/40x40/strength.png');
    Menu.SetImage(path, 'panorama/images/heroes/icons/npc_dota_hero_centaur_png.vtex_c');
    Menu.GetFolder(pathSettings).SetNameLocale('ru', 'Настройки комбо');
    Menu.GetFolder([...path, 'Linkens Breaker Settings']).SetImage(lib_1.GetImagesPath('item_sphere'));
    CentaurWarrunner_Combo.OnScriptLoad = CentaurWarrunner_Combo.OnGameStart = () => {
        if (GameRules.IsActiveGame()) {
            myHero = EntitySystem.GetLocalHero();
            myPlayer = EntitySystem.GetLocalPlayer();
            gameStarted = true;
            enemyList = [];
        }
        if (!myHero || !myHero.IsExist() || myHero.GetUnitName() !== 'npc_dota_hero_centaur') {
            gameStarted = false;
            return;
        }
    };
    CentaurWarrunner_Combo.OnDraw = () => {
        if (gameStarted && menu_Enable) {
            if (comboTarget) {
                if (!particle) {
                    particle = Particle.Create('particles/ui_mouseactions/range_finder_tower_aoe.vpcf', Enum.ParticleAttachment.PATTACH_INVALID, comboTarget);
                    particle.SetControl(2, EntitySystem.GetLocalHero().GetAbsOrigin());
                    particle.SetControl(6, new Vector(1, 0, 0));
                    particle.SetControl(7, comboTarget.GetAbsOrigin());
                }
                else {
                    particle.SetControl(2, EntitySystem.GetLocalHero().GetAbsOrigin());
                    particle.SetControl(7, comboTarget.GetAbsOrigin());
                }
            }
            else {
                if (particle) {
                    particle.Destroy();
                    particle = null;
                }
            }
        }
    };
    CentaurWarrunner_Combo.OnUpdate = () => {
        if (gameStarted && menu_Enable) {
            if (enemyList.length < 5) {
                enemyList = [];
                let heroes = EntitySystem.GetHeroesList();
                if (heroes) {
                    for (let hero of heroes) {
                        if (hero && !hero.IsIllusion() && !hero.IsMeepoClone() && hero.IsHero() && hero.IsAlive() &&
                            !hero.IsDormant() && !hero.IsSameTeam(myHero)) {
                            enemyList.push(hero);
                        }
                    }
                }
            }
            if (menu_ComboKey.IsKeyDown() && Engine.OnceAt(0.2)) {
                let target = GetNearHeroInRadius(Input.GetWorldCursorPos());
                if (!menu_TargetLock) {
                    if (target && target.IsExist())
                        comboTarget = target;
                    else {
                        comboTarget = null;
                        SendOrderMovePos(Input.GetWorldCursorPos());
                    }
                }
                else {
                    if (!comboTarget && target && target.IsExist())
                        comboTarget = target;
                    else if (!comboTarget) {
                        comboTarget = null;
                        SendOrderMovePos(Input.GetWorldCursorPos());
                    }
                }
                if (comboTarget.HasModifier('modifier_item_blade_mail_reflect') && menu_InBM) {
                    SendOrderMovePos(Input.GetWorldCursorPos());
                    return;
                }
                if (comboTarget && comboTarget.IsExist()) {
                    let [linken, mirror] = [comboTarget.GetItem('item_sphere', true), comboTarget.GetItem('item_mirror_shield', false)];
                    if (linken && linken.CanCast() || mirror && mirror.CanCast()) {
                        let linkenBrokItems = menu_LinkensItems.GetValue();
                        for (let brokObj of linkenBrokItems) {
                            let vi = myHero.GetItem(brokObj, false);
                            if (vi) {
                                if (vi.IsExist() && CustomCanCast(vi)) {
                                    vi.CastTarget(comboTarget);
                                    break;
                                }
                            }
                            else {
                                let abil = myHero.GetAbility(brokObj);
                                if (abil && abil.IsExist() && abil.CanCast()) {
                                    abil.CastTarget(comboTarget);
                                    break;
                                }
                            }
                        }
                    }
                    let [centaur_hoof_stomp, centaur_double_edge, centaur_stampede] = [undefined, undefined, undefined];
                    let [edgeCasted, stampedeCasted] = [false, false];
                    if (menu_AbilitiesList.IsEnabled('centaur_hoof_stomp')) {
                        centaur_hoof_stomp = myHero.GetAbilityByIndex(0);
                        if (centaur_hoof_stomp.CanCast()) {
                            if (TargetInRadius(comboTarget, 330, myHero)) {
                                centaur_hoof_stomp.CastNoTarget();
                                stompCasted = true;
                                stompTime = GameRules.GetGameTime();
                            }
                            else
                                SendOrderMovePos(comboTarget.GetAbsOrigin());
                        }
                        else if (!centaur_hoof_stomp.CanCast()) {
                            stompCasted = true;
                        }
                    }
                    else
                        stompCasted = true;
                    if (menu_AbilitiesList.IsEnabled('centaur_double_edge')) {
                        centaur_double_edge = myHero.GetAbilityByIndex(1);
                        if (centaur_double_edge.CanCast()) {
                            if (menu_DoubleEdgeMinHp > 0) {
                                let percentHp = myHero.GetHealth() / myHero.GetMaxHealth() * 100;
                                if (percentHp >= menu_DoubleEdgeMinHp) {
                                    centaur_double_edge.CastTarget(comboTarget);
                                    edgeCasted = true;
                                }
                            }
                            else {
                                centaur_double_edge.CastTarget(comboTarget);
                                edgeCasted = true;
                            }
                        }
                        else
                            edgeCasted = true;
                    }
                    if (menu_AbilitiesList.IsEnabled('centaur_stampede')) {
                        centaur_stampede = myHero.GetAbilityByIndex(5);
                        if (centaur_stampede.CanCast()) {
                            if (TargetInRadius(comboTarget, 105, myHero))
                                centaur_stampede.CastNoTarget();
                        }
                        else
                            stampedeCasted = true;
                    }
                    for (let item of item_Images) {
                        let invItem = myHero.GetItem(item, false);
                        if (!invItem || !invItem.IsExist() || !menu_ItemsList.IsEnabled(invItem) || !CustomCanCast(invItem))
                            continue;
                        if (invItem.GetBehavior() & Enum.AbilityBehavior.DOTA_ABILITY_BEHAVIOR_UNIT_TARGET) {
                            if (invItem.GetTargetTeam() != myHero.GetTeamNum())
                                invItem.CastTarget(myHero);
                            else {
                                if (item === 'item_abyssal_blade') {
                                    if (GameRules.GetGameTime() - stompTime >= myHero.GetAbilityByIndex(0).GetLevelSpecialValueForFloat('stun_duration') + 0.6) {
                                        if (CustomCanCast(invItem))
                                            invItem.CastTarget(comboTarget);
                                        abyssalTime = GameRules.GetGameTime();
                                        abyssalCasted = true;
                                    }
                                }
                                else if (item === 'item_sheepstick') {
                                    let abyssal = myHero.GetItem('item_abyssal_blade', true);
                                    if (abyssal && abyssalCasted) {
                                        if (menu_ItemsList.IsEnabled(abyssal)) {
                                            if (!CustomCanCast(abyssal)) {
                                                if (GameRules.GetGameTime() - abyssalTime >= abyssal.GetLevelSpecialValueForFloat('stun_duration') - 0.6) {
                                                    if (CustomCanCast(invItem)) {
                                                        invItem.CastTarget(comboTarget);
                                                        hexCasted = true;
                                                    }
                                                    else
                                                        hexCasted = true;
                                                }
                                            }
                                        }
                                    }
                                    else if (!abyssal && stompCasted || abyssal && !abyssal.CanCast() && stompCasted) {
                                        if (GameRules.GetGameTime() - stompTime >= myHero.GetAbilityByIndex(0).GetLevelSpecialValueForFloat('stun_duration') + 0.4) {
                                            if (CustomCanCast(invItem)) {
                                                invItem.CastTarget(comboTarget);
                                                hexCasted = true;
                                            }
                                            else
                                                hexCasted = true;
                                        }
                                    }
                                }
                                else
                                    invItem.CastTarget(comboTarget);
                            }
                        }
                        if (invItem.GetBehavior() & Enum.AbilityBehavior.DOTA_ABILITY_BEHAVIOR_NO_TARGET) {
                            if (invItem.GetAOERadius()) {
                                if (TargetInRadius(comboTarget, invItem.GetAOERadius(), myHero))
                                    invItem.CastNoTarget();
                            }
                            if (!invItem.GetToggleState())
                                invItem.Toggle();
                            invItem.CastNoTarget();
                            continue;
                        }
                        if (invItem.GetBehavior() & Enum.AbilityBehavior.DOTA_ABILITY_BEHAVIOR_POINT) {
                            if (invItem.GetCastRange()) {
                                CastItemOnBestPos(invItem, comboTarget, myHero, invItem.GetCastRange(), invItem.GetAOERadius());
                            }
                            else if (invItem.GetAOERadius()) {
                                CastItemOnBestPos(invItem, comboTarget, myHero, invItem.GetAOERadius(), invItem.GetAOERadius());
                            }
                        }
                    }
                    if (menu_ItemsList.IsEnabled('item_blink')) {
                        let g_blink = () => {
                            for (let i = 0; i < 6; i++) {
                                let q = myHero.GetItemByIndex(+i);
                                if (q && q.IsExist() && q.GetName().endsWith('_blink')) {
                                    return q;
                                }
                            }
                        };
                        if (g_blink() && CustomCanCast(g_blink())) {
                            CastItemOnBestPos(g_blink(), comboTarget, myHero, g_blink().GetAOERadius(), g_blink().GetAOERadius());
                        }
                    }
                    if (menu_ItemsList.IsEnabled('item_dagon_5')) {
                        let g_dagon = () => {
                            for (let i = 0; i < 6; i++) {
                                let q = myHero.GetItemByIndex(+i);
                                if (q && q.IsExist() && q.GetName().startsWith('item_dagon')) {
                                    return q;
                                }
                            }
                        };
                        let dagon = g_dagon();
                        if (dagon && CustomCanCast(dagon) && TargetInRadius(comboTarget, dagon.GetAOERadius(), myHero)) {
                            dagon.CastTarget(comboTarget);
                        }
                    }
                    if (menu_ItemsList.IsEnabled('item_fallen_sky')) {
                        let fs = myHero.GetItem('item_fallen_sky', false);
                        if (fs && CustomCanCast(fs)) {
                            CastItemOnBestPos(fs, comboTarget, myHero, 630, 1200);
                            fallenCasted = true;
                        }
                        else
                            fallenCasted = true;
                    }
                    else
                        fallenCasted = true;
                    if (stompCasted && edgeCasted && stampedeCasted && fallenCasted) {
                        if (menu_ItemsList.IsEnabled('item_ex_machina')) {
                            let emach = myHero.GetItem('item_ex_machina', false);
                            if (emach && CustomCanCast(emach)) {
                                let [abyssal, hex] = [myHero.GetItem('item_abyssal_blade', true), myHero.GetItem('item_sheepstick', true)];
                                if (!abyssal) {
                                    abyssalCasted = true;
                                }
                                if (!hex) {
                                    hexCasted = true;
                                }
                                if (abyssalCasted && hexCasted) {
                                    emach.CastNoTarget();
                                    machinaCasted = true;
                                    abyssalCasted = false;
                                    hexCasted = false;
                                    fallenCasted = false;
                                }
                            }
                            else
                                machinaCasted = true;
                        }
                        if (menu_ItemsList.IsEnabled('item_mask_of_madness') && machinaCasted) {
                            let mask = myHero.GetItem('item_mask_of_madness', true);
                            if (mask && CustomCanCast(mask)) {
                                mask.CastNoTarget();
                            }
                        }
                    }
                    if (myHero.GetAbilityByIndex(5).CanCast()) {
                        SendOrderMovePos(comboTarget.GetAbsOrigin());
                    }
                    else {
                        myPlayer.PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_ATTACK_TARGET, comboTarget, null, null, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_CURRENT_UNIT_ONLY, myHero, false, true);
                    }
                }
            }
            else {
                comboTarget = null;
                let armlet = myHero.GetItem('item_armlet', true);
                if (armlet && menu_ItemsList.IsEnabled('item_armlet') && armlet.GetToggleState()) {
                    armlet.Toggle();
                }
            }
        }
    };
    function GetNearHeroInRadius(vector, radius = menu_SearchRadius) {
        let en = enemyList;
        if (en.length == 0)
            return undefined;
        let accessHero = Array(enemyList.length);
        en.forEach((object) => {
            if (object.GetAbsOrigin().Distance(vector) <= radius) {
                accessHero.push([object, object.GetAbsOrigin().Distance(vector)]);
            }
        });
        accessHero.sort((a, b) => {
            return (a[1] - b[1]);
        });
        return accessHero[0] ? accessHero[0][0] : undefined;
    }
    function GetFarHeroInRadius(sourceHero, radius) {
        let hr = enemyList;
        let ah = [];
        hr.forEach(aHero => {
            if (aHero != sourceHero)
                ah.push(aHero);
        });
        let filteredHeroes = [];
        ah.forEach((object) => {
            if (object.GetAbsOrigin().Distance(sourceHero.GetAbsOrigin()) <= radius) {
                filteredHeroes.push([object, object.GetAbsOrigin().Distance(sourceHero.GetAbsOrigin())]);
            }
        });
        filteredHeroes.sort((a, b) => {
            return (b[1] - a[1]);
        });
        return filteredHeroes[0] ? filteredHeroes[0][0] : undefined;
    }
    function CastItemOnBestPos(item, target, sourceHero, farRadius, itemCastRadius, teamType = Enum.TeamType.TEAM_ENEMY) {
        let farHero = GetFarHeroInRadius(target, farRadius);
        if (!farHero) {
            if (TargetInRadius(target, item.GetAOERadius(), sourceHero, teamType))
                item.CastPosition(target.GetAbsOrigin());
        }
        else if (farHero) {
            let bv = GetBestPost(target, farHero);
            if (bv.Distance(sourceHero.GetAbsOrigin()) <= itemCastRadius) {
                item.CastPosition(bv);
            }
            else {
                SendOrderMovePos(bv);
            }
        }
        else {
            if (TargetInRadius(target, item.GetAOERadius(), sourceHero, teamType)) {
                item.CastPosition(target.GetAbsOrigin());
            }
            else {
                SendOrderMovePos(target.GetAbsOrigin());
            }
        }
    }
    function TargetInRadius(target, radius, sourceHero, team = Enum.TeamType.TEAM_ENEMY) {
        let er = sourceHero.GetHeroesInRadius(radius, team);
        if (er) {
            for (let enemy of er) {
                if (enemy == target)
                    return true;
            }
        }
        return false;
    }
    function GetBestPost(hero1, hero2) {
        return comboTarget.GetAbsOrigin().add(new Vector(lib_1.Dist2D(hero1, hero2) / 2, 0, 0).Rotated(lib_1.GetAngleToPos(hero1, hero2)));
    }
    function SendOrderMovePos(vector) {
        myPlayer.PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION, null, vector, null, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_CURRENT_UNIT_ONLY, myHero, false, true);
    }
    function CustomCanCast(item) {
        let owner = item.GetOwner(), hasModf = owner.HasState(Enum.ModifierState.MODIFIER_STATE_MUTED)
            || owner.HasState(Enum.ModifierState.MODIFIER_STATE_STUNNED)
            || owner.HasState(Enum.ModifierState.MODIFIER_STATE_HEXED)
            || owner.HasState(Enum.ModifierState.MODIFIER_STATE_INVULNERABLE)
            || owner.HasState(Enum.ModifierState.MODIFIER_STATE_FROZEN)
            || owner.HasState(Enum.ModifierState.MODIFIER_STATE_FEARED)
            || owner.HasState(Enum.ModifierState.MODIFIER_STATE_TAUNTED);
        return item && !hasModf && owner.GetMana() >= item.GetManaCost() && item.IsCastable(owner.GetMana());
    }
    RegisterScript(CentaurWarrunner_Combo);
})(centaurCombo_Custom || (centaurCombo_Custom = {}));


/***/ }),

/***/ "./src/libs/lib.ts":
/*!*************************!*\
  !*** ./src/libs/lib.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RADIAN_TO_PI_KOEFF = 180 / Math.PI;
function GetImagesPath(name, full) {
    if (name.startsWith('item_')) {
        return `panorama/images/items/${name.slice(5)}_png.vtex_c`;
    }
    else if (name.startsWith('npc_dota_hero')) {
        if (full) {
            return `panorama/images/heroes/${name}_png.vtex_c`;
        }
        else {
            return `panorama/images/heroes/icons/${name}_png.vtex_c`;
        }
    }
    else if (name.startsWith('npc_dota_neutral')) {
        return `panorama/images/heroes/${name}_png.vtex_c`;
    }
    else {
        return `panorama/images/spellicons/${name}_png.vtex_c`;
    }
}
exports.GetImagesPath = GetImagesPath;
function CreateMultiSelect(path, name, iconsArray, default_value = true, translate) {
    let icons = [];
    for (let q of iconsArray) {
        icons.push(GetImagesPath(q));
    }
    let a = Menu.AddMultiSelect(path, name, icons, default_value);
    if (translate) {
        if (typeof translate === 'string') {
            a.SetNameLocale('ru', translate);
        }
        else {
            for (let q of translate) {
                // struct: array {"language", "translate"}
                a.SetNameLocale(q.language, q['translate']);
            }
        }
    }
    return {
        GetOption: () => {
            return a;
        },
        IsEnabled: (name) => {
            let n = name;
            if (typeof name === 'object') {
                if (name.GetEntityName()) {
                    n = name.GetEntityName();
                }
                if (name.GetName()) {
                    n = name.GetName();
                }
            }
            return a.GetValue()[iconsArray.indexOf(n)];
        }
    };
}
exports.CreateMultiSelect = CreateMultiSelect;
function CreatePrioritySelect(path, name, iconsArray, default_value = true, translate) {
    let icons = [];
    for (let q of iconsArray) {
        icons.push(GetImagesPath(q));
    }
    let a = Menu.AddPrioritySelect(path, name, icons, default_value);
    if (translate) {
        if (typeof translate === 'string') {
            a.SetNameLocale('ru', translate);
        }
        else {
            for (let q of translate) {
                // struct: array {"language", "translate"}
                a.SetNameLocale(q.language, q['translate']);
            }
        }
    }
    return {
        GetOption: () => {
            return a;
        },
        GetValue: () => {
            let t = [];
            for (let e of a.GetValue()) {
                t.push(iconsArray[e]);
            }
            return t;
        }
    };
}
exports.CreatePrioritySelect = CreatePrioritySelect;
function IsntUndefined(value, withfalse) {
    return withfalse ? (value !== false) : value !== undefined && value !== null;
}
function IsUndefined(value, withfalse) {
    return withfalse ? (value === false || !value) : (value !== false && !value);
}
exports.IsUndefined = IsUndefined;
function Dist2D(vec1, vec2) {
    if (vec1 && vec2) {
        let pos1 = (vec1.x ? (vec1) : (vec1.GetAbsOrigin ? (vec1.GetAbsOrigin()) : (0)));
        let pos2 = (vec2.x ? (vec2) : (vec2.GetAbsOrigin ? (vec2.GetAbsOrigin()) : (0)));
        return pos1 && pos2 && pos1.sub(pos2).Length2D();
    }
    return -1;
}
exports.Dist2D = Dist2D;
function GetAngleToPos(_e1, _e2, prefer = _e2, inrad) {
    let [a, b] = [IsntUndefined(_e1.x) ? _e1 : _e1.GetAbsOrigin(), IsntUndefined(_e2.x) ? _e2 : _e2.GetAbsOrigin()];
    if (prefer == _e1) {
        [a, b] = [b, a];
    }
    let atan2 = Math.atan2(b.y - a.y, b.x - a.x);
    return inrad ? atan2 : (atan2 * exports.RADIAN_TO_PI_KOEFF);
}
exports.GetAngleToPos = GetAngleToPos;
function GetBestPosition(units, MainEntity, range) {
    if (!units || !range) {
        return;
    }
    if (!(units.length > 0)) {
        return;
    }
    let enemyNum = units.length;
    if (enemyNum == 1) {
        return units[0].GetAbsOrigin();
    }
    let maxNum = 1;
    let bestPos = units[0].GetAbsOrigin();
    for (let i = 0; i < (enemyNum - 1); i++) {
        for (let j = i + 1; j < (enemyNum); j++) {
            if (units[i] && units[j]) {
                let pos1 = units[i].GetAbsOrigin();
                let pos2 = units[j].GetAbsOrigin();
                let mid = pos1.add(pos2).Scaled(0.5);
                let heroesNum = 0;
                for (let k = 0; k < enemyNum; k++) {
                    if (units[k].IsPositionInRange(mid, range, 0) && units[k].IsEntityInRange(MainEntity, range) && !units[k].IsDormant()) {
                        heroesNum = heroesNum + 1;
                    }
                }
                if (heroesNum > maxNum) {
                    maxNum = heroesNum;
                    bestPos = mid;
                }
            }
        }
    }
    return bestPos;
}
exports.GetBestPosition = GetBestPosition;
function GetHeroInRadiusWithPosition(Position, range, myHero, IsEnemy = true) {
    let hero_list = EntitySystem.GetHeroesList();
    let returnheroes = [];
    if (hero_list) {
        for (let i of hero_list) {
            if (i && !i.IsIllusion() && !i.IsMeepoClone() && i.IsHero() && i.IsAlive() && !i.IsDormant() && ((!i.IsSameTeam(myHero) && IsEnemy) || (IsEnemy === false && i.IsSameTeam(myHero))) && i.IsPositionInRange(Position, range, 0)) {
                returnheroes.push(i);
            }
        }
        return returnheroes;
    }
    return [];
}
exports.GetHeroInRadiusWithPosition = GetHeroInRadiusWithPosition;
function CustomCanCast(item) {
    let owner = item.GetOwner(), hasModf = owner.HasState(Enum.ModifierState.MODIFIER_STATE_MUTED)
        || owner.HasState(Enum.ModifierState.MODIFIER_STATE_STUNNED)
        || owner.HasState(Enum.ModifierState.MODIFIER_STATE_HEXED)
        || owner.HasState(Enum.ModifierState.MODIFIER_STATE_INVULNERABLE)
        || owner.HasState(Enum.ModifierState.MODIFIER_STATE_FROZEN)
        || owner.HasState(Enum.ModifierState.MODIFIER_STATE_FEARED)
        || owner.HasState(Enum.ModifierState.MODIFIER_STATE_TAUNTED);
    return item && !hasModf && owner.GetMana() >= item.GetManaCost() && item.IsCastable(owner.GetMana());
}
exports.CustomCanCast = CustomCanCast;


/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/CentaurCombo.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\CentaurCombo.ts */"./src/CentaurCombo.ts");


/***/ })

/******/ });