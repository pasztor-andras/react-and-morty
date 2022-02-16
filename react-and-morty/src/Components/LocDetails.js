import React from "react";

const LocDetails = ({ name, type, dimension, closeWindow }) => {

    return(        
        <div className="loc-container">
          <div className="profile-details">
          <h2>Location Details</h2>
          <label>Name:</label>
          <p>{name}</p>
          <label>Type:</label>
          <p>{type}</p>
          <label>Dimension:</label>
          <p>{dimension}</p>          
        </div>
        <button id="closebutton" onClick={()=> closeWindow()}>Close</button>
      </div>
    );
} 

export default LocDetails;