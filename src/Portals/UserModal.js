import React, { useEffect, useRef } from "react";
import images from "../images";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";


const UserModal =(props) =>{
    const {isLoggedIn,setIsLoggedIn} = useAuthContext();
    const profileRef = useRef();
    useEffect(()=>{
        function checkOutsideProfileClick(e){
            
            if(profileRef.current&&!profileRef.current.contains(e.target)){
                props.setUserModal(!props.isUserModal);
            }
       
        }

        if(props.isUserModal){

            document.addEventListener('click',checkOutsideProfileClick);
        }

        return ()=>{
            document.removeEventListener('click',checkOutsideProfileClick);
        }
    },[props.isUserModal])

    function handleLogoutClick(){
        setIsLoggedIn(false);
        localStorage.removeItem('token');
        props.setUserModal(false)
    }
    function handleTripClick(){
        props.setUserModal(false)
    }
    return (<>
        <div id="user-modal" ref={profileRef}>
            <div id="user-modal-div">
                <Link to='/' onClick={handleTripClick}><div className="user-modal-item"><img src={images.luggage} height={'24px'} width={'24px'} alt="" /><div>My trips</div></div></Link>
                <div className="user-modal-item" onClick={handleLogoutClick}><img src={images.logout} height={'24px'} width={'24px'} alt="" /><div>Logout</div></div>
            </div>
        </div>
    </>)
}


export default UserModal;