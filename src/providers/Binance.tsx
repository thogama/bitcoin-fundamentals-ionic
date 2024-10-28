import React, { createContext, useContext, useEffect } from "react";
import useBinance from "../hooks/useBinance"; // Supondo que ele contém a lógica do WebSocket


interface BinanceContextType {
    lastMessage: any | undefined;
}

const BinanceContext = createContext<BinanceContextType | undefined>(undefined);

export const BinanceProvider = ({ children }: { children: React.ReactNode }) => {
    const binance = useBinance();

    useEffect(()=>{
        binance.connectToSocket()

        return ()=>{
            binance.disconnectSocket()
        }
    },[])

    return (
        <BinanceContext.Provider value={{
            lastMessage: binance.lastMessage,
        }}>
            {children}
        </BinanceContext.Provider>
    );
};

export const useBinanceContext = (): BinanceContextType => {
    const context = useContext(BinanceContext)
    if (!context) {
      throw new Error('useBinanceContext must be used within a SpeechProvider')
    }
  
    return context
  }