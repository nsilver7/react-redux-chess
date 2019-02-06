import React, { Component } from "react";
import {connect} from 'react-redux';
import FlipButton from "../components/FlipButton";
import NewGameButton from "../components/NewGameButton";

class LeftAsideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <React.Fragment>
        <aside className="aside aside-1">
          <p>Settings</p>
          <FlipButton size={50} onClick={this.props.onFlipClick}/>
          <NewGameButton size={50} onClick={this.props.onNewGameClick}/>
        </aside>
      </React.Fragment>
    );
  }

}

function mapStateToProps(state) {
  // TODO maybe make the settings panel collapsable via state
  return {ui: state.mood}
}

function mapDispatchToProps(dispatch) {
  return {

    onFlipClick: () => {
      dispatch({
        type: 'FLIP_BOARD'
      });
      console.log('flip the board');
    },

    onNewGameClick: () => {
      dispatch({
        type: 'NEW_GAME'
      });
      console.log('start a new game');
    }

  }
}

LeftAsideContainer.defaultProps = {
  ui: 'open'
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftAsideContainer);
