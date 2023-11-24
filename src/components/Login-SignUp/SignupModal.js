import React, { useEffect, useState } from "react";
import images from "../../images";
import './styles/SignupModal.css'
import { useAuthContext } from "../../context/AuthContext";


const SignupModal = (props) =>{
    const [error,setError] = useState({});
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isSignup,setSignup] = useState(false);
    const {isLoggedIn,setIsLoggedIn} = useAuthContext();

    function handleCloseClick(){
        props.setSignupModal(false);
        props.setLoginModal(true)
    }
    function handleSignupClick(){
        if(!name){
            const newErr = {...error,input:'name',msg:'Enter a Name*'}
            setError(newErr);
        }else if(!email){
            const newErr = {...error,input:'email',msg:'Enter an Email*'}
            setError(newErr);
        }else if(!password){
            const newErr = {...error,input:'password',msg:'Enter a Password*'}
            setError(newErr);
        }else{
            setError({});
            setSignup(true);
        }
    }
    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleEmailChange(e){
        setEmail(e.target.value);
    }
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    async function callSignApi(){
        await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/signup`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "projectID":"9fc41adjs85k"
            },
            body:JSON.stringify({
                'name':name,
                'email':email,
                'password':password,
                'appType':'bookingportals'
            })
        }).then(res=>res.json()).then(res=>{
            if(res.status==='success'){
                setEmail('');
                setPassword('');
                setName('');
                localStorage.setItem('token',res.token);
                setIsLoggedIn(true)
                props.setLoginModal(false);
                props.setSignupModal(false);
                setSignup(false);
            }else if(res.status==='fail'){
                const newErr = {...error,input:'signup',msg:res.message}
                setError(newErr)
                setSignup(false);
            }else{
                console.log(res)
            }

        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        if(isSignup){
            callSignApi();
        }
    },[isSignup])

    return (<>
        <div id="signup-modal-div">
            <div id="signup-modal">
                <div id="signup-modal-close">
                    <img onClick={handleCloseClick} src={images.close} width={'20px'} alt="" />
                </div>
                <div className="error">{error.input=='signup'?error.msg:null}</div>
                <div id="signup-modal-text">
                    <input value={name} onChange={handleNameChange} type="text" placeholder="What would you like to be called?" />
                </div>
                <div className="error">{error.input=='name'?error.msg:null}</div>
                <div id="signup-modal-email">
                    <input value={email} onChange={handleEmailChange} type="email" placeholder="Enter Email" />
                </div>
                <div className="error">{error.input=='email'?error.msg:null}</div>
                <div id="signup-modal-password">
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="Enter Password" />
                </div>
                <div className="error">{error.input=='password'?error.msg:null}</div>
                <div id="signup-modal-btn" onClick={handleSignupClick} className="login-signup-btn">
                    SignUP
                </div>
            </div>
        </div>
    </>)
}


export default SignupModal;