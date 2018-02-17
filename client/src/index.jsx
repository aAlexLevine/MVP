import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx'
import axios from 'axios'

const title = {
  fontSize: 70
}

const divStyle = {
  textAlign: 'center',
  fontFamily: 'sans-serif'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      name: ''
    }
  }


  search (term) {
    console.log(`${term} was searched`);
    axios.post('/items', {
      artist: term
    })
    .then((response) => {
      this.setState({
        items: response.data,
        name: term
      });
      console.log('response was set****')
      // console.log(response.data)
    });
  }

  render () {
    return (<div style={divStyle}>
      <h1 style={title}>Recko's</h1>
      <Search onSearch={this.search.bind(this)}/>
      <List artists={this.state.items} artistName={this.state.name}/>
      
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: []
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }