import React from 'react';

//Stateless Functional Component
const Option = (props) => {
	return (
		<li className='option'>
			<p>
				<span>{props.count}.</span>
				{props.optionText}
			</p>
			{/* passing in arrow function */}
			<button
				className='button button--link'
				onClick={(e) => {
					props.delSingleOption(props.optionText);
				}}
			>
				Remove
			</button>
		</li>
	);
};

export { Option as default };
