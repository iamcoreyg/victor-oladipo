import React, { Component } from 'react';
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import Layout from './Layout';
import PageHeader from './PageHeader'

class ArtistBio extends Component {
  constructor(props) {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  }

  getImageById(attachments, id) {
    for(let i = 0; i < attachments.length; i++) {
      console.log(attachments[i].id)
      if (attachments[i].id == id) {
        return i
      }   
    }
  }

  componentDidMount() {
    fetch(`http://victoroladipo.com/content-api/index.php/${this.props.side}/bio/?json=1`,
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then((data) => {
      this.setState({ content: data.page.content })
      let attachments = data.page.custom_fields.attachments
      if (attachments) {
        let attachment_ids = JSON.parse(attachments).attachments.map(function(x) { return x.id })
        attachment_ids.forEach((id) => {
          let attachment = this.getImageById(data.page.attachments, id);
          let image = data.page.attachments[attachment]
          this.setState({ photos: this.state.photos.concat([image.images.full.url]) })
        })
      }
      
      this.setState({ loading: false })
      
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
      <Layout loading={this.state.loading}>
        <div className={`content-wrap ${this.props.side}-bio`}>
          <div className="bio-content">
            <div className="container">
              
              <center><PageHeader title={`${this.props.side.replace('-', ' ')} BIOGRAPHY  `} /></center>
              {
                this.state.photos.length && <Slider {...settings}>
                {this.state.photos.reverse().map((image, i) => 
                  <div><img src={image} className="full-width" /></div>
                )}
                </Slider> 
              }
              <br />
              <hr />
              <Link className="block-btn" to={{ pathname: `/photos/${this.props.side.replace('the-', '')}`}}>View {this.props.side.replace('-', ' ')} Gallery</Link>
              <br />
              <div dangerouslySetInnerHTML={{__html: this.state.content}} />
            </div>
          </div>
        </div>
      </Layout> 
    );
  }
}

export default ArtistBio;
