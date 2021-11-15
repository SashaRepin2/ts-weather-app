import { createContext } from "react";

interface ThemeContexProps {
  theme: Themes;
  changeTheme: (theme: Themes) => void;
}

export enum Themes {
  LIGHT = "light",
  DARK = "dark",
}

export const ThemeContext = createContext<ThemeContexProps>({
  theme: Themes.LIGHT,
  changeTheme: () => {},
});
