import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  Login,
  Home,
  ZoomClass,
} from './containers';
import {
  CustomRoute,
} from './components';


const StackNavigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <CustomRoute path="/home">
          <Home />
        </CustomRoute>
        <CustomRoute path="/zoomClass">
          <ZoomClass />
        </CustomRoute>
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <StackNavigator />
  );
}

export default App;
