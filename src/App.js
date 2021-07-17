import React, { useState } from 'react';
import Board from './components/Board';
import {calculateWinner} from './helpers';
import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setXnext] = useState(false);

const winner = calculateWinner(board);

const XorNot = isXNext? 'X to play': 'O to play'
const message = winner? `Winner is ${winner}`: XorNot;

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setXnext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>Tic-Tac-Toe! </h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
