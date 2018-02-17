import React from 'react';

const divStyle = {
    padding: '5px'
   };

   const emStyle = {
    padding: '5px'
   };

const TrackItem = (props) => {
  return (
  <div>
    
    {/* <h5>Here are the top tracks for.</h5> */}
    {/* {console.log('props in track item',props.tracksProp)} */}
    <div style ={divStyle}>    <em style={emStyle}>Track Rank {props.tracksProp['@attr'].rank} <br/></em>   {props.tracksProp.name}</div>
  </div>)
}

export default TrackItem;
// {props.tracksProp['@attr'].rank}  