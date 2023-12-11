import React from "react";
import BusInput from "./BusInput";
import BusSearchDay from "./BusSearchDay";
import BusSearchBtn from "./BusSearchBtn";
import BusSearchDate from "./BusSearchDate";



const BusSearchBox = () =>{

    return (<>
            <div id="bus-search-box">

                <BusInput />
                

                <div id="bus-search-bottom">
                    <BusSearchDate />
                    {/* <BusSearchDay /> */}
                    <BusSearchBtn />
                </div>
        
            </div>
        
    </>)
}


export default BusSearchBox;