import React from "react";
import BusSearchBox from "./BusSearchBox";
import './styles/BusSearch.css'
import BusSearchProvider, { BusErrorProvider } from "../../context/BusSearchContext";
import Carousel from "../Advertisement/Advertisement";
import AdvertisementSlider from "../Advertisement/Advertisement";


const BusSearch = () =>{

    return (<>
        <BusSearchProvider>
        <BusErrorProvider>
            <div id="bus-search">
                    <h1>Search buses</h1>
                    <h2>Enjoy hassle free bookings with Cleartrip</h2>
                    <div>
                        <BusSearchBox />
                    </div>


            </div>
            <AdvertisementSlider />

        </BusErrorProvider>
        </BusSearchProvider>
    </>)
}


export default BusSearch;