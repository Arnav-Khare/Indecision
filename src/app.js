console.log('App.js is running')

//JSX - javaScript XML
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
const app = {
    title : 'Indecision',
    subtitle : 'This Application let you decide your nex Task!!!',
    options:['One','Two']
};

const template = (
    <div>
    <h1><center>{app.title}</center></h1>
    {(app.subtitle)&&<center><p>{app.subtitle}</p></center>}
    <p>{app.options.length>0?'Here are your Options':'No Options'}</p>
    <ol>
        <li>Item one</li>
        <li>Item Two</li>
    </ol>
    </div>
)
const user ={
    name:'Arnav Khare',
    age:19,
    location:'Gonda ,Uttar-Pradesh'
};

function getLocation(location)
{
    if(location)
    {
        return location;
    }
    else{
        return 'UnKnown';
    }
};
const template2=(
    <div>
        <h1>Arnav Khare</h1>
        <p>Age:19</p>
        
        <p>Location: {getLocation(user.location)}</p>
    </div>
) 
const appRoot=document.getElementById('app')
const appRoot2=document.getElementById('challenge')

//ReactDOM.render(template,appRoot);
//  ReactDOM.render(template2,appRoot2);

//-------------------------------------------------------------------------------------------------------------------------------------------------------
 

const square1=(fullname) => (fullname.split(' ')[0]);

const fullname='Arnav Khare'
console.log(square1(fullname));