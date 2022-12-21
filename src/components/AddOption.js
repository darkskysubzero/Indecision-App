import React from 'react';

class AddOption extends React.Component {
	//state object for this component
	state = {
		error: undefined,
	};

	addItem = (e) => {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.addItem(option);

		//different syntax
		this.setState(() => ({ error: error }));

		//if there is no error clear input
		if (!error) {
			document
				.querySelector('.widget-box')
				.lastElementChild.scrollIntoView({ behavior: 'smooth' });
			e.target.elements.option.value = '';
		}
	};

	render() {
		return (
			<div>
				{this.state.error && <p className='errorMessage'>{this.state.error}</p>}
				<form onSubmit={this.addItem} autoComplete='off'>
					<input type='text' name='option' />
					<button className='button'>Add Item</button>
				</form>
			</div>
		);
	}
}

export { AddOption as default };
