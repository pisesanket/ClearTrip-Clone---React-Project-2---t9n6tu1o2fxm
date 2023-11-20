import React from "react";
import BusInput from "./BusInput";
import BusSearchDay from "./BusSearchDay";
import BusSearchBtn from "./BusSearchBtn";



const BusSearchBox = () =>{

    return (<>
            <div id="bus-search-box">

                <BusInput />
                

                <div id="bus-search-bottom">
                    <BusSearchDay />
                    <BusSearchBtn />
                </div>
        
            </div>
        
    </>)
}


export default BusSearchBox;