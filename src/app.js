console.log('App.js is running')

//JSX - javaScript XML
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
var app = {
    title : 'Indecision',
    subtitle : 'This Application let you decide your nex Task!!!'
};
var template = (
    <div>
    <h1><center>{app.title}</center></h1>
    <p>{app.subtitle}</p>
    </div>
)

var template2=(
    <div>
        <h1>Arnav Khare</h1>
        <p>Age:19</p>
        <p>Location: Gonda,Uttar-Pradesh,INDIA</p>
    </div>
)
var appRoot=document.getElementById('app')
var appRoot2=document.getElementById('challenge')

ReactDOM.render(template,appRoot);
// ReactDOM.render(template2,appRoot2);