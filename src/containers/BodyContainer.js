import React, { Component } from "react";
import {connect} from 'react-redux';
import Board from "../components/Board";

class BodyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <React.Fragment>
        <article className="main">
          <Board
            orientation={this.props.orientation}
            fen={this.props.fen}
            turnColor={this.props.turnColor}
            movable={this.props.movable}
            events={this.props.events}
            onMove={this.props.onMove}
            style={{ margin: 'auto' }}
          />
          <input className="fenInput" value={this.props.fen} />
        </article>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    orientation: state.orientation,
    fen: state.fen,
    turnColor: state.turnColor,
    rrHack: state.rrHack,   // nasty way to hack a re-render (needed to redraw board in case of illegal move)
    movable: {
      free: true,           // all moves are valid - board editor
      color: state.turnColor,        // color that can move. "white" | "black" | "both" | null
      dests: {},            // valid moves. {a2: ["a3", "a4"], b1: ["a3", "c3"]} | null
      dropOff: "revert",    // when a piece is dropped outside the board. "revert" | "trash"
      showDests: false,      // add the move-dest class to squares
      events: {
        // called after the move has been played
        after: function(orig, dest, metadata) {
          console.log('made a move from: ' + orig + ' to: ' + dest + ' with: ' + metadata);
          // figure out how to dispatch here
          //onMove();
        }
        //after: {this.props.onMove}
      }
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {

    onMove: (from, to, meta) => {
      dispatch({
        type: 'MOVE_PIECE',
        fromSquare: from,
        toSquare: to,
        meta: meta
      });
      console.log('just made a move from square: ' + from);
    },

    onLoadFen: (fen) => {
      dispatch({
        type: 'LOAD_FEN_POSITION',
        fen: fen
      });
      console.log('Loading new FEN: ' + fen);
    },

    onFlipClick: () => {
      dispatch({
        type: 'FLIP_BOARD'
      });
      console.log('flip the board');
    }

  }
}

BodyContainer.propTypes = {

};


export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);
