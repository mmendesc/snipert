import React from "react"
import PropTypes from "prop-types"
class SearchBar extends React.Component {

  constructor(props){
    super(props)

    this.state = { text: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({text: event.target.value})
  }

  render () {
    return (
      <div className="container">
        <input
        type="text"
        className="form-control main-input"
        onChange={this.handleChange}
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
