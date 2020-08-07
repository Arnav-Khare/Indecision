'use strict';

console.log('App.js is running');

//JSX - javaScript XML
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
var app = {
    title: 'Indecision',
    subtitle: 'This Application let you decide your nex Task!!!'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        React.createElement(
            'center',
            null,
            app.title
        )
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Arnav Khare'
    ),
    React.createElement(
        'p',
        null,
        'Age:19'
    ),
    React.createElement(
        'p',
        null,
        'Location: Gonda,Uttar-Pradesh,INDIA'
    )
);
var appRoot = document.getElementById('app');
var appRoot2 = document.getElementById('challenge');

ReactDOM.render(template, appRoot);
// ReactDOM.render(template2,appRoot2);
