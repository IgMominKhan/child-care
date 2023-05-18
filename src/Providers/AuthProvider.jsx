import { createContext, useState } from "react"

import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

  export const AuthContext = createContext();


const AuthProvider = ({children}) => {

  const [user, setUser ] = useState(null);
  const [isLoading, setIsLoading] = useState(true)


// create / register users 
  const register = (email,password)=> {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }


  // login users 
  const login = (email,password)=> {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }


  // 
  const authInfo = {
    
    user,
    setUser,
    isLoading,
    setIsLoading,
    register,
    login,
  }

  
  return (
    <AuthContext.Provider value={authInfo}>
    {children}  
    </AuthContext.Provider>
  )
}

export default AuthProvider
