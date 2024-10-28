import { IonPage, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonTitle, IonButton, IonIcon, IonContent } from "@ionic/react";
import React from "react";
import Segment from "../components/Segment";
import ThemeToggleButton from "../components/ThemeToggler";
import Ticker from "../components/Ticker";
import Language from "../components/Language";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <IonPage>

            <ThemeToggleButton />
            <IonHeader >


                <IonToolbar>
                    <IonGrid>
                        <IonRow className="ion-content-evenly ion-align-items-center">
                            <IonCol sizeSm='auto' sizeXs='12'  >

                                <IonTitle className='ion-text-center ion-text-sm-start' >

                                    <IonButton routerLink='/' routerDirection='root' fill='clear'>
                                        <IonIcon src="assets/icon/bitcoin.svg" />

                                        <span style={{ padding: "0 0.5rem" }}>
                                            <span style={{ fontSize: "1.15rem" }}>

                                                Bitcoin
                                            </span>

                                        </span>
                                    </IonButton>
                                </IonTitle>
                            </IonCol>

                            <IonCol>

                                <Segment />
                            </IonCol>
                            <IonCol size='2' className='ion-hide-md-down' >
                                <Language />
                                <Ticker />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <IonGrid >
                    <IonRow class="ion-justify-content-center">
                        <IonCol size="12">
                            {children}
                        </IonCol>
                    </IonRow>
                </IonGrid>


            </IonContent>



        </IonPage>
    )
}

export default Layout