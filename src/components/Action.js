import React from 'react';

//Stateless Functional Component
const Action = (props) => {
	return (
		<div>
			<button
				className='big-button'
				onClick={props.theAction}
				disabled={!props.hasOptions}
			>
				What should I do?
			</button>
		</div>
	);
};

export { Action as default };
