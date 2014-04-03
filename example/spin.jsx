/** @jsx React.DOM */

var Spinner = require('Spinner');
var React = require('React');

var App = React.createClass({
  render: function() {
    var style = {
      height: 50,
      width: 50,
      backgroundColor: 'black'
    };
    return (
      <div style={style}>
        <Spinner />
      </div>
    );
  }
});

React.renderComponent(<App />, mountNode);
