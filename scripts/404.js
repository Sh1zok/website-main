import { ruCodes, getCommonLocaleCode, setLocale } from './shared/localeUtils.js';
import { ruLocaleMap, enLocaleMap } from "./locales/404.js";

function regenerateLocale(localeMap) {
    setLocale(localeMap)

    const errorSplashes = localeMap["errorSplash"]
    document.getElementById("errorSplash").innerHTML = errorSplashes[Math.round(Math.random() * (errorSplashes.length - 1))];

    const wtfCats = localeMap["wtfCats"]
    document.getElementById("wtfCat").innerHTML = wtfCats[Math.round(Math.random() * (wtfCats.length - 1))];

    const reasonSplashes = localeMap["reasonSplashes"]
    document.getElementById("reasonSplashes").innerHTML = reasonSplashes[Math.round(Math.random() * (reasonSplashes.length - 1))];
}



let preferredLanguage = localStorage.getItem('preferredLanguage');
if (!preferredLanguage) {
    preferredLanguage = getCommonLocaleCode(ruCodes, 'ru', 'en');
    localStorage.setItem('preferredLanguage', preferredLanguage);
}

let localeMap = (preferredLanguage === 'ru') ? ruLocaleMap : enLocaleMap;
regenerateLocale(localeMap);



document.getElementById("changeLangToRus").addEventListener('click', function() {
    if (localStorage.getItem('preferredLanguage') === "ru") {return}

    localStorage.setItem('preferredLanguage', "ru");
    regenerateLocale(ruLocaleMap);
});
document.getElementById("changeLangToEng").addEventListener('click', function() {
    if (localStorage.getItem('preferredLanguage') === "en") {return}

    localStorage.setItem('preferredLanguage', "en");
    regenerateLocale(enLocaleMap);
});
