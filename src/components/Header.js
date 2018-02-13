import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Name from '../images/vic-text.png'

class Header extends Component {
    constructor(props) {
      super();
    }
  
    render() {
        return (
            <header>
                <div className="container">
                <div className="row">
                    <div className="col-3 text-left">
                    <a href="./" className={`mobile-menu-btn ${1 === '/' ? 'hide' : ''}`} onClick={this.props.menuHandler}>
                        <i className={`fa ${ this.props.transitioning ? 'fa-spin fa-spinner' : 'fa-bars'}`}></i>
                    </a>
                    </div>
                    <div className="col-6"><Link to={{ pathname: "/"}}><img src={Name} id="name" alt="Victor Oladipo"/></Link></div>
                    <div className="col-3"></div>
                </div>
                </div>
            </header>
        )
    }
}

export default Header;