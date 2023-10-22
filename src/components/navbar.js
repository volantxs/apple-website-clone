import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>

            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>Apple</Link>
            </span>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>Store</Link>
            </span>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>Mac</Link>
            </span>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>iPad</Link>
            </span>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>iPhone</Link>
            </span>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>Watch</Link>
            </span>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>AirPods</Link>
            </span>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>TV & Home</Link>
            </span>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>Entertainment</Link>
            </span>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>Accessories</Link>
            </span>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>Support</Link>
            </span>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>Search</Link>
            </span>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>bag</Link>
            </span>
            </div>

    )
}

export default Navbar;