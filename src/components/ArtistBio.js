import React, { Component } from 'react';
import Slider from 'react-slick'
import Layout from './Layout';

class ArtistBio extends Component {
  constructor(props) {
    super();
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
            <Slider {...settings}>
              <div><img src="http://victoroladipo.com/wp-content/uploads/2017/02/victor-olapido-the-artist-bio-2.jpg" className="full-width margin-bottom" /></div>
              <div><img src="http://victoroladipo.com/wp-content/uploads/2017/02/victor-olapido-the-artist-bio-1.jpg" className="full-width margin-bottom" /></div>
            </Slider>
            <br />
            <hr />
            <p>
              Victor Oladipo (born May 4, 1992) is a NBA American professional basketball player for the Indiana Pacers of the National Basketball Association (NBA). Born and raised in Maryland right outside of Washington D.C.; he was drafted as the second overall pick in the 2013 NBA draft by the Orlando Magic and went on to be named to the NBA All-Rookie first team. Victor Oladipo’s first four seasons in the NBA have been impressive; Career averages of 15.9 points, 4.4 rebounds and 4 assists per game suggest it’s only a matter of time before he’s an All-Star. Winning the 2016-2017 Dunk of the Year Award for posterizing Dwight Howard proves that watching him play makes all that potential feel even more real—his game has all the makings of a versatile threat for years to come.
            </p>
            <p>
              On another note, when Oladipo is not on the court you are likely to catch him practicing his other passion of singing. From admitting that his mom had him singing in church at 7 or 8 years of age to singing being a past hidden talent that has come to the light, Oladipo shows no sings of slowing down. Having sang Usher’s “U Got It Bad” at his almamater during Hoosier Hysteria and “New York, New York” at the 2015 NBA All-Star Dunk contest, Oladipo is no stranger to the main stage.
            </p>
            <p>
              TMZ reports, “Whether he’s got a basketball or a microphone in his hand, Victor Oladipo is pretty damn impressive. TMZ Sports has video of the Indiana Pacers star busting out R. Kelly’s “I Believe I Can Fly” at a Florida water park earlier this summer and we gotta say … dude’s got some golden pipes. Here’s the thing … this wasn’t just a random performance … we talked with Oladipo about it, and he told us his rendition was part of a real deal talent show … AND HE TOOK FIRST PLACE!!”
            </p>
            <p>
              Oladipo says, “It could be something feathery!” after mentioning in an interview that the majority of professional athletes that have pursued music have been rappers in the past, could he be one the first to break into the R&B genre and garner success? Oladipo has been in the studio with Trey Songz, Chris Brown, Eric Bellinger, and seen with artist Lil’ Wayne and more. Only the future will tell what will come out of such encounters, Lets stay tuned!
              </p>
          </div>
        </div>
      </Layout> 
    );
  }
}

export default ArtistBio;
