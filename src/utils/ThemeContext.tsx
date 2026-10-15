import { createContext, type ComponentChildren, type FunctionComponent } from "preact";

import { ThemeSetter, ThemeSwapper } from "./ThemeSwapper";
import { Signal, signal } from "@preact/signals";

// context theme
import type { Theme } from "../types/Theme";

// arrow function that returns either dark or light depending on preferred color scheme
const checkBrowserTheme = () => {
  const browserTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

  if (browserTheme && browserTheme.matches) {
    return 'dark' as Theme
  }
  else {
    return 'light' as Theme
  }
}

export const ThemeContext = createContext<{ theme: Signal<Theme>; toggle(): void } | null>(null);

const ThemeProvider: FunctionComponent<{ children: ComponentChildren }> = ({ children }) => {
  const theme = signal(ThemeSetter(checkBrowserTheme()))
  const value = {
    theme: theme, toggle: () => { //LEARNING NOTE: Pass the signal through, not the value. Easy mistake to make...
      theme.value = ThemeSwapper(theme.value)
    }
  }

  return <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeProvider
