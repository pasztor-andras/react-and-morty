import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import logo from"./rickmortylogo.png";
import Characters from "./Components/Characters";
import Locations from "./Components/Locations";



function App() {
  const characters = useCharacters(0);
  const locations = useLocations(0);
  console.log(locations);
  console.log(characters);

  const [pageDescriptionVisibility, setPageDescriptionVisibility] = React.useState(true);
  const [visiCharacter, setVisiCharacter] = React.useState(false);
  const [visiLocation, setVisiLocation] = React.useState(false);

  const charBtnFunc = () =>{
    setPageDescriptionVisibility(false);
    setVisiCharacter(true);
    setVisiLocation(false);
  }

  const locBtnFunc = () =>{
    setPageDescriptionVisibility(false);
    setVisiCharacter(false);
    setVisiLocation(true);
  }


  return (
    <div className="App">
        <img id="logo" src={logo} alt="logo"/> 
        <div id="button-container">
          <button className="button-53" onClick={charBtnFunc}>Characters</button>
          <button className="button-53" onClick={locBtnFunc}>Location</button>
        </div> 
        {pageDescriptionVisibility && <p id="pagedescription">Do you know Rick and Morty? If not, start watching it! Anyways, the Rick and Morty universe is kinda big with lot of characters and locations. You can look up the information about each characters and locations if you click on the buttons!</p>}
        {visiCharacter && <Characters />}
        {visiLocation && <Locations />}  
    </div>
  );
}

export default App;
