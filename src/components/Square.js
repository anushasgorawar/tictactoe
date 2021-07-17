import React from 'react'
const Square = ({value,onClick})=>{
	return (
		<button type="button" className="btn square" onClick={onClick}>
		{value}
		</button>
	);
};
export default Square;
 