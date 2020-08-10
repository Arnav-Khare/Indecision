let flag=false;
const appRoot=document.getElementById('app');

const showDetails=()=>{
    if(flag)
    {
        flag=false;
    }
    else
    {
        flag=true;
    }
    jarvis();
}
const jarvis=()=>{
    const template=(
        <div>
            <h1>Visibilty Toggle</h1>
            <button onClick={showDetails}>{flag?'Hide Details!!':'Show Details!!!'}</button>
            {flag? <p>You can Now See the Details!!!</p>:undefined }
        </div>
    )
    
    ReactDOM.render(template,appRoot);
}

jarvis();   