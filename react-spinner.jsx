/**
* @jsx React.DOM
*/

var Spinner = React.createClass({
  render: function() {
    var bars = [];
    var big = this.props.big;
    var translateFromCenter = 9.5 * (big ? 2 : 1);

    var barStyle;
    var barClass = 'loading-spinner-bar' + (big ? ' loading-spinner-bar-big' : '');

    for (var i = 0; i < 12; i++) {
      barStyle = {};
      barStyle.WebkitAnimationDelay = barStyle.animationDelay = (i - 12) / 10 + 's';
      barStyle.WebkitTransform = barStyle.transform = 'rotate(' + (i * 30) + 'deg) translate(' + translateFromCenter + 'px)';
      bars.push(<div style={barStyle} className={barClass}/>);
    }

    var spinnerClass = 'loading-spinner' + (big ? ' loading-spinner-big' : '');
    return (
      <div className={spinnerClass}><div className="loading-spinner-inner">{bars}</div></div>
    );
  }
});
