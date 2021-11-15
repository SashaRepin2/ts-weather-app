import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContex";

export const useTheme = () => {
  return useContext(ThemeContext);
};
