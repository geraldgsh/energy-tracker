/* eslint-disable no-underscore-dangle */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import Home from '../containers/Home';
import Readings from '../containers/Readings';
import Reading from '../containers/Reading';
import AddReading from '../containers/AddReading';
import reducer from '../reducer/sessions';


const store = createStore(
  reducer, compose(persistState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

export default (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addreading" component={AddReading} />
        <Route path="/readings" component={Readings} />
        <Route path="/user/:userId/reading/:id" component={Reading} />
      </Switch>
    </Router>
  </Provider>
);

export { store };
