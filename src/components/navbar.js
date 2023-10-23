import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import  {CgShoppingBag } from 'react-icons/cg';
import  {BsApple } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className='navbar-nav'>

        <div className='navbar'>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}><BsApple size={16} /></Link>
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
                <Link to="/" style={{color: "white", textDecoration: "none"}}><BsSearch size={14} style={{position: "relative",top:"2px"}} /></Link>
            </span>
            <span>
                <Link to="/" style={{color: "white", textDecoration: "none"}}><CgShoppingBag size={16}  /></Link>
            </span>
            </div>
        </div>
            
    )
}

export default Navbar;