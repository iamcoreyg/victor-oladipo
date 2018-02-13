import React from 'react'
import NavigationMenu from './NavigationMenu.js'
import Layout from './Layout'

const Home = (props) => (
    <Layout>
        <div className="home-wrap">
            <div className="home-left home-half">>
                <nav className="home-nav nav-left">
                    <NavigationMenu menu="artist" menuHandler={this.menuHandler}/>
                </nav>
            </div>
            
            <div className="home-right home-half">
                <nav className="home-nav nav-right">
                    <NavigationMenu menu="athlete" menuHandler={this.menuHandler}/>
                </nav>
            </div>
        </div>
    </Layout>
  )

  export default Home