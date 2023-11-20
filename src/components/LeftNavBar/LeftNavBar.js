import React from "react";
import NavBarItem from "../Navigation/NavBarItem";
import images from "../../images";
import './styles/leftNavBar.css'
import { useLocation } from "react-router-dom";

const LeftNavBar =() =>{
    const param = useLocation();

    return(<>

        <div id="left-nav-bar" className="container">
            <NavBarItem text = "Flights" img={param.pathname=='/'?images.planeBlue:images.plane} to='/' backgroundC={param.pathname=='/'?'rgba(168, 195, 248, 0.856)':''} />
            <NavBarItem text = "Hotels" img={param.pathname=='/hotels'?images.hotelBlue:images.hotel} to='/hotels' backgroundC={param.pathname=='/hotels'?'rgba(168, 195, 248, 0.856)':''}/>
            <NavBarItem text = "Bus" img={param.pathname=='/bus'?images.busBlue:images.bus} to='/bus' backgroundC={param.pathname=='/bus'?'rgba(168, 195, 248, 0.856)':''}/>
        </div>
    
    </>)

}


export default LeftNavBar;