import Chess from 'chess.js';
import { NEW_GAME, MOVE_PIECE, LOAD_FEN_POSITION, COACH_HAPPY, COACH_NORMAL, COACH_SHOCKED, COACH_SAD } from '../actions';
//import * from '../vendor/stockfish.js';
//var stockfish = require("../vendor/stockfish.js");

let game = new Chess();
//var engine = stockfish();
//const stockfish = new Worker("../vendor/stockfish.js");


/*
stockfish.postMessage('setoption name MultiPV value 2');
stockfish.postMessage('ucinewgame');
stockfish.postMessage('setoption name UCI_AnalyseMode value true');
stockfish.postMessage('position startpos moves e2e4 e7e5 g1f3 b8c6 f1b5 g8f6');
stockfish.postMessage('go infinite');
*/

/*
Term    |    White    |    Black    |    Total
            |   MG    EG  |   MG    EG  |   MG    EG
------------+-------------+-------------+------------
   Material |  ----  ---- |  ----  ---- |  0.00  0.00
  Imbalance |  ----  ---- |  ----  ---- |  0.00  0.00
 Initiative |  ----  ---- |  ----  ---- |  0.00  0.00
      Pawns |  0.30 -0.07 |  0.30 -0.07 |  0.00  0.00
    Knights |  0.07 -0.10 |  0.07 -0.10 |  0.00  0.00
    Bishops | -0.18 -0.44 | -0.18 -0.44 |  0.00  0.00
      Rooks | -0.38  0.00 | -0.38  0.00 |  0.00  0.00
     Queens | -0.00  0.00 | -0.00  0.00 |  0.00  0.00
   Mobility | -0.79 -0.94 | -0.79 -0.94 |  0.00  0.00
King safety |  1.04 -0.07 |  1.04 -0.07 |  0.00  0.00
    Threats |  0.06  0.02 |  0.06  0.02 |  0.00  0.00
     Passed |  0.00  0.00 |  0.00  0.00 |  0.00  0.00
      Space |  0.53  0.00 |  0.53  0.00 |  0.00  0.00
    Variant |  0.00  0.00 |  0.00  0.00 |  0.00  0.00
------------+-------------+-------------+------------
      Total |  ----  ---- |  ----  ---- |  0.00  0.00

Total evaluation: 0.08 (white side)
*/

function parseEval(data) {
  let posScores = {
    material: {
      white: {
        middleGame: 0,
        endGame: 0
      },
      black: {
        middleGame: 0,
        endGame: 0
      },
      total: {
        middleGame: 0,
        endGame: 0
      }
    },
    imbalance: {
      white: {
        middleGame: 0,
        endGame: 0
      },
      black: {
        middleGame: 0,
        endGame: 0
      },
      total: {
        middleGame: 0,
        endGame: 0
      }
    },
    initiative: {
      white: {
        middleGame: 0,
        endGame: 0
      },
      black: {
        middleGame: 0,
        endGame: 0
      },
      total: {
        middleGame: 0,
        endGame: 0
      }
    },
    pawns: {
      white: {
        middleGame: 0,
        endGame: 0
      },
      black: {
        middleGame: 0,
        endGame: 0
      },
      total: {
        middleGame: 0,
        endGame: 0
      }
    },
    knights: {
      white: {
        middleGame: 0,
        endGame: 0
      },
      black: {
        middleGame: 0,
        endGame: 0
      },
      total: {
        middleGame: 0,
        endGame: 0
      }
    },
    bishops: {
      white: {
        middleGame: 0,
        endGame: 0
      },
      black: {
        middleGame: 0,
        endGame: 0
      },
      total: {
        middleGame: 0,
        endGame: 0
      }
    },
    rooks: {
      white: {
        middleGame: 0,
        endGame: 0
      },
      black: {
        middleGame: 0,
        endGame: 0
      },
      total: {
        middleGame: 0,
        endGame: 0
      }
    },
    queens: {
      white: {
        middleGame: 0,
        endGame: 0
      },
      black: {
        middleGame: 0,
        endGame: 0
      },
      total: {
        middleGame: 0,
        endGame: 0
      }
    },
    mobility: {
      white: {
        middleGame: 0,
        endGame: 0
      },
      black: {
        middleGame: 0,
        endGame: 0
      },
      total: {
        middleGame: 0,
        endGame: 0
      }
    },
    kingsafety: {
      white: {
        middleGame: 0,
        endGame: 0
      },
      black: {
        middleGame: 0,
        endGame: 0
      },
      total: {
        middleGame: 0,
        endGame: 0
      }
    },
    threats: {
      white: {
        middleGame: 0,
        endGame: 0
      },
      black: {
        middleGame: 0,
        endGame: 0
      },
      total: {
        middleGame: 0,
        endGame: 0
      }
    },
    passed: {
      white: {
        middleGame: 0,
        endGame: 0
      },
      black: {
        middleGame: 0,
        endGame: 0
      },
      total: {
        middleGame: 0,
        endGame: 0
      }
    },
    space: {
      white: {
        middleGame: 0,
        endGame: 0
      },
      black: {
        middleGame: 0,
        endGame: 0
      },
      total: {
        middleGame: 0,
        endGame: 0
      }
    },
    total: 0
  }

  let rows = data.split("\n");

  for (let i=0; i < rows.length; i++) {
    console.log(rows[i]);
  }

  return posScores
}
/*stockfish.addEventListener('message', function (e) {
  console.log(e.data);
  //parseEval(e.data);
});*/
/*
stockfish.onmessage = (m) => {
  console.log('msg from worker: ', m.data);
};

stockfish.postMessage('uci');

setTimeout(function (){

  // Something you want delayed.
  console.log('ping');
  stockfish.postMessage('eval');

}, 3000);*/



