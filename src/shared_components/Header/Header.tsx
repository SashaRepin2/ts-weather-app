import React from "react";
import { GlobalSelector } from "../../assets/global/GlobalSelector";
import { Themes } from "../../context/ThemeContex";
import { useTheme } from "../../hooks/useTheme";
import styles from "./Header.module.scss";

const Header = () => {
  const theme = useTheme();

  function changeTheme() {
    theme.changeTheme(
      theme.theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT
    );
  }

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.left_header}>
          <div className={styles.header_logo}>
            <GlobalSelector id="header_logo" />
          </div>
          <div className={styles.header_title}>Погода</div>
        </div>
        <div className={styles.rigth_header}>
          <div className={styles.header_change_theme} onClick={changeTheme}>
            <GlobalSelector id="header_change_theme" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
