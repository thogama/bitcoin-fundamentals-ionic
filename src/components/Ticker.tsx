import React, { useState } from "react";
import { IonButton,  IonChip,  IonGrid, IonLabel, IonRow, IonSpinner } from "@ionic/react";
import { useEffect } from "react";
import { useBinanceContext } from "../providers/Binance";
import "./ticker.css"
function Ticker() {
    const binance = useBinanceContext()
    const [porcentage, setPorcentage] = useState(parseFloat(binance?.lastMessage.P))
    const [price, setPrice] = useState(parseFloat(binance?.lastMessage.c))



    useEffect(() => {
        if (binance?.lastMessage?.P) {
            const number = parseFloat(binance?.lastMessage.P)

            setPorcentage(number)

        }
        if (binance?.lastMessage?.c) {
            const number = parseFloat(binance?.lastMessage.c)
            setPrice(number)
        }
    }, [binance?.lastMessage])
    return (
        <IonGrid>
            <IonRow class="ion-align-items-center ion-justify-content-end">
                {Number.isNaN(porcentage) ? <IonSpinner name="dots" /> : <>
                    <IonButton className="no-padding no-margin" fill="clear" color={"medium"}>

                        <div style={{ padding: "0 0.5rem", fontSize: "small" }}>

                            BTC/USDT
                        </div>
                        <IonChip outline className="flex no-margin" color={porcentage < 0 ? "danger" : "success"} >

                            <IonLabel>
                                <span style={{ fontSize: "small" }}>
                                    {porcentage.toFixed(2) + "%"}
                                </span>
                            </IonLabel>

                        </IonChip>

                    </IonButton>

                </>}
            </IonRow>
        </IonGrid>
    )
}

export default React.memo(Ticker)