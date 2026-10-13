// type theme
import type { Theme } from "../types/Theme";

// get app element
const rootElement = document.documentElement

function LightTheme() {
  rootElement.style.setProperty('--bg-color', 'rgba(255,248,245,1)')

  rootElement.style.setProperty('--main-text-color', 'rgba(0,0,0,1)')

  rootElement.style.setProperty('--sub-accent-color', 'rgba(96,96,96,1)')

  rootElement.style.setProperty('--head-gradient-color-1', 'rgba(102,194,255,1)')
  rootElement.style.setProperty('--head-gradient-color-2', 'rgba(102,194,255,0.1)')

  rootElement.style.setProperty('--foot-gradient-color-1', 'rgba(51,102,204,1)')
  rootElement.style.setProperty('--foot-gradient-color-2', 'rgba(51,102,204,0.1)')

  rootElement.style.setProperty('--button-gradient-color-1', 'rgba(191,209,230,1)')
  rootElement.style.setProperty('--button-gradient-color-2', 'rgba(191,209,230,0.6)')
  rootElement.style.setProperty('--button-gradient-color-3', 'rgba(230,209,191,1)')
  rootElement.style.setProperty('--button-gradient-color-4', 'rgba(230,209,191,0.6)')

  rootElement.style.setProperty('--entry-gradient-color-1', 'rgba(110,140,178,1)')
  rootElement.style.setProperty('--entry-gradient-color-2', 'rgba(110,140,178,0.2)')
  rootElement.style.setProperty('--entry-hover-color', 'rgba(110,140,178,0.2)')

  rootElement.style.setProperty('--entry-banner-color', 'rgba(96,96,96,1)')
  rootElement.style.setProperty('--entry-banner-text-color', 'rgba(240,240,240,1)')

  console.log("Light Mode Engaged")
}

function DarkTheme() {
  rootElement.style.setProperty('--bg-color', 'rgba(30,27,24,1)')

  rootElement.style.setProperty('--main-text-color', 'rgba(240,240,240,1)')

  rootElement.style.setProperty('--sub-accent-color', 'rgba(160,160,160,1)')

  rootElement.style.setProperty('--head-gradient-color-1', 'rgba(30,60,120,1)')
  rootElement.style.setProperty('--head-gradient-color-2', 'rgba(30,60,120,0.1)')

  rootElement.style.setProperty('--foot-gradient-color-1', 'rgba(25,50,100,1)')
  rootElement.style.setProperty('--foot-gradient-color-2', 'rgba(25,50,100,0.1)')

  rootElement.style.setProperty('--button-gradient-color-1', 'rgba(90,110,130,1)')
  rootElement.style.setProperty('--button-gradient-color-2', 'rgba(90,110,130,0.6)')
  rootElement.style.setProperty('--button-gradient-color-3', 'rgba(110,90,70,1)')
  rootElement.style.setProperty('--button-gradient-color-4', 'rgba(110,90,70,0.6)')

  rootElement.style.setProperty('--entry-gradient-color-1', 'rgba(120,130,150,1)')
  rootElement.style.setProperty('--entry-gradient-color-2', 'rgba(120,130,150,0.2)')
  rootElement.style.setProperty('--entry-hover-color', 'rgba(120,130,150,0.2)')

  rootElement.style.setProperty('--entry-banner-color', 'rgba(192,192,192,1)')
  rootElement.style.setProperty('--entry-banner-text-color', 'rgba(0,0,0,1)')

  console.log("Dark Mode Engaged")
}

export const ThemeSetter = (theme: Theme) => {
  switch (theme) {
    case 'light':
      LightTheme();
      return 'light' as Theme
    case 'dark':
      DarkTheme();
      return 'dark' as Theme
    default:
      LightTheme();
      return 'light' as Theme
  }
}

export const ThemeSwapper = (theme: Theme) => {
  switch (theme) {
    case 'dark':
      LightTheme();
      return 'light' as Theme
    case 'light':
      DarkTheme();
      return 'dark' as Theme
    default:
      LightTheme();
      return 'light' as Theme
  }
}

export default ThemeSwapper;
