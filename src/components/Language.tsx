import { useTranslation } from "react-i18next"
import React from "react"
import {  IonLabel, IonSelect, IonSelectOption } from "@ionic/react"
export default function Language() {

    const lngs = [
        { key: "en-US", name: "English" },
        { key: 'pt-BR', name: "Português" },
    ]

    const { i18n } = useTranslation()
    return (

        <IonSelect onIonChange={(e) => {
            i18n.changeLanguage(e.detail.value)
        }} interface="popover" value={i18n.language}>
            {lngs.map(language => {
                return <IonSelectOption key={language.key} value={language.key}>
                    <IonLabel>
                        {language.name}
                    </IonLabel>
                </IonSelectOption>
            })}



        </IonSelect>
    )
}