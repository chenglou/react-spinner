/** @jsx React.DOM */

var App = React.createClass({
  render: function() {
    var style = {
      height: 50,
      width: 50
    };
    return (
      <div style={style}>
        <Spinner />
      </div>
    );
  }
});

React.renderComponent(<App />, mountNode);
