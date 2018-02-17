import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => {
  return (<div>
    <h4> Similar Artists </h4>
    {/* {console.log('props', props)} */}
    There are { props.artists.length} items.
    {/* {console.log(props.artists)} */}
    { props.artists.map((artist, idx) => <ListItem singleArtist={artist.name} key={idx}/>)}
  </div>)
}

export default List;