import React, { useState } from "react";
import { useLocations } from "../api/useData";
import LocDetails from "./LocDetails";

const Locations = () => {

    const [count, setCount] = React.useState(1);
    const locations = useLocations(count);
    const { results = [] } = locations;

    const [detailsVisible, setDetailsVisible] = React.useState(false);
    const [currentLocData, setCurrentLocData] = React.useState({name:"", type:"", dimension:""});

    const showDetails = (id) => {
      for(let result of results){
        if(result.id == id){
          setCurrentLocData({...result});
          setDetailsVisible(true);
        }
      }
    }

    const closeDetails = ()  => {
      setDetailsVisible(false);
    }

    const increase = () => {
      if(count < 7){
        setCount (count+1);
      }
    };
  
    const decrease = () => {
      if(count >= 0){
        setCount (count-1);
      }
    };

    return(
      <>
        <div className="card-base">
          {results.map(result => 
            <div className="card" key={result.id} onClick={() => showDetails(result.id)}>
              <div>{result.name } - {result.type}</div>
            </div>
          )
          }
          {detailsVisible && <LocDetails {...currentLocData} closeWindow={closeDetails}/>}
          </div>
           <div className="pagination">
            <button className="prevbutton" onClick={decrease}>Prev</button>
            <button className="nextbutton" onClick={increase}>Next</button>
          </div>
       
        </>
    );
} 

export default Locations;