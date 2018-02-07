import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home'
import './App.css';
import Name from './images/vic-text.png'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <img src={Name} id="name" />
          </header>

          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
