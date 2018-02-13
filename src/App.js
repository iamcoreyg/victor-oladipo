import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import ArtistBio from './components/ArtistBio'
import ArtistPhotos from './components/ArtistPhotos'

import AthleteBio from './components/AthleteBio'

import News from './components/News'
import Stats from './components/Stats'
import Contact from './components/Contact'
import './App.css';

class App extends Component {
  constructor(props) {
    super();
  }

  stateClass(state, className) {
    return this.state[state] ? className : ''
  }

  menuHandler(e) {
    e.preventDefault(e);
    this.setState({ menuIsOpen: !this.state.menuIsOpen })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/artist/bio" component={ArtistBio}/>
          
          <Route exact path="/photos/artist" component={ArtistPhotos}/>
          <Route exact path="/photos/athlete" component={ArtistPhotos}/>

          <Route exact path="/bio/athlete" component={AthleteBio}/>

          <Route exact path="/news/:side" component={News}/>
          <Route exact path="/stats" component={Stats}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
