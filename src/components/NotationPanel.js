import React, { Component } from "react";
import { connect } from 'react-redux';
import { NEW_GAME, MOVE_PIECE, LOAD_FEN_POSITION, COACH_HAPPY, coachIsHappy } from '../actions';

class NotationPanel extends Component {

  loadFen = () => {
    //load FEN string
    //let fen = document.getElementById("fenString").textContent;

    //this.props.dispatch({ type: 'LOAD_FEN_POSITION', fen: 'fen' });
    //store.dispatch({ type: 'COACH_HAPPY' });

    //console.log('store?: ' + this.context.store);
    console.log('ping');
  }

  saveFen = () => {
    //ajax call endpoint to save FEN to DB
    //let fen = document.getElementById("fenString").textContent;
  }

  loadPgn = (pgn) => {
    //load PGN notation

  }

  savePgn = () => {
    //save the PGN
  }

  render() {
    return (
      <div>
        <div style={notationContainer}>
          <div id='pgnDiv'>{this.props.pgn}</div>
          <div id='fenDiv'>
            <span id='fenString'>{this.props.fen}</span>
            <button onClick={this.loadFen}>Load Fen</button>
            <button onClick={this.saveFen()}>Save Fen</button>
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    pgn: state.pgn,
    fen: state.fen
  };
}

const mapDispatchToProps = dispatch => {
  return {
    happyCoach: () =>
      dispatch({
        type: 'COACH_HAPPY'
      })
  }
}

//export default NotationPanel;
export default connect(mapStateToProps,mapDispatchToProps)(NotationPanel);

const notationContainer = {
  //display: "flex"
};
