import React, { Component } from 'react';
import Layout from './Layout'

class Stats extends Component {
  componentDidMount() {
    fetch('http://stats.nba.com/stats/playercareerstats/?playerID=203506&perMode=Totals')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    return (
      <Layout>
        <div className="content-wrap">
          <div className="container">

            <h1 className="text-center">Stats</h1>
            <hr />
            <p>Coming Soon</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Stats;
