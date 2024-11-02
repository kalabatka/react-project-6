import React from "react";








 class Close extends React.Component {
    onclick () {
      window.location.assign('http://localhost:3000');
    }

    render() {
      return (<button className="new-page-container" onClick={(e) => this.onclick(e)}>close</button>);
    }
  }
export default Close;