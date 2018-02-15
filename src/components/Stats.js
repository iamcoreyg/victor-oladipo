import React, { Component } from 'react';
import Layout from './Layout'

class Stats extends Component {
  componentDidMount() {
    fetch('http://stats.nba.com/stats/playercareerstats/?playerID=203506&perMode=Totals')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.resultSets);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  stats = {
    'MPG': {
      season: 34.5,
      career: 33.4
    },
    'PPG': {
      season: 24.4,
      career: 17.1
    },
    'RPG': {
      season: 5.4,
      career: 4.5
    },
    'APG': {
      season: 4.1,
      career: 3.8
    },
    'BPG': {
      season: 0.8,
      career: 0.5
    },
    'FG%': {
      season: 48.7,
      career: 44.4
    },
    '3P%': {
      season: 38.3,
      career: 35.4
    },
    'FT%': {
      season: 80.6,
      career: 80.1
    },
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
              Object.keys(this.stats).map((stat, i) => (
                <div className="stat">
                  <div className="stat-value">
                    <div className="row">
                      <div className="col-6">
                        {this.stats[stat].season}
                        <caption>Season</caption>
                      </div>
                      <div className="col-6">
                        {this.stats[stat].career}
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
