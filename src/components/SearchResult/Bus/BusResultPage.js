import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import './styles/BusResultPage.css';
import BusesList from "./BusesList";
import { BusFilterProvider } from "../../../context/BusSearchContext";
import BusFilterBar from "./BusFilterBar";

const BusResultPage = () =>{
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const source = params.get('source');
    const dest = params.get('dest');
    const day = params.get('day');
    const [result,setResult] = useState([]);
    
    async function callApi(){
        await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/bus?search={"source":"${source}","destination":"${dest}"}&day=${day}&limit=200`,{
            headers:{
                'projectID':'9fc41adjs85k'
            }
        }).then(res=>res.json()).then(res=>{
            
            setResult(res.data.buses);
    
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
       callApi();

    },[])
    
    return (<>
        <BusFilterProvider>
            <div id="bus-result-page">
                <div id="bus-result-page-filters">
                    <BusFilterBar />
                </div>

                <div id="bus-result-list">
                    <BusesList data = {result} />
                </div>

            </div>
        </BusFilterProvider>
    </>)
}


export default BusResultPage;