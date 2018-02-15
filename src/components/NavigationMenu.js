import React from 'react';
import { Link } from 'react-router-dom'

const NavigationMenu = (props) => {
    if (props.menu === "artist") {
        return (
            <span>
                <Link to={{ pathname: "/artist/bio"}}>Bio</Link>
                <Link to={{ pathname: "/photos/artist"}}>Photos</Link>
                <Link to={{ pathname: "/music"}}>Music</Link>
                <Link to={{ pathname: "/news/artist"}}>News</Link>
            </span>
        )   
    }

    if (props.menu === "athlete") {
        return (
            <span>
                <Link to={{ pathname: "/bio/athlete"}}>Bio</Link>
                <Link to={{ pathname: "/photos/athlete"}}>Photos</Link>
                <Link to={{ pathname: "/stats"}}>NBA Stats</Link>
                <Link to={{ pathname: "/news/artist"}}>News</Link>
                <Link to={{ pathname: "/contact"}}>
                    <i className="fa fa-envelope-o"></i>
                </Link>
            </span>
        )   
    }
}

export default NavigationMenu;