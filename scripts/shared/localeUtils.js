export const ruCodes = ['ky', 'be', 'ru', 'kz'];

// Many countries have the same languages in common,
// So there is no point in translating the website into all existing languages
// A few common ones will be enough
export function getCommonLocaleCode(codes, commonCode, defaultCode){
    const browserLanguage = (navigator.language).split('-')[0]
    if (codes.includes(browserLanguage)) {return commonCode} else {return defaultCode}
}

export async function setLocale(localeMap) {
    const placeholders = document.querySelectorAll('[placeholderName]');
    placeholders.forEach(element => {
        element.innerHTML = localeMap[element.getAttribute('placeholderName')];
    });
}
