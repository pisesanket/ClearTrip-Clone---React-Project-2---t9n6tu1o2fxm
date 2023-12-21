import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import { useHotelFilterContext } from "../../../context/HotelSearchContext";



const HotelsList = ({data}) =>{
    const { cheapest,setCheapest,rating,handleRatingClick,handleRatingUnclick} = useHotelFilterContext();
    const [filterData,setFilterData] = useState(data);
    // const [originalData, setOriginalData] = useState(data);

    useEffect(()=>{
        if(!rating){
            setFilterData(data)
        }
        else if(rating.four==false&&rating.one==false&&rating.three==false&&rating.two==false){
            setFilterData(data);
        }else{
            const selectedHotel = Object.keys(rating).filter(key => rating[key]);
            
            const newData=data.filter(entry=>{

                return selectedHotel.some(selected =>{
                    const comp = selected=='four'?4:selected=='three'?3:selected=='two'?2:selected=='one'?1:0;
                    if(comp==1&&entry.rating>=1){
                        return true;
                    }else if(comp==2&&entry.rating>=2){
                        return true;
                    }else if(comp==3&&entry.rating>=3){
                        return true;
                    }else if(comp==4&&entry.rating>=4){
                        return true;
                    }
                } );
            })
           setCheapest(false); 
          setFilterData(()=>newData);  
        }
    },[rating,data])

    useEffect(()=>{
        if (cheapest) {
            const sortedData = [...filterData].sort((a, b) => a.rooms[0].costDetails.baseCost - b.rooms[0].costDetails.baseCost);
            setFilterData(()=>sortedData);
          }
          else{
            setFilterData(()=>data)
            handleRatingClick('four');
            handleRatingUnclick('four')
          }
    },[cheapest])

    return (<>
        <div id="hotels-list-div">
            {filterData.length>0?filterData.map(entry=>{
                return <HotelCard hotelData={entry} name={entry.name} rating={entry.rating} key={entry._id} imageList={entry.images} />
            }):<div className="zero-result">No hotel found !</div>}
        </div>
    </>)
}



export default HotelsList;