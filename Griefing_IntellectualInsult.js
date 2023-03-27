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

/***/ "./src/Griefing_IntellectualInsult.ts":
/*!********************************************!*\
  !*** ./src/Griefing_IntellectualInsult.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let Griefing_IntellectualInsult = {};
var intellectualInsult;
(function (intellectualInsult) {
    const path = ['Custom Scripts', 'Griefing'];
    let myHero, myPlayer;
    let ENABLE = Menu.AddToggle([...path, 'Intellectual Insult'], 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange(state => {
        ENABLE = state.newValue;
    })
        .GetValue();
    let ENABLE_Kill = Menu.AddToggle([...path, 'Intellectual Insult'], 'Send when killing', false)
        .SetNameLocale('ru', 'Отправлять при убийстве')
        .OnChange(state => {
        ENABLE_Kill = state.newValue;
    })
        .GetValue();
    let ENABLE_Die = Menu.AddToggle([...path, 'Intellectual Insult'], 'Send at death', false)
        .SetNameLocale('ru', 'Отправлять при смерти')
        .OnChange(state => {
        ENABLE_Die = state.newValue;
    })
        .GetValue();
    let Bind_AllChat = Menu.AddKeyBind([...path, 'Intellectual Insult'], 'Bind (All Chat)', Enum.ButtonCode.KEY_NONE).SetNameLocale('ru', 'Бинд (общий чат)');
    let Bind_AllyChat = Menu.AddKeyBind([...path, 'Intellectual Insult'], 'Bind (Ally Chat)', Enum.ButtonCode.KEY_NONE).SetNameLocale('ru', 'Бинд (союзный чат)');
    Menu.GetFolder([...path, 'Intellectual Insult']).SetOrdering(-1);
    Griefing_IntellectualInsult.OnUpdate = () => {
        if (!myHero || !ENABLE)
            return;
        if (Bind_AllChat.IsKeyDownOnce()) {
            SendPhrases();
        }
        if (Bind_AllyChat.IsKeyDownOnce()) {
            SendPhrases(true);
        }
    };
    Griefing_IntellectualInsult.OnFireEvent = (e) => {
        if (!myHero || !ENABLE)
            return;
        if (e.name == 'dota_player_kill') {
            if (ENABLE_Kill && myPlayer.GetPlayerID() == e.GetInt('killer1_userid')) {
                SendPhrases();
            }
            if (ENABLE_Die && myPlayer.GetPlayerID() == e.GetInt('victim_userid')) {
                SendPhrases();
            }
        }
    };
    Griefing_IntellectualInsult.OnScriptLoad = Griefing_IntellectualInsult.OnGameStart = () => {
        myHero = EntitySystem.GetLocalHero();
        if (myHero) {
            myPlayer = EntitySystem.GetLocalPlayer();
        }
    };
    Griefing_IntellectualInsult.OnGameEnd = () => {
        myHero = null;
    };
    RegisterScript(Griefing_IntellectualInsult);
    function SendPhrases(allyChat = false, index = null) {
        Chat.Say(allyChat ? 'DOTAChannelType_GameAllies' : 'DOTAChannelType_GameAll', intellectualPhrases[index ? index : Math.floor(Math.random() * intellectualPhrases.length)]);
    }
    let intellectualPhrases = [
        'У меня есть все основания составить о вас дурное мнение.',
        'Вы думаете, мерзкий грубиян, что вы всегда так же нагло будете себя со мною держать.',
        'Окаянный мерзавец, ибо вы, точно, мерзавец, коли язык ваш коснулся несравненной Дульсинеи.',
        'Чтобы шокировать меня, тебе придётся сказать что-нибудь, ну, очень умное.',
        'Тебя, наверное, на спор зачали.',
        'Если ты выглядишь, как свинья, то это не значит, что нужно вести себя соответственно.',
        'Ты продолжай. Я всегда зеваю, когда мне интересно.',
        'Слушай… Я тут увидел кое-что. Твои глаза похожи на двух призывников. Один косит, второй реально голубой.',
        'Не бойся, я ничего не буду с тобой делать. Сейчас за издевательства над животными можно и срок получить.',
        'Гляжу на тебя и понимаю — у Бога хорошее чувство юмора.',
        'Что-то ты нервный стал. Может быть, тебе съездить куда-нибудь? Например, в челюсть.',
        'Не хочешь заняться спасением природы? У меня есть знакомый хирург, он может тебя стерилизовать.',
        'В тебе есть всего одна хорошая черта. Она делит твою задницу на две равные части.',
        'Решил меня осадить? А сохраниться перед этим не забыл?',
        'Жалость унижает человека, поэтому жалеть я тебя не стану.',
        'Ты напоминаешь мне океан. Меня уже начало тошнить.',
        'Как ты со мной разговариваешь? Где ты эти слова взял? На городской свалке, что ли?',
        'Твоего ума хватит, только чтобы из семечек делать кожурки.',
        'Я тут договорился с работником кунсткамеры. Он сказал, что пустит тебя туда и при жизни.',
        'Правило делаешь, что хихикаешь. С твоими зубами смеяться нельзя.',
        'Ха-ха. Как смешно. Да ты же настоящий тролль.',
        'Слушай тут что-то завоняло, неужели это от твоего словесного поноса?',
        'Как я понял, наличие мозга — не показатель высокого интеллекта.',
        'Чё, наточил топор своей тупости и теперь хвастаешься?',
        'Тебя как послать? Честно или интеллигентно?',
        'Знаешь, как опасен униженный человек? Давай покажу на твоём примере.',
        'Это была шутка? Ну, тогда продолжай.',
        'Ты прям как кот. Нагадил и в кусты.',
        'Прикольно двигаешь ртом. А-а-а… Это ты так говоришь.',
        'Да, сарказм — не для тебя.',
        'Я верю в силу человеческой личности, но ты, видно, не личность.',
        'Тебя мама в детстве не обнимала? Иди обниму.',
        'Тупость и грубость — синонимы тебя.',
        'Я бы послал тебя, но вижу — ты уже оттуда.',
        'Тобой в детстве бабайку не пугали?',
        'Из положительных качеств у тебя только «резус-фактор».',
        'Что, словесная нефтескважина иссякла?',
        'Думаешь, если будешь громче на меня орать, я буду тише слушать?',
        'Твой базарный диалект напоминает мне разговоры из далёких девяностых 20-го века.',
        'Когда Бог создавал тебя, ты оказался последним в очереди.',
        'Ничего не понял, питекантроп социально неадаптированный?',
        'Я бы объяснил тебе, что к чему, но твой мозг не вместит столько информации.',
        'Мне кажется, ты не выглядишь на свой возраст. Ты выглядишь на 500 рублей в час.',
        'Тюльпань отсюда, а то как загеоргиню, обсеренишься!',
        'Не трогай мои достоинства своими недостатками.',
        'Ещё один гудок с твоей платформы и твой зубной состав тронется.',
        'Я мненью твоему вращенье предавал. А осью был мой детородный орган.',
        'Ты похож на абонента.',
        'Я думаю, больно, когда в голову приходят такие мысли.',
        'У тебя родители не физики? А то выглядишь как неудавшийся научный эксперимент.',
        'Тебе следует пойти в зоопарк, ты там не особо будешь выделяться.',
        'У меня есть один недостаток: я не умею общаться с дураками.',
        'Ты живое доказательство того, что человек может жить без мозгов!',
        'Я не смеюсь над теми, над кем Бог уже поугарал.',
        'Только не надо улыбаться, я с детства боюсь коней.',
        'Я на тебя не обижаюсь. У меня сосед — тоже идиот.',
        'Ты часом не Баран по гороскопу?',
        'Ты любишь природу, несмотря на то, что она с тобой сотворила?',
        'Толку мне тебя посылать. Ты и так бываешь там чаще, чем на улице.',
        'Тебе пришла в голову мысль? Наверное, чтобы умереть там окончательно.',
        'А ты такой дерзкий, как понос резкий.',
        'Твои родители когда-нибудь просили тебя убежать из дома?',
        'Родился ты назло презервативу.',
        'А мне твой рот, ларёк круглосуточный напоминает: всегда открыт и внутри женщина хамоватая сидит.',
        'Не волнуйся, когда-нибудь ты скажешь что-нибуть смешное.',
        'Я знаю, вы родились глупым, но почему у вас рецидив?',
        'В книге «Кто есть кто» вас следует искать как «Что Это»?',
        'Извините, Вы сейчас нахамили, или просто использовали в своей речи длинные слова, смысл которых Вам не ясен.',
        'Уже уходите? А почему так неспешно?',
        'Я слишком занятой человек, чтобы обращать внимание на ваши комплексы.',
        'Шокируйте меня, скажите наконец-то хоть что-нибудь умное.',
        'Похоже, у вас так и не прошел юношеский максимализм.',
        'Вам бы почаще молчать, за умного сошли бы.',
        'Надеюсь, что вы не всегда так глупы, а лишь сегодня.',
        'Увы, красотой тебе мир не спасти. Впрочем, и умом тоже.',
        'Только глядя на тебя, я могу поверить, что человек реально произошел от обезьяны.',
        'Не переживай, возможно, однажды и ты скажешь что-то умное.',
        'Совсем всё туго? Ну, попробуй хотя бы костным мозгом раскинуть.',
        'Правду говорят, что мозг – это еще не все. В твоем случае это и вовсе ничего.',
        'На кого шуршишь, пакетик?',
        'Чтоб тебе по телевизору одна реклама шла.',
        'Греби ушами в камыши.',
        'Выкидышь пробирочный из Чернобыля получившийся методом научного самотыка посредством палки с гвоздём.',
        'Тело, зачатое силикатным клеем в телефонной будке.',
        'Ты что, потерял список, кого бояться надо???',
        'Иди ёжиков паси, павлин местный!',
        'Унитаз на лыжах.',
        'Твикс без палочки.',
        'Не по сезону шуршишь, барыга!!!',
        'Горшок с ручкой вовнутрь.',
        'Что ты меня пингуешь как ламера ты мастдай не допаченный.'
    ];
})(intellectualInsult || (intellectualInsult = {}));


/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/Griefing_IntellectualInsult.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/Griefing_IntellectualInsult.ts */"./src/Griefing_IntellectualInsult.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dyaWVmaW5nX0ludGVsbGVjdHVhbEluc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdEQUFnRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6IiJ9