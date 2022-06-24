import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {customAxios, customAxiosWithoutRI} from "../../../shared/src/lib/axios/axios";
import { credentialsUserState } from "./helpers/userAtoms";

  
  export const useAuthEffect = () => {
    const [credentialsUser, setCredentialsUser] =
      useRecoilState(credentialsUserState);
    const [isCompleted, setIsCompleted] = useState(false);
  
    useEffect(() => {
      const { data }: any = customAxios({
        method: "get",
        url: "/me",
      }).catch(() => {
        setCredentialsUser(null);
        setIsCompleted(true);
        throw new Error("Test");
      });
  
      setCredentialsUser(data);
      setIsCompleted(true);
    }, [setCredentialsUser]);
  
    return {
      credentialsUser,
      isCompleted,
    };
  };
  
  export default function useAuth() {
    const [credentialsUser, setCredentialsUser] =
      useRecoilState(credentialsUserState);
    const navigate = useNavigate();
  
    const getCredentialsUser = async () => {
      const { data } = await customAxios({
        method: "get",
        url: "/me",
      });
      setCredentialsUser(data);
    };
  
    const signUp = async (form: any) => {
      const res = await customAxiosWithoutRI({
        method: "post",
        url: "/register",
        data: form,
      });
      console.debug(res.data);
      window.alert("Test");
      navigate("/login");
    };
  
    const signIn = async (form: any) => {
      const { data } = await customAxiosWithoutRI({
        method: "post",
        url: "/login",
        data: form,
      });
      const tokens = JSON.stringify(data);
      window.localStorage.setItem("tokens", tokens);
  
      await getCredentialsUser();
      window.alert("Test");
      navigate("/profile");
    };
  
    const signOut = () => {
      window.alert("Test");
      window.localStorage.removeItem("tokens");
  
      setCredentialsUser(null);
    };
  
    return {
      credentialsUser,
      signUp,
      signIn,
      signOut,
    };
  }