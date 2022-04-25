import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authenticatedAtom } from '../../atom/authenticatedAtom';
import { userLoadingAtom } from "../../atom/userLoadingAtom.js";
import { userAtom } from "../../atom/userAtom.js";
import { getUser } from '../../helpers/get-user';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

const VerifyAuthenticated = ({children}) => {

  const [authenticated, setAuthenticated] = useRecoilState(authenticatedAtom);
  const [isUserLoading, setIsUserLoading] = useRecoilState(userLoadingAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const router = useRouter();

  useEffect(() => {
      if(typeof(window) !== undefined){
          const authToken = localStorage.getItem("auth-token");

          if(!authToken) setAuthenticated(false);
          else setAuthenticated(true);
      }
  }, []);

  const fetchUser = async() => {
    if(typeof(window) === undefined) return;

    const authToken = localStorage.getItem("auth-token");
    const response = await getUser(isUserLoading, setIsUserLoading, authToken);

    if(!response?.success){
      localStorage.removeItem("auth-token");
      setAuthenticated(false);
      setUser({});
      toast.error(response?.error);
      router.replace("/login");
      return;
    }

    console.log(response.data.user);

    setUser(response.data.user)
  }

  useEffect(() => {
    if(authenticated) fetchUser();
  }, [authenticated]);

  return (
    <div>{children}</div>
  );
};

export default VerifyAuthenticated;