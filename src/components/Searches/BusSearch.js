import React from "react";
import BusSearchBox from "./BusSearchBox";
import './styles/BusSearch.css'


const BusSearch = () =>{

    return (<>
        <div id="bus-search">
                <h1>Search buses</h1>
                <h2>Enjoy hassle free bookings with Cleartrip</h2>
                <div>
                    <BusSearchBox />
                </div>

        </div>
    </>)
}


export default BusSearch;