var React = require('react');
var Spinner = require('../');

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

React.render(<App />, document.querySelector('#content'));
