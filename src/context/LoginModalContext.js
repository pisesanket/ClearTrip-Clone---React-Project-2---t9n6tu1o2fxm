import React, { createContext, useContext, useState } from "react";



const LoginModalContext = createContext();

export const LoginModalContextProvider = ({children}) =>{

    const [isLoginModal,setLoginModal] = useState(false);
    const contexValue = {isLoginModal,setLoginModal}
    return (<>
        <LoginModalContext.Provider value={contexValue}>
            {children}
        </LoginModalContext.Provider>
    </>)

}

export const useLoginModalContext = () =>{
    const context = useContext(LoginModalContext);
    return context;
}

