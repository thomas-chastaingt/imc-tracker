import React from 'react';
import Input from './components/Input';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value : null,
    };

  }
  render(){
    return (
      <div className="App">
        <Input />
      </div>
    );
  }
}

export default App;
