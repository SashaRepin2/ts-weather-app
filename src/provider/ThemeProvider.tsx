import { ReactNode, useState } from "react";
import { Themes, ThemeContext } from "../context/ThemeContex";
import { changeCssRootVariables } from "../model/changeCssRootVariables";

interface Props {
  children: ReactNode;
}
export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Themes>(
    JSON.parse(localStorage.getItem("theme") || "{}") || Themes.LIGHT
  );

  changeCssRootVariables(theme);

  function changeTheme(theme: Themes) {
    localStorage.setItem("theme", JSON.stringify(theme));
    setTheme(theme);

    changeCssRootVariables(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};
