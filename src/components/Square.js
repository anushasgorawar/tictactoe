import React from 'react'
const Square = ({value,onClick,isWinningSquares})=>{
	return (
		<button type="button" className="btn square" onClick={onClick} style={{fontWeight: isWinningSquares?'bold':'normal'}}>
		{value}
		</button>
	);
};
export default Square;
 