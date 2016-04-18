import React from 'react';

const Spinner = React.createClass({
  render: function() {
    let bars = [];
    const props = this.props;

    for (let i = 0; i < 12; i++) {
      let barStyle = {};
      barStyle.WebkitAnimationDelay = barStyle.animationDelay =
        (i - 12) / 10 + 's';

      barStyle.WebkitTransform = barStyle.transform =
        'rotate(' + (i * 30) + 'deg) translate(146%)';

      bars.push(
        <div style={barStyle} className="react-spinner_bar" key={i} />
      );
    }

    return (
      <div {...props} className={(props.className || '') + ' react-spinner'}>
        {bars}
      </div>
    );
  }
});

export default Spinner;
