'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

var Indecision = function (_React$Component) {
    _inherits(Indecision, _React$Component);

    function Indecision(props) {
        _classCallCheck(this, Indecision);

        var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(Indecision, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {

            if (!option) {
                return 'Enter Valid Text!!!!';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'GIven option already present in the list!!';
            }

            this.setState(function (prevState) {
                return {
                    option: prevState.options.push(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subtitle = 'Put you tasks in the Hands of a Computer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Buttons, { arr: this.state.options }),
                React.createElement(Options, { arr: this.state.options, handleRemoveAll: this.handleRemoveAll }),
                React.createElement(AddOptions, { arr: this.state.options, handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return Indecision;
}(React.Component);
//Adding Title and Subtitle to my Application ->---------------------------------------------------------------------------------------------------------


var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h3',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);
//Adding Random Picking Button->-------------------------------------------------------------------------------------------------------------------------


var Buttons = function (_React$Component3) {
    _inherits(Buttons, _React$Component3);

    function Buttons(props) {
        _classCallCheck(this, Buttons);

        var _this3 = _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call(this, props));

        _this3.handlePick = _this3.handlePick.bind(_this3);
        return _this3;
    }

    _createClass(Buttons, [{
        key: 'handlePick',
        value: function handlePick() {
            var inde = Math.floor(Math.random() * this.props.arr.length);
            console.log(this.props.arr[inde]);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        disabled: this.props.arr.length === 0,
                        onClick: this.handlePick },
                    'What Should I Do..???'
                )
            );
        }
    }]);

    return Buttons;
}(React.Component);

//Adding Remove All Button and Render Options ->--------------------------------------------------------------------------------------------------------

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleRemoveAll },
                    'Reset All'
                ),
                this.props.arr.map(function (e) {
                    return React.createElement(OptionsComponent, { key: e, value: e });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

//Adding Options In an Array->--------------------------------------------------------------------------------------------------------------------------


var AddOptions = function (_React$Component5) {
    _inherits(AddOptions, _React$Component5);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this5 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this5.handleAddOptions = _this5.handleAddOptions.bind(_this5);
        _this5.state = {
            error: undefined
        };
        return _this5;
    }

    _createClass(AddOptions, [{
        key: 'handleAddOptions',
        value: function handleAddOptions(e) {
            e.preventDefault();
            var error = this.props.handleAddOption(e.target.text.value);
            e.target.text.value = '';
            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOptions },
                    React.createElement('input', { type: 'text ', name: 'text' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

//Rendering Each option to the Screen ->----------------------------------------------------------------------------------------------------------------

var OptionsComponent = function (_React$Component6) {
    _inherits(OptionsComponent, _React$Component6);

    function OptionsComponent() {
        _classCallCheck(this, OptionsComponent);

        return _possibleConstructorReturn(this, (OptionsComponent.__proto__ || Object.getPrototypeOf(OptionsComponent)).apply(this, arguments));
    }

    _createClass(OptionsComponent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    this.props.value
                )
            );
        }
    }]);

    return OptionsComponent;
}(React.Component);

ReactDOM.render(React.createElement(Indecision, null), document.getElementById('app'));
