import React from 'react';

import Option from './Option';

//Stateless Functional Component
const Options = (props) => {
	return (
		<div>
			<div className='widget-header'>
				<h3>Your options</h3>
				<button onClick={props.delOptions} className='button button--link'>
					Remove All
				</button>
			</div>
			<ol className='widget-box'>
				{/* using map because returning an element of Option (li) */}
				{props.options.map((o, i) => (
					<Option
						key={i}
						optionText={o}
						delSingleOption={props.delSingleOption}
						count={i + 1}
					/>
				))}
			</ol>
			{props.options.length === 0 && (
				<p className='addOptionText'>Please add an option to get started!</p>
			)}
		</div>
	);
};

export { Options as default };
