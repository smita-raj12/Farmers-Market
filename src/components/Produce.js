import React from "react";
import PropTypes from "prop-types";

function Produce(props){
    
    let border={
        marginTop: '15px',
        border: '2px solid lightgray',
        width: '296px',
        padding: '0 20px 0 20px'
      }
  return (
    <React.Fragment>
    
   
    <div style={border}>
      <h3>{props.month} </h3> 
      <p>{props.selection.map((produce) => 
       
        <li>{produce}</li>
        
      )}</p>
      </div>  
  
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string),
};

export default Produce;