'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: props.options //getting optiions from props


      //binding methods
    };_this.deleteOptions = _this.deleteOptions.bind(_this);
    _this.theAction = _this.theAction.bind(_this);
    _this.addItem = _this.addItem.bind(_this);
    _this.deleteSingleOption = _this.deleteSingleOption.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'render',
    value: function render() {
      var subtitle = 'Put your life in the hands of a computer';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          theAction: this.theAction
        }),
        React.createElement(Options, {
          options: this.state.options,
          delOptions: this.deleteOptions,
          delSingleOption: this.deleteSingleOption
        }),
        React.createElement(AddOption, { addItem: this.addItem })
      );
    }
  }, {
    key: 'deleteOptions',
    value: function deleteOptions() {
      /*
          this.setState(()=>{
              return {
                  options:[]
              }
          })
          */

      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'deleteSingleOption',
    value: function deleteSingleOption(optionToRemove) {
      console.log('del : ', optionToRemove);
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: 'theAction',
    value: function theAction() {
      var ran = Math.floor(Math.random() * this.state.options.length);
      alert('Pick : ' + this.state.options[ran]);
    }
  }, {
    key: 'addItem',
    value: function addItem(option) {
      //some validation
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }

      //else if no error
      //using different syntax
      //concat appends to array
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }

    //Lifecycle methods (there are more on facebook io)

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      //When a component did show on the screen
      console.log('Indecision App Loaded!');

      //Catching errors (parsing errors)
      try {
        //Practical example (fetching data)
        var json = localStorage.getItem('options');
        var optionsArray = JSON.parse(json);

        //if not null
        if (optionsArray) {
          this.setState(function () {
            return {
              options: optionsArray
            };
          });
        } else {
          console.log('option array is null');
        }
      } catch (e) {
        // Do nothing at all
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      //executed when something changed!

      //Practical example (saving data locally)

      //if current length of options differs to previous
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //When a component is removed from the screen
    }
  }]);

  return IndecisionApp;
}(React.Component);

//Default Props for IndecisionApp


IndecisionApp.defaultProps = {
  options: []

  //Stateless Functional Component
};var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

//Default Parameters for Props
Header.defaultProps = {
  title: 'Indecision App',
  subtitle: 'hi'

  //Stateless Functional Component
};var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.theAction, disabled: !props.hasOptions },
      'What should I do?'
    )
  );
};

//Stateless Functional Component
var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'ol',
      null,
      props.options.map(function (o, i) {
        return React.createElement(Option, {
          key: i,
          optionText: o,
          delSingleOption: props.delSingleOption
        });
      })
    ),
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'Please add an option to get started!'
    ),
    React.createElement(
      'button',
      { onClick: props.delOptions },
      'Remove All'
    )
  );
};

//Stateless Functional Component
var Option = function Option(props) {
  return React.createElement(
    'li',
    null,
    props.optionText,
    React.createElement(
      'button',
      {
        onClick: function onClick(e) {
          props.delSingleOption(props.optionText);
        }
      },
      'Remove'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.addItem = _this2.addItem.bind(_this2);

    //state object for this component
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'addItem',
    value: function addItem(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.addItem(option);

      //different syntax
      this.setState(function () {
        return { error: error };
      });

      //if there is no error clear input
      if (!error) {
        e.target.elements.option.value = '';
      }
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
          { onSubmit: this.addItem, autoComplete: 'off' },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Item'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
