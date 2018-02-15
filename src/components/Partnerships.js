import React, { Component } from 'react';
import Layout from './Layout'
import Jordan from '../images/jordan.png'
import Fisher from '../images/fisher-imports.png'
import OffTop from '../images/off-top.png'
import Empire from '../images/empire.png'
import Feathery from '../images/feathery.png'

class Partnerships extends Component {
  constructor() {
    super()
    this.state = {
      stats: []
    }
  }

  render() {
    return (
      <Layout>
        <div className="content-wrap black-bg">
          <div className="container">

            <h2 className="text-center">Partnerships</h2>
            <hr />
            <div className="brand-logo"><img src={Jordan} /></div>
            <div className="brand-logo"><img src={Fisher} /></div>
            <div className="brand-logo"><img src={OffTop} /></div>
            <div className="brand-logo"><img src={Empire} /></div>
            <div className="brand-logo"><img src={Feathery} /></div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Partnerships;
