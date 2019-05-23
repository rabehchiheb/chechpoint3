import React from 'react';
import  './App.css';
  
  function IdHTML(props) {
    return (
      
        <div>
          <img
            className="img"
            src={props.avatarUrl}
            alt={props.name}
          />
        
          <h5 className="test">{props.name}</h5>  
        
        
        <h5 className="test">   {props.text}</h5>  
        
        </div>
       
     
    );
  }
  


  
  

  export default IdHTML;