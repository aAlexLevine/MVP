import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }


  search (term) {
    console.log(`${term} was searched`);

    axios.post('/items', {
      artist: term
    })
    .then((response) => {
      this.setState({
        items: response.data
      });
      console.log('response was set****')
      //console.log(response.data)
    });
  }


  render () {
    return (<div>
      <h1>Reckos</h1>
      <List artists={this.state.items}/>
      <Search onSearch={this.search.bind(this)}/>
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