/******************************/

function canMove(fromSquare, toSquare) {
  const legalMoves = game.moves({ verbose: true });

  if (typeof toSquare === 'undefined') {
    return legalMoves
      .filter(legalMove => legalMove.from === fromSquare).length > 0;
  }

  return legalMoves
    .filter(legalMove => legalMove.from === fromSquare &&
                         legalMove.to === toSquare).length > 0;
}

function makeRandomMove() {
  const legalMoves = game.moves();
  const randomMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];

  game.move(randomMove);
}

const initialState = {
  pgn: '',
  fen: game.fen(),
  moves: 0,
  turnColor: 'white',
  rrHack: 'on',
  orientation: 'white',
  structure: {
    name: '',
    wplans: '',
    bplans: ''
  },
  mood: 'normal',
  coachStatus: 'idea'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_GAME:
      game = new Chess();
      return { ...initialState, rrHack: 'off' };

    case MOVE_PIECE:
      // see if the move is legal
      let move = game.move({
        from: action.fromSquare,
        to: action.toSquare,
        promotion: "q" // always promote to a queen for example simplicity
      });

      // illegal move
      if (move === null) {
        console.log('illegal move');
        return { ...state, rrHack: state.rrHack === 'on' ? 'off' : 'on' };
      }

      // call stockfish here?
      //stockfish.postMessage('ucinewgame');

      // update PGN
      let gamePgn = game.history();  // -> ['e4', 'e5', 'f4', 'exf4', 'd4']
      // transform into a string '1.e4 e5 2.f4 exf4 3.d4'
      let numMoves = Math.round(gamePgn.length / 2);
      let moveNum = 1;
      let newPgn = '';
      for (var move = 0; move < numMoves; move++) {
        var movePair = gamePgn.splice(0,2);  // remove the first 2 moves from array and copy to movePair
        if (movePair.length === 1) {     // ugly bounds-check and make sure im not accessing movePair[1]
          newPgn = newPgn + moveNum + '.' + movePair[0] + ' ';
        } else if (movePair.length === 2) {
          newPgn = newPgn + moveNum + '.' + movePair[0] + ' ' + movePair[1] + ' ';
        }

        moveNum++;
      }

      return {
        pgn: newPgn,
        fen: game.fen(),
        moves: numMoves,
        turnColor: state.turnColor === 'white' ? 'black' : 'white',
        structure: {
          name: '',
          wplans: '',
          bplans: ''
        }
      };

    case LOAD_FEN_POSITION:
      game = new Chess();
      game.load(action.fen);
      return {
        pgn: '',
        fen: game.fen(),
        moves: 0,
        structure: {
          name: '',
          wplans: '',
          bplans: ''
        }
      };

    case COACH_HAPPY:
      //console.log('COACH_HAPPY action just hit the reducer!')
      return {...state, mood: 'happy'};

    case COACH_NORMAL:
      return {...state, mood: 'normal'};

    case COACH_SHOCKED:
      return {...state, mood: 'shocked'};

    case COACH_SAD:
      return {...state, mood: 'sad'};

    case 'FLIP_BOARD':
      return {
        ...state,
        orientation: state.orientation === 'white' ? 'black' : 'white'
      };

    default:
      return state;
  }
}
