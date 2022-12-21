import React from 'react';

import Modal from 'react-modal';

const OptionModal = (props) => (
	<Modal
		//converting undefined to false or true
		isOpen={!!props.selectedOption}
		contentLabel='Selected Option'
		onRequestClose={props.clearSelectedOption}
		closeTimeoutMS={500}
		className='modal'
	>
		<h3>Selected Option</h3>
		{props.selectedOption && <p>{props.selectedOption}</p>}
		<button onClick={props.clearSelectedOption} className='button'>
			Okay
		</button>
	</Modal>
);

export { OptionModal as default };
