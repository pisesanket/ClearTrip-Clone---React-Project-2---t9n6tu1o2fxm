import React, { createContext, useContext, useEffect, useState } from "react";



const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('token')){
            setIsLoggedIn(true);
        }
    },[])
   
    return <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>

}


export const useAuthContext = ()=>{
    const context = useContext(AuthContext);
    return context;
}
