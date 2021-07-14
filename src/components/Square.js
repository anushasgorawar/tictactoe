import React from 'react'
const Square = ({value})=>{
console.log(value)
	return (
		<button type="button" class="btn square">
		{value}
		</button>
	);
};
export default Square;
