import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = () => {
  render() {
    const { path, component, login } = this.props;
    if (!login) {
      return <Redirect to="/" />;
    }
    return (
      <Route
        path={path}
        component={component}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { login } = state;
  return {
    login,
  };
};
export default connect(mapStateToProps, null)(PrivateRoute);
