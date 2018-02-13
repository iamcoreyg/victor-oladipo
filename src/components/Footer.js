import React from 'react';

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
                        <a href="./">Home</a>
                        <a href="./">Terms of Service</a>
                        <a href="./">Privacy</a>
                    </div>
                    <div className="col-sm-4 text-right foot-right">
                        <a href="./" className="social"><i className="fa fa-instagram"></i></a>
                        <a href="./" className="social"><i className="fa fa-facebook"></i></a>
                        <a href="./" className="social"><i className="fa fa-twitter"></i></a>
                        <a href="./" className="social"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;