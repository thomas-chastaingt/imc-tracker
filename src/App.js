import React from 'react';
import Input from './components/Input';
import Title from './components/Title';
import GraphicMen from './components/graphics/men';
import Calorie from './components/Calorie'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      height : null,
      weight : null,
      age : null
    };

  }


  handleHeight = (InputData) => {
    this.setState({
      height : InputData
    });
  }

  handleWeight = (InputData) => {
    this.setState({
      weight : InputData
    });
  }

  handleAge = (InputData) => {
    this.setState({
      age : InputData
    });
  }

  render(){
    return (
      <div className="App">
        <Title />
        <Input handleWeight = {this.handleWeight} handleHeight = {this.handleHeight} handleAge = {this.handleAge}/>
        <GraphicMen />
        <Calorie height={this.state.height} weight={this.state.weight} age={this.state.age} />
      </div>
    );
  }
}

export default App;
