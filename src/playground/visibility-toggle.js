class Visibility extends React.Component{   

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        
        this.state = {
            visible:false
        }
    }

    toggle(){
       
        this.setState((prevState)=>{
            return{
                visible: !prevState.visible
            }
        })
        console.log(this.state);


    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>{this.state.visible ? "Hide":"Show"}</button>
                {this.state.visible && <p>This the hidden text!</p>}

            </div>
        )
    }

}

ReactDOM.render(<Visibility/>, document.getElementById("app"));





// let visibility = false;

// const toggleElement = ()=>{
//     visibility = !visibility;
//     render();
// }


// function render(){
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleElement}>{visibility? 'Hide details' : 'Show details'}</button>

//             {/* <p hidden={visibility} >Hey. These are some details you can now see!</p> */}
//             {/* Alternative */}
//             { visibility && <p>Hey. These are some details you can now see!</p>}

            

//         </div>
//     );

//     const root = document.getElementById("app");
//     ReactDOM.render(template,root);
// }

// render();
 