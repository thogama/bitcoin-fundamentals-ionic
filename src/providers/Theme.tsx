import React, { createContext, useState, useContext, useEffect } from 'react';

// Definir o tipo do valor que o contexto vai fornecer
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Criar o contexto de tema com o tipo inicial `ThemeContextType | undefined`
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider para gerenciar e fornecer o tema
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light'); // 'light' ou 'dark'

  // Função para alternar o tema manualmente
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    toggleDarkPalette(newTheme === 'dark');
  };

  // Função que altera a classe CSS de acordo com o tema
  const toggleDarkPalette = (shouldAdd: boolean) => {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd); // Aplica/remova a classe 'dark'
  };

  // Inicializar o tema com base na preferência do usuário (media query)
  const initializeDarkPalette = (isDark: boolean) => {
    const initialTheme = isDark ? 'dark' : 'light';
    setTheme(initialTheme);
    toggleDarkPalette(isDark);
  };

  useEffect(() => {
    // Usar `matchMedia` para checar a preferência de cores do usuário
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Inicializar o tema com base no valor atual da mídia
    initializeDarkPalette(prefersDark.matches);

    // Função para atualizar o tema quando a preferência de esquema de cores muda
    const setDarkPaletteFromMediaQuery = (e: MediaQueryListEvent) => {
      initializeDarkPalette(e.matches);
    };

    // Adicionar o listener para alterações no esquema de cores
    prefersDark.addEventListener('change', setDarkPaletteFromMediaQuery);

    // Limpar o listener quando o componente for desmontado
    return () => {
      prefersDark.removeEventListener('change', setDarkPaletteFromMediaQuery);
    };
  }, []); // Executa o efeito apenas na montagem do componente

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para facilitar o uso do contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);

  // Garantir que o hook está sendo usado dentro do provider
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
