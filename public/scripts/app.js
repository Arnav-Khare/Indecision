'use strict';

var flag = false;
var appRoot = document.getElementById('app');

var showDetails = function showDetails() {
    if (flag) {
        flag = false;
    } else {
        flag = true;
    }
    jarvis();
};
var jarvis = function jarvis() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibilty Toggle'
        ),
        React.createElement(
            'button',
            { onClick: showDetails },
            flag ? 'Hide Details!!' : 'Show Details!!!'
        ),
        flag ? React.createElement(
            'p',
            null,
            'You can Now See the Details!!!'
        ) : undefined
    );

    ReactDOM.render(template, appRoot);
};

jarvis();
