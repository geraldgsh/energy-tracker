import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Readings from '../containers/Readings';
import AddReading from '../containers/AddReading';
import Reading from '../containers/Reading';
import reducer from "../reducer/sessions"
import { Provider } from "react-redux"
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage'
import PrivateRoute from "./privateRoute"

const store = createStore(
  reducer, compose(persistState())
)

export default (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/addreading" component={AddReading} />
        <Route path="/readings" component={Readings} />
        <Route path="/reading" component={Reading} />
      </Switch>
    </Router>
  </Provider>  
);

export {store};
