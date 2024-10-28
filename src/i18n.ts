import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'
import i18n from 'i18next'


i18n

    .use(detector)
    .use(initReactI18next)
    .init({
        resources: {
            "en-US": {
                translation: {
                    "what is": "What is",
                    "fundaments": "Fundaments",
                },
            },
            "pt-BR": {
                translation: {
                    "what is": "O que é",
                    "fundaments": "Fundamentos",
                },
            },
        },
        fallbackLng: ['en-US'],

        interpolation: {
            escapeValue: false,
        },
    })

export default i18n