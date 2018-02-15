import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import Layout from './Layout';
import PageHeader from './PageHeader'

class PhotosLayout extends Component {
  constructor() {
    super();
    this.state = { 
      loading: true,
      currentImage: 0,
      photos: [] 
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  componentDidMount() {
    fetch(`http://victoroladipo.com/content-api/index.php/${this.props.side}/photos/?json=1`,
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
        this.setState({ 
          photos: this.state.photos.concat([
            {
              src: image.images.full.url,
              width: image.images.full.width/image.images.full.height,
              height: 1
            }
          ]) 
        })
      })

      this.setState({ loading: false })

    })
  }

  render() {
    return (
      <Layout loading={this.state.loading}>
        <div className="content-wrap">
          <div className="container">
            <PageHeader title={`${this.props.side.replace('-', ' ')} // Photos`} />
            <div className="gallery-wrap padding-bottom">
              <Gallery photos={this.state.photos} onClick={this.openLightbox}/>
              <Lightbox images={this.state.photos}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
              />
            </div>
          </div>
        </div>
      </Layout> 
    );
  }
}

export default PhotosLayout;
