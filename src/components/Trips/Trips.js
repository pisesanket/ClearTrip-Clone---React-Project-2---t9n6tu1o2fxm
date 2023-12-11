import React, { useEffect, useState } from "react";
import TripCard from "./TripCard";
import './style/trips.css';

const Trips = () =>{
    const [tripData,setTripData] = useState([]);
    useEffect(()=>{
        callTripApi();
    },[])

    const callTripApi = async () =>{
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
    }

    return (<>
        <div id="trips">
            <div id="trips-title">
                <h1>My Trips</h1>
            </div>
            <div id="trips-list">
                {tripData?tripData.map(entry=>{
                    return <TripCard key={entry._id} props={entry}/>
                }):<div>No trips found</div>}
               
            </div>
            
        </div>
    </>)
}

export default Trips;