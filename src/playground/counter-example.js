class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
    this.res = this.res.bind(this)

    //component state object
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    const num = parseInt(localStorage.getItem('count'))
    this.setState(() => {
      return {
        count: num,
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
  }

  inc() {
    //this function takes a callback method with a previous state argument
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }
  dec() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      }
    })
  }
  res() {
    //dont need previous state
    this.setState(() => {
      return {
        count: 0,
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.inc}>+1</button>
        <button onClick={this.dec}>-1</button>
        <button onClick={this.res}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

/*

let count = 0;
let someID = 'plus'

const addOne = ()=> {
    count++; 
    renderCounterApp();
}
const minOne = ()=> {
    count--;
    renderCounterApp();
}

const reset = ()=> {
    count = 0;
    renderCounterApp();
}


 
//JSX does not have built in data binding 
const renderCounterApp = ()=>{
    const templateTwo = (
        <div>
            <h1>Count : {count}</h1>
            <button id={someID} className='btn' onClick={addOne}>+1</button>
            <button id="mins" className='btn' onClick={minOne}>-1</button> 
            <button id="reset" className='btn' onClick={reset}>Reset</button> 
        </div>
    );
    ReactDOM.render(templateTwo,root);
}


renderCounterApp();

*/
