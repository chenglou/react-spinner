import React from 'react';
import Spinner from '../';

const App = React.createClass({
  render: function() {
    const style = {
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

export default App;
