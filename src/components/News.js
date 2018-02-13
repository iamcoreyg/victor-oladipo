import React, { Component } from 'react';
import Layout from './Layout';

class News extends Component {
    constructor() {
        super();
    }
    render() {
        return (
        <Layout>
            <div className="content-wrap">
            <div className="container">
                <h1>News • Coming Soon</h1>
            </div>
            </div>
        </Layout> 
        );
    }
}

export default News;
