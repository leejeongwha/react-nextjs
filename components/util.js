import React from 'react';

//cookie에서 language를 우선으로 찾고 없을 경우 accept-language기반으로 세팅
export const setLanguageSSR = function (req, query, whitelist, i18next) {
    let cookies = req.headers.cookie;
    let name = 'i18next=';
    let language = "";

    if (cookies) {
        let ca = cookies.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                language = c.substring(name.length, c.length);
            }
        }
    }

    if (language && (whitelist.includes(language) || whitelist.includes(language.split('-')[0]))) {
        i18next.changeLanguage(language);
    } else {
        if (req) {
            language = req.headers['accept-language'].split(',')[0];
            if (language && (whitelist.includes(language) || whitelist.includes(language.split('-')[0]))) {
                i18next.changeLanguage(language);
            }
        } else {
            language = navigator.userLanguage || navigator.language;
            if (language && (whitelist.includes(language) || whitelist.includes(language.split('-')[0]))) {
                i18next.changeLanguage(language);
            }
        }
    }
}