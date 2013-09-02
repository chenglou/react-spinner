/**
* @jsx React.DOM
*/

function shallowClone(obj) {
  var returnObj = {};
  for (var key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    returnObj[key] = obj[key];
  }
  return returnObj;
}

var Spinner = React.createClass({
  getInitialState: function() {
    return {leadingBar: 0};
  },

  componentDidMount: function() {
    this.interval = setInterval(function() {
      this.setState({
        leadingBar: this.state.leadingBar === 11 ? 0 : this.state.leadingBar + 1
      });
    }.bind(this), 100);
  },

  render: function() {
    var bars = [];
    var barWidth = 13;
    var barHeight = 4;

    var generalStyle = {
      borderRadius: 5,
      // '-webkit-transform-origin': '50% 50%',
      width: barWidth,
      height: barHeight,
      backgroundColor: 'white',
      position: 'absolute',
      top: -barHeight / 2,
      left: -barWidth / 2,
    };
    var specificStyle;
    var barColor;

    for (var i = 0; i < 12; i++) {
      specificStyle = shallowClone(generalStyle);
      specificStyle['-webkit-transform'] =
        'rotate(' + (i * 30) + 'deg) translate(19px)';

      barColor = this.state.leadingBar - i;
      if (barColor < 0) barColor += 12;
      barColor *= 17;
      barColor = 255 - barColor;
      specificStyle.backgroundColor =
        'rgb(' + barColor + ', ' + barColor + ', ' + barColor + ')';

      bars.push(<div style={specificStyle}/>);
    }

    var wrapperStyle = {
      position: 'relative',
      width: '64px',
      height: '64px',
    };
    var innerStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
    }
    return (
      <div style={wrapperStyle}><div style={innerStyle}>{bars}</div></div>
    );
  }
});
