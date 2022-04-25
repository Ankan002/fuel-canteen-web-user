import { useEffect } from "react";
import CustomHead from "../components/custom-head";
import { useRecoilValue, useRecoilState } from "recoil";
import { authenticatedAtom } from "../atom/authenticatedAtom";
import { useRouter } from "next/router";

import { userAtom } from "../atom/userAtom.js";
import { userLoadingAtom } from "../atom/userLoadingAtom.js";
import Loader from "../components/loader";

const Profile = () => {
  const [isAuthenticated, setIsUserAuthenticated] =
    useRecoilState(authenticatedAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const isUserLoading = useRecoilValue(userLoadingAtom);
  const router = useRouter();

  const onLogOut = () => {
    localStorage.removeItem("auth-token");
    setUser({});
    setIsUserAuthenticated(false);
  }

  useEffect(() => {
    if (!isAuthenticated) router.replace("/login");
  }, [isAuthenticated]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-primary-light dark:bg-primary-dark justify-center items-center">
      <CustomHead
        title={Object.keys(user).length > 0 ? user.name : "Profile"}
      />

      {isUserLoading ? (
        <Loader />
      ) : (
        <button className="text-primary-orange text-2xl font-fira-code" onClick={onLogOut}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Profile;
