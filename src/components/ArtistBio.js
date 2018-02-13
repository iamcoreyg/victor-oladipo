import React, { Component } from 'react';
import Slider from 'react-slick'
import Layout from './Layout';

class ArtistBio extends Component {
  constructor(props) {
    super();
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch('http://victoroladipo.com/content-api/index.php/the-artist/bio/?json=1',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then((data) => {
      this.setState({ content: data.page.content })
      data.page.attachments.forEach((image) => {
        this.setState({ photos: this.state.photos.concat([image.images.full.url]) })
      })
    })
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <Layout>
        <div className="content-wrap">
          <div className="container">
            <h1>Artist Bio</h1>
            <hr />
            {
              this.state.photos.length && <Slider {...settings}>
              {this.state.photos.map((image, i) => 
                <div><img src={image} className="full-width margin-bottom" /></div>
              )}
              </Slider> 
            }
            <br />
            <hr />
            <div dangerouslySetInnerHTML={{__html: this.state.content}} />
            
          </div>
        </div>
      </Layout> 
    );
  }
}

export default ArtistBio;
