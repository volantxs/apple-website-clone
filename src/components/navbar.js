import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import  {CgShoppingBag } from 'react-icons/cg';
import  {BsApple } from 'react-icons/bs';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}><BsApple size={17} /></Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}>Store</Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}>Mac</Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}>iPad</Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}>iPhone</Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}>Watch</Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}>AirPods</Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}>TV & Home</Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}>Entertainment</Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}>Accessories</Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}>Support</Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}><BsSearch size={14} style={{position: "relative",top:"2px"}} /></Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}><CgShoppingBag size={16}  /></Link>
            </span>
            </nav>
            
    )
}

export default Navbar;