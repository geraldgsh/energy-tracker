/* eslint-disable no-underscore-dangle */
import React from 'react';
import axios from 'axios';
import {
  Bedroom,
  Study,
  Garage,
  Living,
  Kitchen,
  Guest,
} from './Rooms';

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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let { bedroom, study, garage, living, kitchen, guest } = this.state
    let consumption = Number(bedroom) + Number(study) + Number(garage) + Number(living) + Number(kitchen) + Number(guest)
    let available = (1800/30) - consumption
    let saved = Math.floor(100 - (100 * (consumption/(1800/30))))
    axios.post("/api/readings", {      
      bedroom, study, garage, living, kitchen, guest, consumption, available, saved,      
    })
    .then(response => response.data)
    .then(response => {
      if (response.code == 400) {
        console.log(response);
        this.setState({
          errors: response.errors,
        })
      } else if (response.code == 200) {
        this.setState({
          bedroom: "",
          study: "",
          garage: "",
          living: '',
          kitchen: "",
          consumption: "",
          available: "",
          saved: "",
        })
      }
    }
  )
  alert(`Your registration detail: \n 
  Bedroom: ${bedroom}\n 
  Study: ${study} \n
  Garage: ${garage} \n
  Living: ${living} \n
  Kitchen: ${kitchen} \n
  Guest: ${guest} \n
  Consumption: ${consumption} \n
  Available: ${available} \n
  Saved: ${saved} %`)
  }
  
  _next() {
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
    
  _prev() {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      // eslint-disable-next-line object-shorthand
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
