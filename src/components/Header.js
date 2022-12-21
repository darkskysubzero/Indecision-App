import React from 'react';

//Stateless Functional Component
const Header = (props) => {
	return (
		<div className='header'>
			<div className='container'>
				<h1>{props.title}</h1>
				{/* if subtitle is provided then use that otherwise use the one that is set by default */}
				{props.subtitle && <h2>{props.subtitle}</h2>}
			</div>
		</div>
	);
};

//Default Parameters for Props
Header.defaultProps = {
	title: 'Indecision App',
	subtitle: 'hi',
};

export { Header as default };
