import React from 'react';

const History = ({ history,moveTo,currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        console.log();
        return (
          <li key={move}>
            <button style={
{ fontWeight: move===currentMove?'bold':'normal'}}
              type="button" className={`history ${move===currentMove?'active':''}`}
              onClick={() => {
                moveTo(move)
              }}
            >
              {move === 0 ? `Go to game start` : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default History;
