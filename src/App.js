import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ArtistBio from './components/ArtistBio'
import ArtistPhotos from './components/ArtistPhotos'

import AthleteBio from './components/AthleteBio'
import AthletePhotos from './components/AthletePhotos'
import Contact from './components/Contact'
import Home from './components/Home'
import Music from './components/Music'
import News from './components/News'
import Stats from './components/Stats'
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
          <Route exact path="/photos/athlete" component={AthletePhotos}/>

          <Route exact path="/bio/athlete" component={AthleteBio}/>

          <Route exact path="/music" component={Music}/>
          <Route exact path="/news/:side" component={News}/>
          <Route exact path="/stats" component={Stats}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
