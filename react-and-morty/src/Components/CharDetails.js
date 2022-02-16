import React from "react";

const CharDetails = ({ name, status, species, image, closeWindow }) => {

    return(        
        <div className="profile-container">
          <div className="profile-details"> 
              <h2>Character Details</h2>
           <div className="labels"> 
              <p>Name: {name}</p>
              <p>Status: {status}</p>
              <p>Species: {species}</p>
            </div>
             <div id="img-container"> <img src={image}></img></div>
          </div>       
              <button id="closebutton" onClick={()=> closeWindow()}>Close</button>
        </div>
    );
} 

export default CharDetails;