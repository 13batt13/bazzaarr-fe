import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface useThemeResult {
  changeTheme: () => void;
  theme: Theme;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.LIGHT:
        newTheme = Theme.BLUE;
        break;
      case Theme.BLUE:
        newTheme = Theme.DARK;
        break;
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      default:
        newTheme = Theme.LIGHT;
        break;
    }
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return { changeTheme, theme: theme || Theme.LIGHT };
}
