import React, { useEffect, useState } from "react";
import './styles/LoginModal.css'
import images from "../../images";
import { useAuthContext } from "../../context/AuthContext";


const LoginModal = (pros) =>{
    const [isLogging,setLogging] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState({});
    const {isLoggedIn,setIsLoggedIn} = useAuthContext();
    function handleCloseClick(){
        pros.setLoginModal(!pros.isLoginModal);
    }
    function handleSignUpClick(){
        pros.setSignupModal(true);  
        pros.setLoginModal(false);
    }
    async function callLoginApi(){
        await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "projectID":"9fc41adjs85k"
            },
            body:JSON.stringify({
                'email':email,
                'password':password,
                'appType':'bookingportals'
            })
        }).then(res=>res.json()).then(res=>{
            if(res.status==='fail'){
                const newErr = {...error,input:'login',msg:'incorrect email or password'}
                setError(newErr)
                setLogging(false);
            }else if(res.status==='success'){
                setLogging(false);
                localStorage.setItem('token',res.token);
                setIsLoggedIn(true);
                pros.setLoginModal(false);
            }

        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        if(isLogging){
            callLoginApi();
        }
    },[isLogging])

    function handleLoggingClick(){
        if(!email){
            const newErr = {...error,input:'email',msg:'Email* field should not be empty'}
            setError(newErr);
        }else if(!password){
            const newErr = {...error,input:'password',msg:'Password* field should not be empty'}
            setError(newErr);
        }else{
            setError({});
            setLogging(true);
        }
    }
    function handleEmailChange(e){
        setEmail(e.target.value);
    }
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }



    return (<>
        <div id="login-modal-div">
            <div id="login-modal">
                <div id="login-modal-close">
                    <img onClick={handleCloseClick} src={images.close} width={'20px'} alt="" />
                </div>
                <div className="error">{error.input=='login'?error.msg:null}</div>
                <div id="login-modal-email">
                    <input value={email} type="email" onChange={handleEmailChange} placeholder="Enter Email" />
                </div>
                <div className="error">{error.input=='email'?error.msg:null}</div>
                <div id="login-modal-password">
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="Enter Password" />
                </div>
                <div className="error">{error.input=='password'?error.msg:null}</div>
                <div id="login-modal-btn" onClick={handleLoggingClick} className="login-signup-btn">
                    Login
                </div>
                <div id="login-modal-signup-div">
                    <div id="login-modal-signup-label">Don't have an Account?</div>
                    <div id="login-modal-signup-btn" onClick={handleSignUpClick} className="login-signup-btn">SignUp</div>
                </div>
            </div>
        </div>
    </>)
}

export default LoginModal;