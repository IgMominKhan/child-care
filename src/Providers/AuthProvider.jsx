import { createContext, useState } from "react";
import auth from "../Providers/AuthProvider";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // create / register users
  const register = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login users
  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };
  //
  const authInfo = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    register,
    login,

    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
