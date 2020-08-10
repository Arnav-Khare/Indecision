'use strict';

console.log('App.js is running');

var appRoot = document.getElementById('app');
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
var app = {
    title: 'Indecision',
    subtitle: 'This Application let you decide your nex Task!!!',
    options: []
};
var renderData = function renderData() {
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
            'p',
            null,
            app.options.length
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
        ),
        React.createElement(
            'form',
            { onSubmit: formSubmit },
            React.createElement('input', { type: 'text', name: 'options' }),
            React.createElement(
                'button',
                null,
                'Add Options'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
var formSubmit = function formSubmit(e) {
    e.preventDefault();
    var value = e.target.options.value;
    app.options.push(value);
    e.target.options.value = '';
    renderData();
};
renderData();
//-------------------------------------------------------------------------------------------------------------------------------------------------------
// const multiplier={
//     numbers:[1,2,3,4,5,6,7,8,9],
//     multiply:7,
//     getMultiply(){
//         return this.numbers.map((num)=> (this.multiply*num))
//     }
// }
// console.log(multiplier.getMultiply());
