import React, { useState } from "react";
import LoginLogo from "../../assets/login-logo";
import { GrGoogle } from "react-icons/gr";
import toast from "react-hot-toast";
import Loader from "../loader";
import { signIn } from "../../helpers/sign-in";
import { useRecoilState } from "recoil";
import { authenticatedAtom } from "../../atom/authenticatedAtom";
import { useRouter } from "next/router";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirebaseApp } from "../../config/get-firebase-app.js";

const LoginBody = () => {
  const [signingIn, setSigningIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(authenticatedAtom);
  const router = useRouter();

  const googleSignInClick = async () => {
    const app = getFirebaseApp();
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const firebaseResponse = await signInWithPopup(auth, googleProvider);
    const firebaseUser = firebaseResponse.user.providerData[0];

    const signInResponse = await signIn(signingIn, setSigningIn, firebaseUser);

    if (!signInResponse.success) {
      toast.error(`${signInResponse.error}`);
      return;
    }

    toast.success("Signed in... redirecting...");

    setIsAuthenticated(true);
    router.replace("/");

    localStorage.setItem("auth-token", signInResponse.data.authToken);
  };

  return (
    <div className="flex-grow w-full flex flex-col justify-center items-center p-10">
      <div className="lg:w-1/3 md:w-1/2 w-full h-1/4 flex">
        <LoginLogo />
      </div>
      <h1 className="lg:text-2xl md:text-xl text-lg text-center text-primary-orange font-fira-code lg:mt-[-70px] md:mt-[-60px] mt-[-50px]">
        Let's Re-fuel Together
      </h1>

      <button
        className="px-5 py-3 flex justify-center items-center mt-5 border-2 rounded-lg hover:text-primary-orange hover:dark:text-primary-orange text-dark-font dark:text-primary-light border-primary-dark dark:border-primary-light hover:dark:border-primary-orange hover:border-primary-orange lg:text-xl bg-secondary-light dark:bg-black ease-in transition-all cursor-pointer"
        onClick={googleSignInClick}
      >
        {signingIn ? (
          <Loader height="20" width="20" />
        ) : (
          <>
            <GrGoogle size={30} />

            <p className="ml-3 font-fira-code  md:text-lg text-base">
              Login with Google
            </p>
          </>
        )}
      </button>
    </div>
  );
};

export default LoginBody;
