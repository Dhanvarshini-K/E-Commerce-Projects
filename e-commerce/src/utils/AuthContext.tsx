

import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import { account } from "../appwriteConfig.ts";

interface UserInfo {
  email: string;
  password: string;
  name?: string;
  username?: string;
}

interface AuthContextProps {
  user: any;
  loginUser: (userInfo: UserInfo) => Promise<void>;
  logoutUser: () => Promise<void>;
  registerUser: (userInfo: UserInfo) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setLoading(false);
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo: UserInfo) => {
    setLoading(true);
    console.log("userInfo", userInfo);
    try {
      let response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      console.log("Response:\n", response);
      let accountDetails = await account.get();
      setUser(accountDetails);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const logoutUser = async () =>{
    await account.deleteSession('current');
    setUser(null);
    localStorage.clear();
    navigate('/')
  };

  const registerUser = async (userInfo:UserInfo) =>{
    setLoading(true);
    try{
      let response = await account.create(ID.unique(),userInfo.email,userInfo.password,userInfo.name,userInfo.username);
      console.log(response);
      await account.createEmailSession(userInfo.email,userInfo.password);
      let accountDetails = await account.get();
      setUser(accountDetails);
      navigate('/')
    }
    catch(error){
      console.error(error);
    }
    setLoading(false);
  };

  const checkUserStatus = async ()=>{
    try{
      let accountDetails = await account.get();
      setUser(accountDetails);
    }
    catch(error){
      console.log(error);
    }
setLoading(false);
  };


  const contextData : AuthContextProps ={
    user,
    loginUser,
    logoutUser,
    registerUser
  };
  return<AuthContext.Provider value={contextData}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () =>{
  return useContext(AuthContext)
}

export default AuthContext;



