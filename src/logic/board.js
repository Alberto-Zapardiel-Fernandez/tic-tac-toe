import { WINNER_COMBOS } from '../assets/constants.js';
export const checkWinnerFrom = (boardToCheck) => {
  //Revisamos todas la combinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (boardToCheck[a] && boardToCheck[b] == boardToCheck[a] && boardToCheck[a] == boardToCheck[c]) {
      return boardToCheck[a];
    }
  }
  //No hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};
