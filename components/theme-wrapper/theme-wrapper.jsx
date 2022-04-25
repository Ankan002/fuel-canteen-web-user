import React, {useEffect} from "react";
import { useRecoilState } from "recoil";
import { themeAtom } from "../../atom/theme.js";
import { getTheme } from "../../helpers/get-theme.js";

const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  useEffect(() => {
      const savedTheme = getTheme();
      setTheme(savedTheme);
  });

  return <div className={`${theme}`}>{children}</div>;
};

export default ThemeWrapper;
