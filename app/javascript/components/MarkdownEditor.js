import React from "react"
import PropTypes from "prop-types"
import ReactMde, { ReactMdeTypes } from "react-mde";
import * as Showdown from "showdown";
import 'react-mde/lib/styles/css/react-mde-all.css';

export interface ReactMdeDemoState {
  mdeState: ReactMdeTypes.MdeState;
}

class MarkdownEditor extends React.Component {

  converter: Showdown.Converter;

  constructor(props) {
    super(props);
    this.state = {
      mdeState: null
    };
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true
    });
  }

  handleValueChange = (mdeState: ReactMdeTypes.MdeState) => {
    this.setState({ mdeState });
  };

  render () {
    return (
      <div className="container">
        <ReactMde
          onChange={this.handleValueChange}
          editorState={this.state.mdeState}
          generateMarkdownPreview={markdown =>
            Promise.resolve(this.converter.makeHtml(markdown))
          }
        />
      </div>
    );
  }
}

export default MarkdownEditor
