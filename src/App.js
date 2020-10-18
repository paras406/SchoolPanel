import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  Login,
  Home,
} from './containers';
import {
  CustomRoute,
} from './components';



const StackNavigator = () => {

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "http://localhost:3000/js/tool.js";
    script.async = true;

    document.body.appendChild(script);
  });


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
        {/* <CustomRoute path="/zoomClass">
          <ZoomClass />
        </CustomRoute> */}
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
