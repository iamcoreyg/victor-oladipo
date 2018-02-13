import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu.js'
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {
  constructor(props) {
    super();
    this.state = {
      menuIsOpen: true,
      transitioning: true
      
    }
    this.menuHandler = this.menuHandler.bind(this);
  }

  stateClass(state, className) {
    return this.state[state] ? className : ''
  }

  menuHandler(e) {
    e.preventDefault(e);
    this.setState({ menuIsOpen: !this.state.menuIsOpen })
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({ menuIsOpen: false })
      this.setState({ transitioning: false })
    }.bind(this), 700)
  }
  
  render() {
    return (
        <div>
          <Header menuHandler={this.menuHandler} transitioning={this.state.transitioning} />

          <nav className={`mobile-menu-list ${this.stateClass('menuIsOpen', 'open')}`}>
            <span className="mobile-menu-section-heading small-spaced">Artist</span>
            <NavigationMenu menu="artist" menuHandler={this.menuHandler} />

            <span className="mobile-menu-section-heading small-spaced">Athlete</span>
            <NavigationMenu menu="athlete" menuHandler={this.menuHandler} />
          </nav>
          {this.props.children}
          <Footer />
        </div>
    );
  }
}

export default Layout;
