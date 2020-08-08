'use strict';

console.log('App.js is running');

//JSX - javaScript XML
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
var app = {
    title: 'Indecision',
    subtitle: 'This Application let you decide your nex Task!!!',
    options: ['One', 'Two']
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
    app.subtitle && React.createElement(
        'center',
        null,
        React.createElement(
            'p',
            null,
            app.subtitle
        )
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your Options' : 'No Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);
var user = {
    name: 'Arnav Khare',
    age: 19,
    location: 'Gonda ,Uttar-Pradesh'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'UnKnown';
    }
};
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
        'Location: ',
        getLocation(user.location)
    )
);
var appRoot = document.getElementById('app');
var appRoot2 = document.getElementById('challenge');

//ReactDOM.render(template,appRoot);
//  ReactDOM.render(template2,appRoot2);

//-------------------------------------------------------------------------------------------------------------------------------------------------------


var square1 = function square1(fullname) {
    return fullname.split(' ')[0];
};

var fullname = 'Arnav Khare';
console.log(square1(fullname));
