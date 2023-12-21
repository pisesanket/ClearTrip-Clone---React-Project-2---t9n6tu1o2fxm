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
            <NavBarItem text = "Offers" img={param.pathname=='/offers'?images.offersBlue:images.offers} to='/offers' backgroundC={param.pathname=='/offers'?'rgba(168, 195, 248, 0.856)':''}/>
            <NavBarItem text = "My trips" img={param.pathname=='/trips'?images.luggaeBlue:images.luggage} to='/trips' backgroundC={param.pathname=='/trips'?'rgba(168, 195, 248, 0.856)':''}/>
            <NavBarItem text = "Support" img={param.pathname=='/support'?images.supportBlue:images.support} to='/support' backgroundC={param.pathname=='/support'?'rgba(168, 195, 248, 0.856)':''}/>
                        
        </div>
    
    </>)

}


export default LeftNavBar;