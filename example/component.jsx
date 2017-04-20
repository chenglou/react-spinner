import React from 'react';
import Spinner from '../index.jsx';

class App extends React.Component {
  render() {
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
};

export default App;
