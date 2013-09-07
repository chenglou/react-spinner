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
  render: function() {
    var bars = [];
    var barWidth = 13;
    var barHeight = 4;

    var generalStyle = {
      width: barWidth,
      height: barHeight,
      top: -barHeight / 2,
      left: -barWidth / 2,
    };
    var specificStyle;
    var barColor;

    for (var i = 0; i < 12; i++) {
      specificStyle = shallowClone(generalStyle);
      specificStyle.WebkitAnimationDelay = specificStyle.animationDelay = (i - 12) / 10 + 's';
      specificStyle.WebkitTransform = specificStyle.transform = 'rotate(' + (i * 30) + 'deg) translate(19px)';
      bars.push(<div style={specificStyle} className="loading-spinner-bar"/>);
    }

    var wrapperStyle = {
      width: '64px',
      height: '64px',
    };
    return (
      <div style={wrapperStyle} className="loading-spinner"><div className="loading-spinner-inner">{bars}</div></div>
    );
  }
});
