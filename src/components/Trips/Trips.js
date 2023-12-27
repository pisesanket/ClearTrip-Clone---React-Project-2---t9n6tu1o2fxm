import React, { useEffect, useState } from "react";
import TripCard from "./TripCard";
import './style/trips.css';
import AdvertisementSlider from "../Advertisement/Advertisement";
import { useAuthContext } from "../../context/AuthContext";

const Trips = () =>{
    const [tripData,setTripData] = useState([]);
    const {isLoggedIn,setIsLoggedIn} = useAuthContext();

    useEffect(()=>{
        callTripApi();
    },[])

    const callTripApi = async () =>{
        
        try{

            const result = await fetch('https://academics.newtonschool.co/api/v1/bookingportals/booking',{
                
                headers:{
                    "projectID":"9fc41adjs85k",
                    "Authorization":`Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await result.json();
            if(data.status=='success'){
    
                setTripData(data.data);
        
            }else if(data.status=='error'){
                setTripData([]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (<>
        <div id="trips">
            <div id="trips-title">
                <h1>My Trips</h1>
            </div>
            <div id="trips-list">

                {isLoggedIn&&tripData?tripData.map(entry=>{
                    return <TripCard key={entry._id} props={entry}/>
                }):<div>No trips found or Login to get trips detail</div>}
               
            </div>
            
        </div>
        <AdvertisementSlider />
    </>)
}

export default Trips;