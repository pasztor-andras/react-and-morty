import React, { useState } from "react";
import { useCharacters } from "../api/useData";
import CharDetails from "./CharDetails";

const Characters = () => {

  const [count, setCount] = React.useState(1);
  const characters = useCharacters(count);
  const { results = [] } = characters;
  const [detailsVisible, setDetailsVisible] = React.useState(false);
  const [currentCharData, setCurrentCharData] = React.useState({name:"", species:"", status:"", img:""});

  const showDetails = (id) => {
    //results.filter(character => (id === character.id) && setCurrentCharData({name: character.name}));
    for(let result of results){
      if(result.id == id){
        setCurrentCharData({name:result.name, species:result.species, status:result.status, img:result.image});
        setDetailsVisible(true);
      }
    }
  }

  const closeDetails = ()  => {
    setDetailsVisible(false);
  }

  const increase = () => {
    if(count < 42){
      setCount (count+1);
    }
  };

  const decrease = () => {
    if(count > 0){
      setCount (count-1);
    }
  };

  return (
    <>
      <div className="card-base">
        {results.map(result =>
          <div className="card" key={result.id} onClick={() => showDetails(result.id)}>
            <span> {result.id}</span>
            <div>{result.name} - {result.species}</div>
            <img src={result.image} alt="" />
          </div>
          )
        }
        {detailsVisible && <CharDetails name={currentCharData.name} species={currentCharData.species} status={currentCharData.status} image={currentCharData.img} closeWindow={closeDetails}/>}
      </div>
      <div className="pagination">
        <button className="prevbutton" onClick={decrease}>Prev</button>
        <button className="nextbutton" onClick={increase}>Next</button>
      </div>
    </>      
  );
}

export default Characters;
