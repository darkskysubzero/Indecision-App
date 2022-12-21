const app = {
    title: 'Indecision App',
    subtitle : 'Put your life in the hands of a computer',
    options : []
}



const dosomething = (e)=>{
    e.preventDefault();

    //get option from input field
    const option = e.target.elements.option.value;
    if(option){
        //if option is not blank push it to array
        app.options.push(option); 
        renderUI();
    }
}

const removeitems = ()=>{
    app.options.length = 0;
    renderUI();
    window.location.reload();
}
 
const makedecision = ()=>{
    //generating random number between 1 and length of array
    const ran = Math.floor(Math.random()*app.options.length);
    const option = app.options[ran];
    alert(option);
}

const renderUI = ()=>{
    const templateOne = (
        <div>
            <h1>{app.title}</h1>
            {/* if first one is false second wont execute */}
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? 'Here are your options':'No options'}</p>
            <button onClick={makedecision} disabled={app.options.length===0}>What should I do?</button>
            <button onClick={removeitems}>Empty Array</button>
            <ol>
                {
                    //using index as key and option as value
                    app.options.map((option,index)=> <li key={index}>{option}</li>)
                }
            </ol>

           

            <form onSubmit={dosomething}>
                <input type='text' name='option' defaultValue='Item'/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    const root = document.getElementById("app");
    ReactDOM.render(templateOne,root);
}


renderUI();