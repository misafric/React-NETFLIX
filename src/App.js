import React from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}

      </Router>
    </div>
  );
}

export default App;
