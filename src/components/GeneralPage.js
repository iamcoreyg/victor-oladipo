import React, { Component } from 'react';
import Layout from './Layout';
import PageHeader from './PageHeader'

class GeneralPage extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: true,
      page: props.match.params.page
    }
  }

  getData() {
    fetch(`http://victoroladipo.com/content-api/index.php/${this.state.page}/?json=1`,
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then((data) => {
      this.setState({ content: data.page.content })
      this.setState({ loading: false })
      
    })
  }

  componentDidMount() {
    this.getData()
  }

  render(match) {
    return (
      <Layout loading={this.state.loading}>
        <div className="content-wrap">
          <div className="container">
            <PageHeader title={this.state.page.replace(/-/g, ' ')} />
            
            <div dangerouslySetInnerHTML={{__html: this.state.content}} />
            
          </div>
        </div>
      </Layout> 
    );
  }
}

export default GeneralPage;
