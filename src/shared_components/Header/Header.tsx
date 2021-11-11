import React from "react";
import { GlobalSelector } from "../../assets/global/GlobalSelector";
import styles from "./Header.module.scss";

interface Props {}

const Header = (props: Props) => {
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
          <div className={styles.header_change_theme}>
            <GlobalSelector id="header_change_theme" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
