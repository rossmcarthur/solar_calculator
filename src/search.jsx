import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      geo: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render() {
    return(
      <div>
        <input
          type='text'
          value={this.state.query}
          onChange={this.update('query')}
          className='search-bar-input'
          />
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
