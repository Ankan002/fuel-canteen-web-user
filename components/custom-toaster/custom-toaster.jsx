import { Toaster, ToastBar } from "react-hot-toast";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../atom/theme";

const CustomToaster = () => {

  const theme = useRecoilValue(themeAtom);

  return (
    <Toaster>
      {(t) => {
        return (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              fontFamily: '"Fira Code", monospace',
              color: "#FC5A31",
              border: (theme === "light") ? "1px solid #10111A" : "1px solid #F6F8FA",
              backgroundColor: (theme === "light") ? "#F6F8FA" : "#10111A"
            }}
          />
        );
      }}
    </Toaster>
  );
};

export default CustomToaster;
