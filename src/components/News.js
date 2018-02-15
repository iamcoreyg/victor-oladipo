import React, { Component } from 'react';
import Layout from './Layout';
import PageHeader from './PageHeader'

class News extends Component {
  constructor(props) {
    super();
    this.state = {
        category: props.category,
        categoryTitle: null,
        posts: null,
        loading: true
    }
  }

  componentDidMount() {
    fetch(`http://victoroladipo.com/content-api/index.php/category/${this.state.category}/?json=1`,
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then((data) => {
        this.setState({ categoryTitle: data.category.title })
        this.setState({ posts: data.posts })
        this.setState({ loading: false })
    })
  }

  postImage(post) {
      if(post.attachments && post.attachments[0]) {
          let image;
          if (post.attachments[0].images.medium != undefined) {
              image = post.attachments[0].images.medium.url
          } else {
            image = post.attachments[0].images.full.url
          }
          return {
              image: image,
              caption: post.attachments[0] && post.attachments[0].caption
          }
      } else {
          return { image: null, caption: null }
      }
  }

  render() {
    return (
      <Layout loading={this.state.loading}>
        <div className="content-wrap black-bg">
          <div className="container">
            <PageHeader title={this.state.categoryTitle} />
            {
                this.state.posts && this.state.posts.map((post, i) => (
                    <div className="row post">
                        <div className="col-sm-3 post-image">
                            <img src={ this.postImage(post).image} />
                            <caption>{this.postImage(post).caption}</caption>
                        </div>
                        <div className="col-sm-9">
                            <span className="post-title" dangerouslySetInnerHTML={{__html: post.title}} /><br />
                            <div className="post-content" dangerouslySetInnerHTML={{__html: post.content}} />
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
      </Layout> 
    );
  }
}

export default News;
