import React from 'react';
import InputGraph from '../graph/InputGraph'

function Bedroom(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <React.Fragment>         
      <div className="row justify-content-center">
        <div className="row justify-content-center reading-header">
          <h4>Take your Bedroom Reading</h4>
        </div>
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={props.bedroom} />
        </div>       
      </div>
      <div className="row justify-content-center reading-input">      
        <input
          className="form-control"
          id="bedroom"
          name="bedroom"
          type="number"
          placeholder="Enter bedroom reading"
          value={props.bedroom}
          onChange={props.handleChange}
        />      
      </div>
    </React.Fragment>    
  );
}

function Study(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <React.Fragment>         
      <div className="row justify-content-center">
        <div className="row justify-content-center reading-header">
          <h4>Take your Study room Reading</h4>
        </div>
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={props.study} />
        </div>       
      </div>
      <div className="row justify-content-center reading-input">      
        <input
          className="form-control"
          id="study"
          name="study"
          type="number"
          placeholder="Enter study reading"
          value={props.study}
          onChange={props.handleChange}
        />      
      </div>
    </React.Fragment>  
  );
}

function Garage(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>         
      <div className="row justify-content-center">
        <div className="row justify-content-center reading-header">
          <h4>Take your Garage Reading</h4>
        </div>
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={props.garage} />
        </div>       
      </div>
      <div className="row justify-content-center reading-input">      
        <input
          className="form-control"
          id="garage"
          name="garage"
          type="number"
          placeholder="Enter garage reading"
          value={props.garage}
          onChange={props.handleChange}
        />      
      </div>
    </React.Fragment>    
  );
}

function Living(props) {
  if (props.currentStep !== 4) {
    return null
  } 
  return(
    <React.Fragment>         
      <div className="row justify-content-center">
        <div className="row justify-content-center reading-header">
          <h4>Take your Living Room Reading</h4>
        </div>
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={props.living} />
        </div>       
      </div>
      <div className="row justify-content-center reading-input">      
        <input
          className="form-control"
          id="living"
          name="living"
          type="number"
          placeholder="Enter living reading"
          value={props.living}
          onChange={props.handleChange}
        />      
      </div>
    </React.Fragment>  
  );
}

function Kitchen(props) {
  if (props.currentStep !== 5) {
    return null
  } 
  return(
    <React.Fragment>         
      <div className="row justify-content-center">
        <div className="row justify-content-center reading-header">
          <h4>Take your Kitchen Reading</h4>
        </div>
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={props.kitchen} />
        </div>       
      </div>
      <div className="row justify-content-center reading-input">      
        <input
          className="form-control"
          id="kitchen"
          name="kitchen"
          type="number"
          placeholder="Enter kitchen reading"
          value={props.kitchen}
          onChange={props.handleChange}
        />      
      </div>
    </React.Fragment>    
  );
}

function Guest(props) {
  if (props.currentStep !== 6) {
    return null
  } 
  return(
    <React.Fragment>
      <div className="row justify-content-center">
        <div className="row justify-content-center reading-header">
          <h4>Take your Guest Room Reading</h4>
        </div>
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={props.guest} />
        </div>       
      </div>
      <div className="row justify-content-center reading-input">      
        <input
          className="form-control"
          id="guest"
          name="guest"
          type="number"
          placeholder="Enter guest reading"
          value={props.guest}
          onChange={props.handleChange}
        />      
      </div>
    <button className="btn btn-success btn-block">Submit</button>
    </React.Fragment>
  );
}

class ReadingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      bedroom:  '',
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
