import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import ThemeWrapper from "../components/theme-wrapper";
import VerifyAuthenticated from "../components/verify-authenticated";
import CustomToaster from "../components/custom-toaster/custom-toaster";

const MyApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <ThemeWrapper>
        <VerifyAuthenticated>
          <Component {...pageProps} />
          <CustomToaster />
        </VerifyAuthenticated>
      </ThemeWrapper>
    </RecoilRoot>
  );
};

export default MyApp;
