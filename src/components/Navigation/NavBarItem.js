import React from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";

const NavBarItem = (props) =>{
    
    
    return (<>
    <div id="nav-bar-item" style={{backgroundColor:props.backgroundC}}>
        <Link to={props.to} >
            <div><img width={'24px'} height={'24px'} src={props.img} alt="" /><div id="nav-bar-item-text">{props.text}</div></div>
        </Link>
    </div>
    </>)

}


export default NavBarItem;