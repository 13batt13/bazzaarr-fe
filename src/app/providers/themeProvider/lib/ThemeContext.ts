import { createContext } from "react";

export enum Theme {
  LIGHT = "app_light",
  DARK = "app_dark",
  BLUE = "app_blue",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (t: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
