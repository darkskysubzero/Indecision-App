class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: props.options, //getting optiions from props
    }

    //binding methods
    this.deleteOptions = this.deleteOptions.bind(this)
    this.theAction = this.theAction.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteSingleOption = this.deleteSingleOption.bind(this)
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          theAction={this.theAction}
        />
        <Options
          options={this.state.options}
          delOptions={this.deleteOptions}
          delSingleOption={this.deleteSingleOption}
        />
        <AddOption addItem={this.addItem} />
      </div>
    )
  }

  deleteOptions() {
    /*
        this.setState(()=>{
            return {
                options:[]
            }
        })
        */

    this.setState(() => ({ options: [] }))
  }

  deleteSingleOption(optionToRemove) {
    console.log('del : ', optionToRemove)
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return optionToRemove !== option
        }),
      }
    })
  }

  theAction() {
    let ran = Math.floor(Math.random() * this.state.options.length)
    alert(`Pick : ${this.state.options[ran]}`)
  }

  addItem(option) {
    //some validation
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    //else if no error
    //using different syntax
    //concat appends to array
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }))
  }

  //Lifecycle methods (there are more on facebook io)
  componentDidMount() {
    //When a component did show on the screen
    console.log('Indecision App Loaded!')

    //Catching errors (parsing errors)
    try {
      //Practical example (fetching data)
      const json = localStorage.getItem('options')
      const optionsArray = JSON.parse(json)

      //if not null
      if (optionsArray) {
        this.setState(() => {
          return {
            options: optionsArray,
          }
        })
      } else {
        console.log('option array is null')
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //executed when something changed!

    //Practical example (saving data locally)

    //if current length of options differs to previous
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {
    //When a component is removed from the screen
  }
}

//Default Props for IndecisionApp
IndecisionApp.defaultProps = {
  options: [],
}

//Stateless Functional Component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {/* if subtitle is provided then use that otherwise use the one that is set by default */}
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

//Default Parameters for Props
Header.defaultProps = {
  title: 'Indecision App',
  subtitle: 'hi',
}

//Stateless Functional Component
const Action = (props) => {
  return (
    <div>
      <button onClick={props.theAction} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  )
}

//Stateless Functional Component
const Options = (props) => {
  return (
    <div>
      <ol>
        {props.options.map((o, i) => (
          <Option
            key={i}
            optionText={o}
            delSingleOption={props.delSingleOption}
          />
        ))}
      </ol>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      <button onClick={props.delOptions}>Remove All</button>
    </div>
  )
}

//Stateless Functional Component
const Option = (props) => {
  return (
    <li>
      {props.optionText}
      {/* passing in arrow function */}
      <button
        onClick={(e) => {
          props.delSingleOption(props.optionText)
        }}
      >
        Remove
      </button>
    </li>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.addItem = this.addItem.bind(this)

    //state object for this component
    this.state = {
      error: undefined,
    }
  }

  addItem(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.addItem(option)

    //different syntax
    this.setState(() => ({ error: error }))

    //if there is no error clear input
    if (!error) {
      e.target.elements.option.value = ''
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addItem} autoComplete='off'>
          <input type='text' name='option' />
          <button>Add Item</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
