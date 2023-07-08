const installedVersionAntiError = '1.0.8';
var VersionChecker = {};
(function () {
    var PATH = ['Custom Scripts'];
    var PREFIX = '[no_FRFA scripts] ', CONTACT = ' Please contact the developer';
    var msg = function (text) {
        console.log(PREFIX + text);
    };
    var reqInfo = {
        ssl: true,
        onResolve: function (request) {
            clearInterval(interval);
            if (request.GetStatusCode() == 404) {
                UpdaterInfo.SetHidden(true);
                msg('Error 404.' + CONTACT);
                return;
            }
            var actualVer = request.GetBody().split('\n')[0].match(/(\d+\.\d+\.\d+)/)[1];
            msg('------------- Checking versions');
            msg('Installed version - ' + installedVersionAntiError);
            msg('Latest version - ' + actualVer);
            var locale = Menu.GetLocale();
            msg('------------- ' + (locale == 'en' ? 'Result' : 'Результат'));
            var requireUpdate = locale == 'en' ? 'Update required' : 'Требуется обновление';
            if (installedVersionAntiError == actualVer) {
                requireUpdate = locale == 'en' ? 'No update required' : 'Обновление не требуется';
                UpdaterInfo.SetHidden(true);
            }
            else {
                Menu.GetFolder(PATH).SetTip('Update required', 'en').SetTip('Требуется обновление', 'ru');
                UpdaterInfo.SetNameLocale('ru', 'Необходимо обновить скрипты!').SetNameLocale('en', 'The scripts need to be updated!');
                Menu.AddButton(PATH, 'How to update', function () {
                    Engine.OpenURL('https://www.youtube.com/watch?v=IZkDPdQVXHE');
                }).SetNameLocale('ru', 'Как обновить').SetOrdering(1000);
            }
            msg(requireUpdate);
            msg('------------- Checking ended');
        }
    };
    var i = 0;
    var interval;
    var UpdaterInfo = Menu.AddLabel(PATH, 'Updater Info')
        .SetNameLocale('en', 'Checking for updates')
        .SetNameLocale('ru', 'Проверка обновлений')
        .SetOrdering(1000);
    VersionChecker.OnScriptLoad = function () {
        interval = setInterval(function () {
            i++;
            if (i > 3)
                i = 0;
            UpdaterInfo.SetNameLocale(Menu.GetLocale(), UpdaterInfo.GetNameTranslated().replace(/\./g, '') + '.'.repeat(i));
        }, 250);
        setTimeout(function () {
            msg('------------- Getting the version from GitHub...');
            HTTP.Request('raw.githubusercontent.com', 'nofrfa/Melonity/master/VersionChecker.js', 'GET', reqInfo);
        }, 3000);
    };
})();
RegisterScript(VersionChecker, 'Checker version to Custom Script [by no_FRFA]');