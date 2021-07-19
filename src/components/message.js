import React from 'react';

const Message = ({ winner, current }) => {
const noMovesLeft = current.board.every(el=>
el!==null)
  return <h2>
{winner && `${winner} won!`}
{!winner && !noMovesLeft && `${current.isXNext?"X's":"O's"} move`}
{!winner && noMovesLeft && "It's a draw"} 
</h2>;
};

export default Message;
 