import React from 'react';
import { ThemeProvider } from './Theme'; // O provider de tema que criamos
import { BinanceProvider } from './Binance';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (

      <ThemeProvider>
        <BinanceProvider>
          {children}
        </BinanceProvider>
      </ThemeProvider>
  );
};
