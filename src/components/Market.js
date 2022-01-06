import React from "react";
import PropTypes from "prop-types";

function Market(props){
    let border={
        marginTop: '15px',
        border: '2px solid lightgray',
        width: '296px',
        padding: '0 20px 0 20px'
      }
  return (
    <React.Fragment>
    
    <div style={border}>
      <h3>{props.day} </h3> 
      <p> {props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
      </div>
      
    </React.Fragment>
  );
}

Market.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string

};

export default Market;