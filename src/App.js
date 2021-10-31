import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Webpages from './webpages';
import Login from "./webpages/Login";
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
          exact path='/' component={Login}
          ></Route>
          <Route
          exact path='/transactions/general-information' component={Webpages}
          ></Route>
        </Switch>
      </Router>
         
    </div>
  );
}

export default App;
