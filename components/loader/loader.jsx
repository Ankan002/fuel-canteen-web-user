import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../atom/theme";

const Loader = (props) => {
  const {height="50", width="50", color} = props;
  const theme = useRecoilValue(themeAtom);
  return (
    <TailSpin
      height={height}
      width={width}
      color={(color) ? color : (theme === "light" ? "#10111A" : "#F6F8FA")}
    />
  );
};

export default Loader;
