import React from 'react';
import ListItem from './ListItem.jsx';

const simStyle = {
  marginTop: '100px'
}


const List = (props) => {
  return (<div style ={simStyle}>
    <h4> Similar Artists </h4>
    
    <h5>Here are the top { props.artists.length } similar artists to {props.artistName}.</h5>
    
    { props.artists.map((artist, idx) => <ListItem singleArtist={artist.name} matchPercentage={artist.match} artistImg={artist.image} key={idx}/>)}
  </div>)
}

export default List;