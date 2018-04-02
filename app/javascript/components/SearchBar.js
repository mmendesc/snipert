import React from "react"
import PropTypes from "prop-types"
class SearchBar extends React.Component {

  constructor(props){
    super(props)

    this.state = { text: ''};
  }

  render () {
    return (
      <div>
        <input
        type="number"
        onChange={(event) => this.onInputChange(event.target.value)}
        />
        <h2> { this.state.text}</h2>
      </div>
    );
  }

  onInputChange(text){
    this.setState({text})
  }
}

export default SearchBar
