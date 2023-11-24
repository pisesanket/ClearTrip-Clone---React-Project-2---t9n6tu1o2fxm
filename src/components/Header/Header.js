import React, { useState } from "react";
import logo from '../../Images/cleartrip-seeklogo.com.svg'
import { Link } from "react-router-dom";
import './styles/header.css'
import { useAuthContext } from "../../context/AuthContext";
import  ReactDOM  from 'react-dom';
import LoginModal from "../Login-SignUp/LoginModal";
import SignupModal from "../Login-SignUp/SignupModal";
import images from "../../images";
import UserModal from "../../Portals/UserModal";

const Header = () =>{
    const {isLoggedIn,setIsLoggedIn} = useAuthContext();
    const [isLoginModal,setLoginModal] = useState(false);
    const [isSignupModal,setSignupModal] = useState(false);
    const [isUserModal,setUserModal] = useState(false);
    function handleLoginClick(){
        // setIsLoggedIn(!isLoggedIn);
        setLoginModal(!isLoginModal);
        setSignupModal(false);
    }
   
    function handleUserClick(e){
        e.stopPropagation();
        setUserModal(!isUserModal);
    }
    return (<>
        <div id="header">
            <div className="container">
                <Link to='/'><div><img width={'220px'} height={'50px'} src={logo} alt="" /></div></Link>
                <div id="header-login-btn" className={isLoggedIn?'logged-user':null} >
                    {isLoggedIn?<div onClick={handleUserClick}><img src={images.userWhite} width={'24px'} height={'24px'} alt="" /></div>:<div onClick={handleLoginClick}>Login</div>}
                </div>
            </div>
        </div>
        {isUserModal&&ReactDOM.createPortal(<UserModal isUserModal={isUserModal} setUserModal={setUserModal} />,
            document.getElementById('user-modal-root'))}
        {isLoginModal&&ReactDOM.createPortal(<LoginModal isSignupModal={isSignupModal} setSignupModal={setSignupModal} isLoginModal={isLoginModal} setLoginModal={setLoginModal}/>,
            document.getElementById('login-modal-root'))
        }
        {isSignupModal&&ReactDOM.createPortal(<SignupModal isSignupModal={isSignupModal} setSignupModal={setSignupModal} setLoginModal={setLoginModal} />,
            document.getElementById('signup-modal-root'))
        }
    </>)
}



export default Header;