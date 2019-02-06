export const LOAD_FEN_POSITION = 'LOAD_FEN_POSITION';
export const NEW_GAME = 'NEW_GAME';
export const MOVE_PIECE = 'MOVE_PIECE';
export const COACH_NORMAL = 'COACH_NORMAL';
export const COACH_SHOCKED = 'COACH_SHOCKED';
export const COACH_HAPPY = 'COACH_HAPPY';
export const COACH_SAD = 'COACH_SAD';

export const newGame = () => ({ type: NEW_GAME });

export const movePiece = (fromSquare, toSquare) => ({ type: MOVE_PIECE, fromSquare, toSquare });

export const coachIsHappy = () => ({ type: COACH_HAPPY });
