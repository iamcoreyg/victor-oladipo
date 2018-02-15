import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu.js'
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {
  constructor(props) {
    super();
    this.state = {
      menuIsOpen: props.loading,
      transitioning: props.loading,
      loading: props.loading
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

  componentWillReceiveProps(props) {
    this.setState({ menuIsOpen: props.loading })
    this.setState({ transitioning: props.loading })
  }
  
  render() {
    return (
        <div>
          <Header menuHandler={this.menuHandler} transitioning={this.state.transitioning} />

          <nav className={`mobile-menu-list ${this.stateClass('menuIsOpen', 'open')}`}>
            <span className="mobile-menu-section-heading small-spaced">Artist</span>
            <NavigationMenu menu="artist" />

            <span className="mobile-menu-section-heading small-spaced">Athlete</span>
            <NavigationMenu menu="athlete"/>
          </nav>

          {this.props.children}
          <Footer />
        </div>
    );
  }
}

export default Layout;
