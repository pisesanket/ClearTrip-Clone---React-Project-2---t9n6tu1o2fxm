import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './styles/FlightResultPage.css';
import FlightList from "./FlightList";
import { FlightFilterProvider } from "../../../context/FlightSeatContext";
import FlightFilterBar from "./FlightFilterBar";

const FlightResultPage = () =>{
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const source = params.get('source');
    const dest = params.get('dest');
    const day = params.get('day');
    const [result,setResult] = useState([]);
    async function callApi(){
        await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/flight?day=${day}&search={"source":"${source}","destination":"${dest}"}&limit=200`,{
            headers:{
                'projectID':'9fc41adjs85k'
            }
        }).then(res=>res.json()).then(res=>{
            
            setResult(res.data.flights);
    
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
       callApi();

    },[])
    
    return (<>
        <FlightFilterProvider>
            <div id="flight-result-page">
                <div id="flight-result-page-filters">
                        <FlightFilterBar />
                    </div>
                <div id="flight-result-list">
                    <FlightList data = {result} />
                </div>

            </div>
        </FlightFilterProvider>
    </>)
}


export default FlightResultPage;