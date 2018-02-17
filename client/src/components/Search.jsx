import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  console.log(props)

  this.search = this.search.bind(this);
  this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
      
    });
    console.log('this is on change')
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Find new artists</h4>
      Search for similar artists here: <input value={this.state.terms} onChange={this.onChange}/>       
      <button onClick={this.search}> Find new artists </button>
    </div>) 
  }
}

export default Search;