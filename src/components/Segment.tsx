import { IonLabel, IonSegment, IonSegmentButton, useIonRouter } from '@ionic/react';
import React from 'react';
import './segment.css'
import { useTranslation } from 'react-i18next';
export default function Component() {
    const router = useIonRouter()
    const {t}= useTranslation()
    return (
        <IonSegment value={router.routeInfo.pathname}>
            <IonSegmentButton onClick={() => router.push("what-is", "root")} value="/what-is">

                <IonLabel className='no-margin'>{t("what is")}</IonLabel>

            </IonSegmentButton>
            <IonSegmentButton onClick={() => router.push("fundaments", "root")} value="/fundaments">
                <IonLabel className='no-margin'>{t("fundaments")}</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    )
}