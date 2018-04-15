import React from "react";
import { render } from "react-dom";
import { ReactMdeDemo } from "./ReactMdeDemo";
import "react-mde/lib/styles/css/react-mde-all.css";

class App extends React.Component {


  render() {
    return (
      <div className="container">
        <ReactMdeDemo />
      </div>
      )
  }
};

render()

