import { useEffect } from "react";
import CustomHead from "../components/custom-head";
import LoginBody from "../components/login-body";
import { useRecoilValue } from "recoil";
import { authenticatedAtom } from "../atom/authenticatedAtom";
import { useRouter } from "next/router";

const Login = () => {

  const isAuthenticated = useRecoilValue(authenticatedAtom);
  const router = useRouter();

  useEffect(() => {
    if(isAuthenticated) router.replace("/");
  }, [isAuthenticated])

  return (
    <div className="w-full min-h-screen flex flex-col bg-primary-light dark:bg-primary-dark justify-center items-center">
      <CustomHead title="Login" />

      <LoginBody />
    </div>
  );
};

export default Login;