import React from 'react';
import './App.css';
import Auth from './Components/Auth/index';
import { Switch, Route, Redirect } from "react-router-dom";
import Console from './Components/Console/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/auth"  component = {Auth}/>
        <Route path ="/console" component = {Console} />
        <Redirect from="/" to="/auth"/>
      </Switch>
    </div>
  );
}

export default App;
