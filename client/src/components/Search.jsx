import React from 'react';

const subTitle = {
    fontSize: 28
}

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
      <p style={subTitle}>Find new artists</p>
      Search for similar artists here:<br/> <input value={this.state.terms} onChange={this.onChange}/>       
      <br/>
      <button onClick={this.search}> Find new artists </button>
    </div>) 
  }
}

export default Search;