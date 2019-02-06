import React, { Component } from "react";
import CoachContainer from "./CoachContainer";

class RightAsideContainer extends Component {
  render () {
    return (
      <React.Fragment>
        <aside className="aside aside-2">
          <CoachContainer/>
        </aside>
      </React.Fragment>
    );
  }
}

export default RightAsideContainer;
