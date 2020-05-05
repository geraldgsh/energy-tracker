import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import {SIGNEDOUT} from "../../actions";

export class Signout extends Component {
  constructor(props) {
    super(props)
  }
  onSubmit(e) {
    e.preventDefault();
    axios.delete("/api/users/sessions").
      then(() => this.props.logout())
  }

  render() {
    let {login} = this.props;
    if (login == false) return <Redirect to='/' />
    return (
      <React.Fragment>
        <button 
          type="button" 
          className="btn btn-warning"
          onClick={(e) => this.onSubmit(e)}
        >
          Logout
        </button>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  let { login, name } = state
  return {
    login, name
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(SIGNEDOUT())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signout);
