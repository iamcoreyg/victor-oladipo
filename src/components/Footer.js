import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 foot-left">
                        Feathery Music Group <br />
                        &copy; Copyright 2018 | All Rights Reserved. <br />
                        <a href="./">Website Desigend & Powered by CG3Media</a>
                    </div>
                    <div className="col-sm-4 foot-center">
                        <Link to={{ pathname: "/"}}>Home</Link>
                        <Link to={{ pathname: "/page/terms-of-service"}}>Terms of Service</Link>
                        <Link to={{ pathname: "/page/privacy-policy"}}>Privacy Policy</Link>
                    </div>
                    <div className="col-sm-4 text-right foot-right">
                        <a target="_blank" href="https://www.instagram.com/vicoladipo/" className="social"><i className="fa fa-instagram"></i></a>
                        <a target="_blank" href="https://www.facebook.com/VicOladipo" className="social"><i className="fa fa-facebook"></i></a>
                        <a target="_blank" href="https://twitter.com/vicoladipo" className="social"><i className="fa fa-twitter"></i></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCf5fcEALUCA53oUW3mc8tiQ?pbjreload=10" className="social"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;