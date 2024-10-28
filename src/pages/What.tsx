import React from "react";
import Layout from "../layout";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";

export default function What() {

    return (
        <Layout>

            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Card Title</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>Heres a small text description for the card content. Nothing more, nothing less.</IonCardContent>
            </IonCard>

        </Layout>
    )
}