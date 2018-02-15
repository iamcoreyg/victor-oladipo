import React from 'react';
import { Link } from 'react-router-dom'

const NavigationMenu = (props) => {
    if (props.menu === "artist") {
        return (
            <span>
                <Link to={{ pathname: "/photos/artist"}}>Photos</Link>
                <Link to={{ pathname: "/music"}}>Music</Link>
                <Link to={{ pathname: "/bio/artist"}}>Bio</Link>
                <Link to={{ pathname: "/news/the-artist"}}>News</Link>
                <Link to={{ pathname: "/partnerships"}}>Partnerships</Link>
            </span>
        )   
    }

    if (props.menu === "athlete") {
        return (
            <span>
                <Link to={{ pathname: "/photos/athlete"}}>Photos</Link>
                <Link to={{ pathname: "/bio/athlete"}}>Bio</Link>
                <Link to={{ pathname: "/stats"}}>NBA Stats</Link>
                <Link to={{ pathname: "/news/the-athlete"}}>News</Link>
                <Link to={{ pathname: "/partnerships"}}>Partnerships</Link>
                <Link to={{ pathname: "/page/contact"}}>
                    <i className="fa fa-envelope-o"></i>
                </Link>
            </span>
        )   
    }
}

export default NavigationMenu;