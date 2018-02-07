import React from 'react'
import Logo from '../images/vo-symbol.png'

const Home = () => (
    <div className="home-wrap">
        <img src={Logo} id="logo" />
        <div className="home-left home-half">
            <nav className="nav-left">
                <a href="./">Bio</a>
                <a href="./">News</a>
                <a href="./">Music</a>
                <a href="./">Photo</a>
                <a href="./">Contact</a>
            </nav>
        </div>
        
        <div className="home-right home-half">
            <nav className="nav-right">
                <a href="./">Bio</a>
                <a href="./">News</a>
                <a href="./">Photo</a>
                <a href="./">Contact</a>
            </nav>
        </div>
        <footer>

        </footer>
    </div>
  )

  export default Home