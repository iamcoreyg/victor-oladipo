import React, { Component } from 'react';
import Layout from './Layout'

class Stats extends Component {
  constructor() {
    super()
    this.state = {
      stats: []
    }
  }
  componentDidMount() {
    fetch('https://www.jasonbase.com/things/ExoP.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ stats: responseJson.stats })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  statKeys = {
    'MPG': 'Minutes Per Game',
    'FG%': 'Field Goal Percentage',
    '3P%': 'Three Point Percentage',
    'FT%': 'Free Throw Percentage',
    'PPG': 'Points Per Game',
    'RPG': 'Rebounds Per Game',
    'APG': 'Assists Per Game',
    'BPG': 'Blocks Per Game'
  }

  render() {
    return (
      <Layout>
        <div className="content-wrap">
          <div className="container">

            <h2 className="text-center">NBA Stats</h2>
            <hr />
            {
              Object.keys(this.state.stats).map((stat, i) => (
                <div className="stat">
                  <div className="stat-value">
                    <div className="row">
                      <div className="col-6">
                        {this.state.stats[stat].season}
                        <caption>Season</caption>
                      </div>
                      <div className="col-6">
                        {this.state.stats[stat].career}
                        <caption>Career</caption>
                      </div>
                    </div>
                  </div>
                  <div className="stat-name">{stat}</div>
                  <div className="stat-name-abbr">{this.statKeys[stat]}</div>
                </div>
              ))
            }
            <hr />
            <center><a href="http://www.nba.com/players/victor/oladipo/203506" target="_blank">Official NBA Profile</a></center>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Stats;
