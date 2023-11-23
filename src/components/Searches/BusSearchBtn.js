import React from "react";
import { useBusContext, useBusErrorContext } from "../../context/BusSearchContext";
import { Link } from "react-router-dom";


const BusSearchBtn = () =>{
    
    const { searchBus,setDest,setSource,setDay} = useBusContext();
    const  { sourceClass, dayClassName,setSourceClassName,setDayClassName,destClass,setDestClassName} = useBusErrorContext();
    function handleSearchClick(){
        if(!searchBus.source){
            setSourceClassName('error-border');
        }else if(!searchBus.dest){
            setDestClassName('error-border');
        }
        else if(!searchBus.day){
            setDayClassName('error-border');
        }
    }
    

    return (<>
        <div id="bus-search-btn">
        {searchBus.source&&searchBus.dest && searchBus.day ? (
          <Link to={`/bus/search?source=${searchBus.source}&dest=${searchBus.dest}&day=${searchBus.day}`} >
            Search Buses
          </Link>
        ) : (
            <span style={{color:'#ffffff'}} onClick={handleSearchClick}>Search Buses</span>)}
        </div>
    </>)
}

export default BusSearchBtn;