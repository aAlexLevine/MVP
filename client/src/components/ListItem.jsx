import React from 'react';
import axios from 'axios'
import TrackItem from './TrackItem.jsx';

const divStyle = {
 padding: '15px'
};

const clickStyle = {
  color: 'blue',
  padding: '10px'
 };

 const nameStyle = {
  fontWeight: 'bold',
  fontSize: '20px'
 };

 const green = {
   color: ''
 }




class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      descrip: false,
      clickedOnArtists: '',
      displayTracks: false,
      tracks: [],
     
    }
    console.log(this.props.artistImg) 
  }

  setColor() {
  (this.props.matchPercentage > .70) ? green.color="LawnGreen" : (this.props.matchPercentage < .70 &&  this.props.matchPercentage> .35) ? green.color='DarkViolet' : green.color='grey'
  }

  getThisArtistsTracks () {
    axios.post('/tracks', {
      subArtist: this.state.clickedOnArtists
    })
    .then((response) => {
      this.setState({tracks: response.data})
      console.log('response recieved in ListItem', response.data)
    })
  }

  // green() {
  //   this.setState({color:{color:'green'}})
  // }
  // yellow() {
  //   this.setState({color:{color:'yellow'}})
  // }

  // {this.props.matchPercentage > .70 ? this.setState({color: 'green'}) :null}
  // {this.props.matchPercentage > .70 ? this.green() : this.yellow()} 
  

  render () {
    
    return (
      
      
      <div  style={divStyle} >
      
        <div style={nameStyle} onClick={() => this.setState({descrip: !this.state.descrip, clickedOnArtists: this.props.singleArtist })}>{this.props.singleArtist}</div> 
        {this.setColor()}
        <div style={green}> 
        <br/>This artist shares a {(this.props.matchPercentage * 100).toFixed(2)}% similarity. </div>
      
        {this.state.descrip ? 
          <div onClick={(e) => {e.stopPropagation();  console.log('inner click, the subArtist clicked is ', this.state.clickedOnArtists), this.setState({displayTracks: !this.state.displayTracks}), this.getThisArtistsTracks()   } }> 
            <br/> 
            <img src={this.props.artistImg[3]['#text']} alt="No photo found."/>
            <br/><div style={clickStyle}>Click Image for this artist's top tracks! </div>
            <br/>
              <div> 
                {this.state.displayTracks ? 
                  this.state.tracks.map((track, idx) => <TrackItem tracksProp={track} key={idx}/>): null}
              </div>
            
            </div> : null}
      </div>
    )
  }
}

export default ListItem;