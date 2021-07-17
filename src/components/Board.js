import React, { useState } from 'react';
import Square from './Square';
const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [isXNext,setXnext] = useState(false);

  const handleSquareClick = (position) => {
    if(board[position]){ return;}
    setBoard( (prev)=>{
      return prev.map((square, pos)=>{
        if(pos===position){ 
          return isXNext?'X':'O';
        }return square;
        })
	  });
    setXnext((prev)=>!prev)
  }
  const rendersquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => {handleSquareClick(position)}}
      />
    );
  };
  console.log(board);
  return (
    <div className="board">
      <div className="board-row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>
      <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>
      <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  );
};
export default Board;
