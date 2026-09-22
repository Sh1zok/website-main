import { ruCodes, getCommonLocaleCode, setLocale } from './shared/localeUtils.js';
import { ruLocaleMap, enLocaleMap } from "./locales/index.js";

function regenerateLocale(localeMap) {
    setLocale(localeMap).then(() => {
        const today = new Date();
        const dateOfBirth = new Date("2006-09-04");

        let years = today.getFullYear() - dateOfBirth.getFullYear();
        const deltaMonth = today.getMonth() - dateOfBirth.getMonth();
        if (deltaMonth < 0 || (deltaMonth === 0 && today.getDate() < dateOfBirth.getDate())) {
            years--;
        }

        document.getElementById("years-old").textContent = years.toString();
    })

    const welcomeSplashes = localeMap["welcomeSplashes"]
    document.getElementById("welcomeSplash").innerHTML = welcomeSplashes[Math.round(Math.random() * (welcomeSplashes.length - 1))];

    const randomSplashes = localeMap["randomSplashes"]
    document.getElementById("randomThingContent").innerHTML = randomSplashes[Math.round(Math.random() * (randomSplashes.length - 1))];

    const currentYear = new Date().getFullYear();
    document.getElementById("this-year").textContent = currentYear.toString();
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
