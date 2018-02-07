import React from 'react'
import Logo from '../images/vo-symbol.png'

const Home = () => (
    <div>
        <div className="home-wrap">
            <div className="home-left home-half">
                <img src={Logo} class="logo" />
                <nav className="nav-left">
                    <a href="./">Bio</a>
                    <a href="./">News</a>
                    <a href="./">Music</a>
                    <a href="./">Photo</a>
                    <a href="./">Contact</a>
                </nav>
            </div>
            
            <div className="home-right home-half">
            <img src={Logo} class="logo" />
                <nav className="nav-right">
                    <a href="./">Bio</a>
                    <a href="./">News</a>
                    <a href="./">Photo</a>
                    <a href="./">NBA Stats</a>
                    <a href="./">Contact</a>
                </nav>
            </div>
        </div>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 foot-left">
                        Feathery Music Group <br />
                        &copy; Copyright 2018 | All Rights Reserved. <br />
                        <a href="./">Website Desigend & Powered by CG3Media</a>
                    </div>
                    <div className="col-sm-4 foot-center">
                        <a href="./">Home</a>
                        <a href="./">Terms of Service</a>
                        <a href="./">Privacy</a>
                    </div>
                    <div className="col-sm-4 text-right foot-right">
                        <a href="./" class="social"><i className="fa fa-instagram"></i></a>
                        <a href="./" class="social"><i className="fa fa-facebook"></i></a>
                        <a href="./" class="social"><i className="fa fa-twitter"></i></a>
                        <a href="./" class="social"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )

  export default Home