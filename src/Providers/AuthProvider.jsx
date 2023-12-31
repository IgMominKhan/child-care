import { createContext, useEffect, useState } from "react";
import auth from '../../configs/Firebase'  
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
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
  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  // google sign in
  // const googleSingIn = () => {
  //   setIsLoading(true);
  //   return signInWithPopup(auth, googleProvider);
  // };

  
  const authInfo = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    register,
    login,

    logOut,
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
        setIsLoading(false)
    });

    return unsubcribe();
  }, []);

  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
