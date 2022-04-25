import { useEffect } from "react";
import CustomHead from "../../components/custom-head";
import { useRecoilValue } from "recoil";
import { authenticatedAtom } from "../../atom/authenticatedAtom";
import { useRouter } from "next/router";

const Profile = () => {

  const isAuthenticated = useRecoilValue(authenticatedAtom);
  const router = useRouter();

  useEffect(() => {
    if(!isAuthenticated) router.replace("/login");
  }, [isAuthenticated])

  return (
    <div className="w-full min-h-screen flex flex-col bg-primary-light dark:bg-primary-dark justify-center items-center">
      <CustomHead title="Profile" />

      <h1 className="text-2xl font-fira-code text-primary-orange">
          My Profile
      </h1>
    </div>
  );
};

export default Profile;