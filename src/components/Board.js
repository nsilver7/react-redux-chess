import React from "react";
import Chessground from 'react-chessground'
import 'react-chessground/dist/styles/chessground.css'



const Board = (props) => (
  <Chessground
    orientation={props.orientation}
    fen={props.fen}
    turnColor={props.turnColor}
    movable={props.movable}
    events={props.events}
    onMove={props.onMove}
  />
)

export default Board;
