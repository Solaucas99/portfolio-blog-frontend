import React, { createContext, useMemo, useContext, useState } from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';

type ThemeContext = {
  theme: 'dark' | 'light';
};

type LoadingContext = {
  isLoading: boolean;
};

type ContextType = {
  themeContext: ThemeContext;
  setThemeContext: (value: ThemeContext) => void;

  loadingContext: LoadingContext;
  setLoadingContext: React.Dispatch<React.SetStateAction<LoadingContext>>;
};

const themeContextInitialValue: ThemeContext = {
  theme: 'dark',
};

const loadingContextInitialValue: LoadingContext = {
  isLoading: false,
};

const Context = createContext<ContextType | null>(null);

export function useAppContextProvider() {
  return useContext(Context) as ContextType;
}

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [themeContext, setThemeContext] = useLocalStorage<ThemeContext>(
    'themeState',
    themeContextInitialValue
  );

  const [loadingContext, setLoadingContext] = useState<LoadingContext>(
    loadingContextInitialValue
  );

  const obj = useMemo(
    () => ({
      themeContext,
      setThemeContext,
      loadingContext,
      setLoadingContext,
    }),
    [themeContext, setThemeContext, loadingContext, setLoadingContext]
  );

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default AppContextProvider;
