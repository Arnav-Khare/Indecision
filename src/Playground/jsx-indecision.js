console.log('App.js is running')

const appRoot=document.getElementById('app')
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
const app = {
    title : 'Indecision',
    subtitle : 'This Application let you decide your nex Task!!!',
    options:[]
};

const formSubmit=(e)=>{
    e.preventDefault();
   const value=e.target.options.value
   app.options.push(value);
   e.target.options.value='';
   renderData();
}
const RemoveAll=()=>{
    app.options=[];
    renderData();
}
const getRandom=()=>{
    const index = Math.floor(Math.random()*app.options.length);
    console.log(app.options[index]);
}
const renderData=()=>{
    const template = (
        <div>
        <h1><center>{app.title}</center></h1>
        {(app.subtitle)&&<center><p>{app.subtitle}</p></center>}
        <p>{app.options.length>0?'Here are your Options':'No Options'}</p>
        <p>{app.options.length}</p>
        <button disabled={app.options.length===0} onClick={getRandom}>What Should i do!!</button>
        <button onClick={RemoveAll}>Remove All</button>
        <ol>
        {
            app.options.map((e)=>{
                return <li key={e}>Option :{e}</li>
            })
        }
        </ol>
        <form onSubmit={formSubmit}>
            <input type="text" name="options"></input>
            <button>Add Options</button>
        </form>
        </div>
    )
    ReactDOM.render(template,appRoot);
}
renderData();