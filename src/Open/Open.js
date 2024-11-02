import React from "react";
import "./Open.css";







 class Open extends React.Component {
    onclick () {
      window.location.assign('http://localhost:3000/new');
    }

    render() {
      return (<button className="new-page-container" onClick={(e) => this.onclick(e)}>new</button>);
    }
  }
export default Open;