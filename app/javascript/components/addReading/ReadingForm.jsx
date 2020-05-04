import React from 'react';
import {
  Bedroom,
  Study,
  Garage,
  Living,
  Kitchen,
  Guest,
} from './Rooms'

class ReadingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      bedroom: '',
      study: '',
      garage: '',
      living: '',
      kitchen: '',
      guest: '', 
    };
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { bedroom, study, garage, living, kitchen, guest } = this.state
    alert(`Your registration detail: \n 
           Bedroom: ${bedroom}\n 
           Study: ${study} \n
           Garage: ${garage} \n
           Living: ${living} \n
           Kitchen: ${kitchen} \n
           Guest: ${guest}`)
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    switch (currentStep) {
      case 2:
        currentStep = 3;
        break;
      case 3:
        currentStep = 4;
        break;
      case 4:
        currentStep = 5;
        break;
      case 5:
        currentStep =6
        break;
      default:
        currentStep += 1;
    }

    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !== 1){
      return (
        <button 
          type="button" 
          id="prevBtn" 
          onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep < 6){
      return (
        <button 
          type="button"
          id="nextBtn"
          onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }

  render() {
    let { num } = this.props
    return (
      <React.Fragment>
        <form id="regForm" onSubmit={this.handleSubmit}>
          <Bedroom
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            bedroom={this.state.bedroom}
          />
          <Study 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            study={this.state.study}
          />
          <Garage
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            garage={this.state.garage}
          />
          <Living 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            living={this.state.living}
          />
          <Kitchen 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            kitchen={this.state.kitchen}
          />
          <Guest
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            guest={this.state.guest}
          />
          <div className="row justify-content-center btn-box">
            {this.previousButton()}
            {this.nextButton()}
          </div>
        </form>
      </React.Fragment>
    );
  }
} 

export default ReadingForm;
