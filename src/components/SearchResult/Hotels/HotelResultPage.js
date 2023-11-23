import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import HotelsList from "./HotelsList";
import './styles/HotelResultPage.css'
import HotelFilterBar from "./HotelFilterBar";
import { HotelFilterProvider } from "../../../context/HotelSearchContext";

const HotelResultPage = () =>{
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const location = params.get('location');
    const day = params.get('day');
    const [result,setResult] = useState([]);
    
    async function callApi(){
        await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${location}"}&day=${day}&limit=200`,{
            headers:{
                'projectID':'9fc41adjs85k'
            }
        }).then(res=>res.json()).then(res=>{
            
            setResult(res.data.hotels);
    
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
       callApi();

    },[])
    
    return (<>
        <HotelFilterProvider>
            <div id="hotel-result-page">
                <div id="hotel-result-page-filters">
                        <HotelFilterBar />
                    </div>
                <div id="hotel-result-list">
                    <HotelsList data = {result} />
                </div>

            </div>
        </HotelFilterProvider>
    </>)
}


export default HotelResultPage;