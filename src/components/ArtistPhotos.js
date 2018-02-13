import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import Layout from './Layout';

class ArtistPhotos extends Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
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

  render() {
   
    const PHOTO_SET = [
        {
          src: 'http://victoroladipo.com/wp-content/uploads/2017/10/vo-the-artist-photos-07-440x300.jpg',
          width: 1.46,
          height: 1
        },
        {
          src: 'http://victoroladipo.com/wp-content/uploads/2017/10/vo-the-artist-photos-06-440x300.jpg',
          width: 1.46,
          height: 1
        },
        {
            src: 'http://victoroladipo.com/wp-content/uploads/2017/10/vo-the-artist-photos-05.jpg',
            width: 1.46,
            height: 1
        },
        {
            src: 'http://victoroladipo.com/wp-content/uploads/2017/10/vo-the-artist-photos-04-440x300.png',
            width: 1.46,
            height: 1
        },
        {
            src: 'http://victoroladipo.com/wp-content/uploads/2017/10/vo-the-artist-photos-03-440x300.jpg',
            width: 1.46,
            height: 1
        },
        {
            src: 'http://victoroladipo.com/wp-content/uploads/2017/10/vo-the-artist-photos-02-440x300.jpg',
            width: 1.46,
            height: 1
        }
    ]

    return (
      <Layout>
        <div className="content-wrap">
          <div className="container">
            <h1>Artist Bio</h1>
            <hr />
            <Gallery photos={PHOTO_SET} onClick={this.openLightbox}/>
            <Lightbox images={PHOTO_SET}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
            />
          </div>
        </div>
      </Layout> 
    );
  }
}

export default ArtistPhotos;
