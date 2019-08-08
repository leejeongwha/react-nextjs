import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// all languages(https://www.science.co.il/language/Codes.php)
const resources = {
    ko: {
        translation: {
            "appDown": "앱 다운로드"
        }
    },
    en: {
        translation: {
            "appDown": "Download app"
        }
    },
    th: {
        translation: {
            "appDown": "Tải ứng dụng"
        }
    }
};

const whitelist = ['ko', 'en', 'th'];

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'ko',
        whitelist: whitelist,
        keySeparator: false,
        defaultNS: 'translation',
        resources: resources,
        detection: {
            order: ['cookie', 'navigator'],
            lookupQuerystring: 'lang'
        },
        debug: false
    });

export { whitelist };
export default i18next;