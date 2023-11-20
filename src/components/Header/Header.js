import React from "react";
import logo from '../../Images/cleartrip-seeklogo.com.svg'
import { Link } from "react-router-dom";
import './styles/header.css'


const Header = () =>{
    return (<>
        <div id="header">
            <div className="container">
                <Link to='/'><div><img width={'220px'} height={'50px'} src={logo} alt="" /></div></Link>
                <div id="header-login-btn">Login</div>
            </div>
        
        </div>
    </>)
}



export default Header;