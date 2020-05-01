import React from 'react';
import axios from "axios"
import {connect} from "react-redux";
import {SIGNEDIN} from "../actions"

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      success: true,
    }
  }
  handleChange(e) {
    this.setState(
      {
        [e.target.id]: e.target.value
      }      
    )
  }
  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    axios.post("/api/users/sessions", {
      user: {
        email,
        password,
      }
    }).
      then(response => response.data).
      then(response => {        
        if (response.code == 200) {
          this.props.login(response.user.name)
          this.props.history.push("/readings")
        } else if (response.code == 400) {
          this.setState({
            errors: response.errors,
          })
        }
      }
    )
  }
  render() {
    let { email, password } = this.state;
    return (
      <div className="tab-pane fade" id="user">
        <br />
        <fieldset>
          <div className="form-group">
            <div className="right-inner-addon">
              <i className="fa fa-envelope" />
              <input 
                className="form-control input-lg" 
                placeholder="Email" 
                type="text"
                id="email"
                value={email} 
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="right-inner-addon">
              <i className="fa fa-key" />
              <input 
                className="form-control input-lg" 
                placeholder="Password" 
                type="password"
                id="password"
                value={password}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>
        </fieldset>
        <br />
        <div className=" text-center">
          <button 
            className="btn btn-primary btn-success" 
            type="button"
            onClick={(e) => this.onSubmit(e)}
          >
            <i className="fa fa-user" />
            {' '}
            LOGIN
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (name => {
      dispatch(SIGNEDIN(name))
    })
  }
}

export default connect(null,mapDispatchToProps)(Signin);