import React from 'react';

class Calorie extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            calorie: 0,
        }
    }

    componentDidMount()
    {
        let height = this.props.height;
        let weight = this.props.weight;
        let age = this.props.age;
            
    
            let cal = (10 * weight) + (6,25 * height) - ((5 * age) + 5);
            this.setState(
                {
                    calorie: cal,
                }
            )
        
        
    }

    render(){
        return (
            <div className="calorie-information">
                <div>You have to eat : {this.state.calorie} Kcal</div>
            </div>
          );
    }
    
  }
  
  export default Calorie;
  