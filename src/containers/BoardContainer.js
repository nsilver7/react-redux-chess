import React, { Component } from "react";
import Board from "../components/Board";
import {connect} from 'react-redux';
import NotationPanel from "../components/NotationPanel";

class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <React.Fragment>
        <Board orientation={this.props.orientation}/><br />
        <NotationPanel/>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {orientation: state.orientation}
}

function mapDispatchToProps(dispatch) {
  return {

    onFlipClick: () => {
      dispatch({
        type: 'FLIP_BOARD'
      });
      console.log('flip the board');
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
