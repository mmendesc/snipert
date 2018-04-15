import React from "react";
import render from "react-dom";
import PropTypes from "prop-types";
import SearchBar from './SearchBar';
import MarkdownEditor from './MarkdownEditor';

class Snipert extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <MarkdownEditor/>
      </div>
      )
  }
};

export default Snipert

