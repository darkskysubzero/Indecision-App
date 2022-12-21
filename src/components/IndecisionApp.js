import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined,
	};

	render() {
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header subtitle={subtitle} />
				<div className='container'>
					<Action
						hasOptions={this.state.options.length > 0}
						theAction={this.theAction}
					/>

					<div className='widget'>
						<Options
							options={this.state.options}
							delOptions={this.deleteOptions}
							delSingleOption={this.deleteSingleOption}
						/>
						<AddOption addItem={this.addItem} />
					</div>

					<OptionModal
						selectedOption={this.state.selectedOption}
						clearSelectedOption={this.clearSelectedOption}
					/>
				</div>
			</div>
		);
	}

	deleteOptions = () => {
		/*
          this.setState(()=>{
              return {
                  options:[]
              }
          })
          */

		this.setState(() => ({ options: [] }));
	};

	deleteSingleOption = (optionToRemove) => {
		console.log('del : ', optionToRemove);
		this.setState((prevState) => {
			return {
				options: prevState.options.filter((option) => {
					return optionToRemove !== option;
				}),
			};
		});
	};

	theAction = () => {
		let ran = Math.floor(Math.random() * this.state.options.length);
		this.setState(() => {
			return {
				selectedOption: this.state.options[ran],
			};
		});
		// alert(`Pick : ${this.state.options[ran]}`);
	};

	clearSelectedOption = () => {
		this.setState(() => {
			return {
				selectedOption: undefined,
			};
		});
	};

	addItem = (option) => {
		//some validation
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		//else if no error
		//using different syntax
		//concat appends to array
		this.setState((prevState) => ({
			options: prevState.options.concat(option),
		}));
	};

	//Lifecycle methods (there are more on facebook io)
	componentDidMount() {
		//When a component did show on the screen
		console.log('Indecision App Loaded!');

		//Catching errors (parsing errors)
		try {
			//Practical example (fetching data)
			const json = localStorage.getItem('options');
			const optionsArray = JSON.parse(json);

			//if not null
			if (optionsArray) {
				this.setState(() => {
					return {
						options: optionsArray,
					};
				});
			} else {
				console.log('option array is null');
			}
		} catch (e) {
			// Do nothing at all
		}
	}

	componentDidUpdate(prevProps, prevState) {
		//if current length of options differs to previous
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	componentWillUnmount() {
		//When a component is removed from the screen
	}
}

// //Default Props for IndecisionApp
// IndecisionApp.defaultProps = {
// 	options: ['hi'],
// };

export default IndecisionApp;
