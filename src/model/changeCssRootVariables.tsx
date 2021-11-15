import React from "react";
import { Themes } from "../context/ThemeContex";

export const changeCssRootVariables = (theme: Themes) => {
  const root = document.querySelector(":root") as HTMLElement;

  const components = [
    "body-background",
    "body-scrollbar-thumb",
    "body-scrollbar-track",
    "components-title-background",
    "components-background",
    "card-background",
    "card-shadow",
    "text-color",
  ];

  components.forEach((component) => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`
    );
  });
};
